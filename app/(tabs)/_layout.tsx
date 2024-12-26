import { useWeatherCode } from "@/hooks/useWeatherCode";
import { Slot, Stack } from "expo-router";
import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { Divider } from "react-native-paper";
import { useDailyWeatherStore } from "@/store/useDailyWeather";

interface tabsData {
  date: string;
  WeatherCode: number;
  MaxTemp: number;
  MinTemp: number;
}

const DateLayout: React.FC<tabsData> = (props) => {
  const { getWeatherIcon } = useWeatherCode();
  return (
    <View className="flex-1 mx-2 items-center flex-col px-1 bg-gray-300 rounded-xl gap-1 justify-center h-28 w-20">
      <Text className="text-slate-500 font-Roboto-Regular text-lg">
        {new Date(props.date).toLocaleDateString("en-IN", {
          weekday: "short",
        })}
      </Text>
      <View className=" rounded-full bg-green-50 p-2">
        {getWeatherIcon({
          WeatherCode: props.WeatherCode,
          height: 24,
          width: 24,
          IsDay: 1,
        })}
      </View>

      <View className="flex flex-row items-center">
        <Text className="text-slate-500 text-base font-Roboto-Medium ">
          {parseInt(props.MaxTemp.toString())}°
        </Text>
        <Text className="text-slate-500 text-base font-Roboto-Light mx-1">
          /
        </Text>
        <Text className="text-slate-500 text-base font-Roboto-Medium">
          {parseInt(props.MinTemp.toString())}°
        </Text>
      </View>
    </View>
  );
};

export default function TabLayout() {
  const dailyWeatherData = useDailyWeatherStore((state) => state.data);
  return (
    <>
      <View className="flex mx-4 flex-row mt-5">
        <FlatList
          data={dailyWeatherData}
          renderItem={({ item }) => (
            <DateLayout
              date={item.time}
              WeatherCode={item.weatherCode}
              MaxTemp={item.maxTemperature}
              MinTemp={item.minTemperature}
            />
          )}
          keyExtractor={(item) => item.time}
          horizontal
        />
      </View>
      <Divider bold className="my-4" />
      <Slot />
    </>
  );
}
