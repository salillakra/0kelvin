import { Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useCurrentWeatherStore } from "@/store/useCurrentWeather";
import { useWeatherCode } from "@/hooks/useWeatherCode";
import { Button } from "react-native-paper";
import { fetchWeather } from "@/utils/fetchWeather";
import * as Location from "expo-location";
import { useHourlyWeatherStore } from "@/store/useHourlyWeather";

const Hero = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
      if (location) {
        console.log("Location:", location);
        fetchWeather({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          getWeatherTitle: getWeatherTitle,
          updateWeather: updateWeather,
          updateHourlyWeather: updateHourlyWeather,
        });
      } else {
        console.log("Location is not available");
      }
    }
    getCurrentLocation();
  }, []);
  //using the CustomHook to get the Icon (in Hooks folder)
  const { getWeatherIcon, getWeatherTitle } = useWeatherCode();

  //using the zustand store to get the current weather data
  const temperature = useCurrentWeatherStore((state) => state.temperature);
  const weather = useCurrentWeatherStore((state) => state.weather);
  const weatherCode = useCurrentWeatherStore((state) => state.weatherCode);
  const feelsLike = useCurrentWeatherStore((state) => state.feelsLike);
  const isDay = useCurrentWeatherStore((state) => state.isDay);
  const high = useCurrentWeatherStore((state) => state.high);
  const low = useCurrentWeatherStore((state) => state.low);

  const updateWeather = useCurrentWeatherStore((state) => state.update);
  const updateHourlyWeather = useHourlyWeatherStore((state) => state.update);

  return (
    <>
      <View className="mx-4 mt-10 rounded-xl p-6 flex-row justify-between bg-[rgba(225,225,225,0.65)]">
        <View className="flex-col flex items-start">
          <Text className="text-2xl font-Roboto-Medium text-black ml-2 mb-2">
            Now
          </Text>
          <View className="flex-row items-center">
            <Text className="font-Roboto-Regular pt-2 text-6xl text-gray-900">
              {temperature}&#176;
            </Text>
            {getWeatherIcon({
              WeatherCode: weatherCode,
              IsDay: isDay,
              height: 50,
              width: 50,
            })}
          </View>
          <View className="flex-row mt-2">
            <Text className="text-lg font-Roboto-Medium text-gray-600 mr-4">
              High: {high}&#176;
            </Text>
            <Text className="text-lg font-Roboto-Medium text-gray-600">
              Low: {low}&#176;
            </Text>
          </View>
        </View>
        <View className="flex-col justify-center items-start">
          <Text className="text-xl font-medium text-gray-800">{weather}</Text>
          <Text className="text-lg font-Roboto-Light text-gray-600">
            Feels Like {feelsLike}&#176;
          </Text>
        </View>
      </View>
    </>
  );
};

export default Hero;
