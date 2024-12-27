import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  type DailyWeather,
  useDailyWeatherStore,
} from "@/store/useDailyWeather";
import { useWeatherCode } from "@/hooks/useWeatherCode";
import { useRouter } from "expo-router";
import { useForcastIndexDate } from "@/store/useForcastDayDate";

interface ForecastElementProps extends DailyWeather {
  index: number;
}

const ForecastElement = (props: ForecastElementProps) => {
  const router = useRouter();
  const setDate = useForcastIndexDate((state) => state.setForcastIndexDate);
  const setIndex = useForcastIndexDate((state) => state.setIndex);
  const { getWeatherIcon } = useWeatherCode();
  const redirect = (time: string) => {
    setIndex(props.index);
    router.push("/dailyTab");
    setDate(time);
  };
  return (
    <TouchableOpacity
      onPress={() => redirect(props.time)}
      className="flex my-1 rounded-2xl bg-[rgba(225,225,225,0.65)] flex-row justify-between items-center px-4 py-1"
    >
      <View className="flex flex-col items-start">
        <Text className="font-Roboto-Regular text-gray-700 text-lg">
          {new Date(props.time).toLocaleDateString("en-IN", {
            weekday: "short",
            day: "numeric",
            month: "short",
          })}
        </Text>
      </View>
      <View className="flex flex-row items-center w-1/2 justify-between">
        <View className="p-2 rounded-full bg-green-50">
          {getWeatherIcon({
            WeatherCode: props.weatherCode,
            IsDay: 1,
            height: 30,
            width: 30,
          })}
        </View>
        <View className="flex flex-row">
          <Text className="font-Roboto-Regular text-lg text-gray-700 ">
            {parseInt(props.maxTemperature.toString())}°C
          </Text>
          <Text className="font-Roboto-Regular text-gray-700 text-lg">
            {" "}
            <Text className="text-slate-400">/</Text>{" "}
            {parseInt(props.minTemperature.toString())}°C
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Forecast = () => {
  const DailyData = useDailyWeatherStore((state) => state.data);
  return (
    <View>
      <View className="pl-5 mt-10">
        <Text className="font-Roboto-Bold text-2xl">Forecast</Text>
        <Text className="font-Roboto-Thin text-xs">Next 14 days</Text>
      </View>
      <View className="flex flex-col px-4 mt-2">
        {DailyData.map((item, index) => {
          return <ForecastElement key={index} index={index} {...item} />;
        })}
      </View>
    </View>
  );
};

export default Forecast;
