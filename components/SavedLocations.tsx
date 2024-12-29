import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MapPinIcon, XCircleIcon } from "react-native-heroicons/solid";
import React, { useEffect, useState } from "react";
import { Divider } from "react-native-paper";
import { Button } from "react-native-paper";
import * as Location from "expo-location";
import { useWeatherCode } from "@/hooks/useWeatherCode";
import { getSavedLocations, StoreLocations } from "@/utils/StoreLocations";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocation } from "@/store/useLocation";
import { ReverseGeocoding } from "@/utils/ReverseGeoLocation";
import { useRouter } from "expo-router";

interface SavedLocationsProps {
  location?: {
    latitude: number;
    longitude: number;
  };
  weatherCode: number;
  placeName: string;
  temperature: number;
  isDay: number;
  index: number;
  isManage: boolean;
  onClickOnX: React.Dispatch<React.SetStateAction<boolean>>;
}

const SavedItems = (props: SavedLocationsProps) => {
  const { getWeatherIcon, getWeatherTitle } = useWeatherCode();
  const updateLocation = useLocation((state) => state.setLocation);
  const router = useRouter();

  const deleteSavedLocation = async () => {
    const location = await getSavedLocations();
    const deletedLocation = location.filter(
      (item, localindex) => localindex !== props.index
    );

    await AsyncStorage.setItem(
      "SavedLocations",
      JSON.stringify(deletedLocation)
    );

    props.onClickOnX((value) => !value);
  };
  return (
    <TouchableOpacity
      onPress={() => {
        if (props.location?.latitude && props.location?.longitude) {
          console.log("props.location", props.location);
          updateLocation({
            latitude: props.location.latitude,
            longitude: props.location.longitude,
            placeName: props.placeName,
          });
          router.push("/");
        }
        console.log("props.location", props.location);
      }}
    >
      <Divider />
      <View className="flex pl-3 my-2 items-center w-full flex-row justify-between px-3 ">
        <View className="flex flex-row gap-4">
          <View>
            {getWeatherIcon({
              WeatherCode: props.weatherCode,
              IsDay: props.isDay,
              height: 40,
              width: 40,
            })}
          </View>
          <View className="flex flex-col">
            <Text className="font-Roboto-Light text-xl w-64 text-nowrap text-ellipsis overflow-hidden">
              {props.placeName}
            </Text>
            <Text className="font-Roboto-Light text-sm">
              {`${props.temperature}°C ${getWeatherTitle(props.weatherCode)}`}
            </Text>
          </View>
        </View>
        {!props.isManage && (
          <Button onPress={deleteSavedLocation}>
            <XCircleIcon color={"#000"} size={22} />
          </Button>
        )}
      </View>
      <Divider />
    </TouchableOpacity>
  );
};

const SavedLocationsComp = ({ className }: { className?: string }) => {
  const [SavedLocations, setSavedLocations] = useState<any[]>([]);
  const [isManage, setIsManage] = useState(true);
  const [forceRender, setForceRender] = useState(false); // to force render the component on cross Click
  const setLocation = useLocation((state) => state.setLocation);

  useEffect(() => {
    async function fetchSavedLocations() {
      const locations = await getSavedLocations();
      setSavedLocations(locations);
    }
    fetchSavedLocations();
  }, [isManage, forceRender, setLocation]);

  async function getLiveLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Please allow location permission to use this feature."
      );
      return;
    }

    let location = await Location.getCurrentPositionAsync();
    const { latitude, longitude } = location.coords;
    const placeName = await ReverseGeocoding(latitude, longitude); // get place name from coordinates
    setLocation({ latitude, longitude, placeName: placeName }); // set location to global state
    StoreLocations({ location: { latitude, longitude }, placeName: placeName }); // store location to async storage
  }

  return (
    <View className={className}>
      <TouchableOpacity
        onPress={getLiveLocation}
        className="flex gap-2 w-44 mt-2 ml-4 rounded-[50px] bg-blue-400 justify-center flex-row items-center py-2 px-3"
      >
        <MapPinIcon size={20} color={"#fff"} />
        <Text className="font-Roboto-Regular text-white">Use location</Text>
      </TouchableOpacity>
      <View>
        <View className="flex my-4 px-3 flex-row items-center justify-between">
          <Text className="text-xl font-Roboto-Regular text-blue-600">
            Saved locations
          </Text>
          <Button
            className="font-Roboto-Regular text-xl"
            onPress={() => setIsManage((value) => !value)}
          >
            {isManage ? "Manage" : "Done"}
          </Button>
        </View>

        <View className="mt-2">
          {SavedLocations.map((item, index: number) => (
            <SavedItems
              key={index}
              index={index}
              weatherCode={item.weatherCode}
              placeName={item.placeName}
              temperature={item.temperature}
              isDay={item.isDay}
              onClickOnX={setForceRender}
              isManage={isManage}
              location={{
                latitude: item.location.latitude,
                longitude: item.location.longitude,
              }}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default SavedLocationsComp;
