import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useCurrentWeatherStore } from "@/store/useCurrentWeather";
import { useWeatherCode } from "@/hooks/useWeatherCode";
import { fetchWeather } from "@/utils/fetchWeather";
import * as Location from "expo-location";
import { useHourlyWeatherStore } from "@/store/useHourlyWeather";
import { useDailyWeatherStore } from "@/store/useDailyWeather";

const Hero = () => {
  //using the CustomHook to get the Icon (in Hooks folder)
  const { getWeatherIcon, getWeatherTitle } = useWeatherCode();

  //using the zustand store to get the current weather data
  const CurrentWeather = useCurrentWeatherStore(
    (state) => state.CurrentWeather
  );

  const updateCurrentWeather = useCurrentWeatherStore((state) => state.update);
  const updateHourlyWeather = useHourlyWeatherStore((state) => state.update);
  const updateDailyWeather = useDailyWeatherStore((state) => state.update);

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Please enable location access to get the weather data");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      if (location) {
        await fetchWeather({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          getWeatherTitle: getWeatherTitle,
          updateCurrentWeather: updateCurrentWeather,
          updateHourlyWeather: updateHourlyWeather,
          updateDailyWeather: updateDailyWeather,
        });
      } else {
        console.log("Location is not available");
      }
    }
    getCurrentLocation();
  }, []);

  return (
    <>
      <View className="mx-4 mt-10 rounded-xl p-6 flex-row justify-between bg-[rgba(225,225,225,0.65)]">
        <View className="flex-col flex items-start">
          <Text className="text-2xl font-Roboto-Medium text-black ml-2 mb-2">
            Now
          </Text>
          <View className="flex-row items-center">
            <Text className="font-Roboto-Regular pt-2 text-6xl text-gray-900">
              {parseInt(CurrentWeather.temperature.toString())}&#176;
            </Text>
            {getWeatherIcon({
              WeatherCode: CurrentWeather.weatherCode,
              IsDay: CurrentWeather.isDay,
              height: 50,
              width: 50,
            })}
          </View>
          <View className="flex-row mt-2">
            <Text className="text-lg font-Roboto-Medium text-gray-600 ">
              High: {parseInt(CurrentWeather.high.toString())}&#176;
            </Text>
            <Text className="text-lg mx-1 font-Roboto-Bold text-gray-600">
              ⋅
            </Text>
            <Text className="text-lg font-Roboto-Medium text-gray-600">
              Low: {parseInt(CurrentWeather.low.toString())}&#176;
            </Text>
          </View>
        </View>
        <View className="flex-col justify-center items-start">
          <Text className="text-xl font-medium text-gray-800">
            {CurrentWeather.weather}
          </Text>
          <Text className="text-lg font-Roboto-Light text-gray-600">
            Feels Like {parseInt(CurrentWeather.feelsLike.toString())}&#176;
          </Text>
        </View>
      </View>
    </>
  );
};

export default Hero;
