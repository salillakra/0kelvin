import { Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  MapPinIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
} from "react-native-heroicons/outline";
import { Link } from "expo-router";
import { useCurrentWeatherStore } from "@/store/useCurrentWeather";
import axios from "axios";
import { Divider } from "react-native-paper";



const ReverseGeocoding = async (
  latitude: number,
  longitude: number,
  setPlace: React.Dispatch<React.SetStateAction<string>>
) => {
  const API = process.env.EXPO_PUBLIC_API_KEY;
  const URI = `https://us1.locationiq.com/v1/reverse?format=json`;
  const response = await axios.get<any>(URI, {
    params: {
      key: API,
      lat: latitude,
      lon: longitude,
    },
  });
  const data = response.data;
  setPlace(data.address.city);
};

const Header = () => {
  const [place, setPlace] = useState<string>("");
  const latitude = useCurrentWeatherStore((state) => state.CurrentWeather.latitude);
  const longitude = useCurrentWeatherStore((state) => state.CurrentWeather.longitude);

  useEffect(() => {
    if (latitude && longitude) {
      ReverseGeocoding(latitude, longitude, setPlace);
    }
  }, [latitude, longitude]);

  return (
    <>
      <View className="flex px-5 mt-4 justify-between flex-row items-center ">
        <View className="flex flex-col ">
          <Text className="text-Black font-bold text-xl">
            {place ? place : "Delhi"}
          </Text>
          <MapPinIcon color={"rgb(0,0,0)"} size={12} />
        </View>

        <View className="fles gap-3 flex-row justify-end items-center">
          <Link href="/Search">
            <MagnifyingGlassIcon color={"rgb(0,0,0)"} size={30} />
          </Link>
          <TouchableOpacity>
            <Cog6ToothIcon color={"rgb(0,0,0)"} size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <Divider bold className="mt-5" />
    </>
  );
};
export default Header;
