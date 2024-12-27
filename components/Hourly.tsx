import { Text, View, FlatList } from "react-native";
import React from "react";
import { useWeatherCode } from "@/hooks/useWeatherCode";

const HourlyItem = (props: {
  time: string;
  weatherCode: number;
  isDay: number;
  temperature: number;
  index: number;
}) => {
  const { getWeatherIcon } = useWeatherCode();

  return (
    <View className="items-center bg-transparent flex my-4 gap-2 mx-1 flex-col-reverse justify-center px-3  w-20">
      <Text className="text-base font-Roboto-Regular mb-2">
        {props.index === 0 &&
        new Date().getTime() < new Date(props.time).getTime() &&
        new Date().getDate() === new Date(props.time).getDate()
          ? "Now"
          : new Date(props.time).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            })}
      </Text>
      <View className="bg-green-50 rounded-full p-2 mb-2">
        {getWeatherIcon({
          WeatherCode: props.weatherCode,
          IsDay: props.isDay,
          height: 30,
          width: 30,
        })}
      </View>
      <Text className="text-base font-Roboto-Regular mb-2">
        {parseInt(props.temperature.toString())}
        {"°C"}
      </Text>
    </View>
  );
};

const Hourly = (props: { HourlyData: ArrayLike<any> | null | undefined }) => {
  const isDayCheck = (time: string) => {
    const ServerTime = new Date(time).getHours();
    const startTime = 6;
    const endTime = 18;

    if (ServerTime >= startTime && ServerTime < endTime) {
      return 1; // Daytime
    }
    return 0; // Nighttime
  };

  return (
    <View className="mt-10">
      <Text className="text-xl font-Roboto-Bold mb-3 ml-4">
        Hourly Forecast
      </Text>
      <View className="flex rounded-2xl mx-4 bg-[rgba(225,225,225,0.65)] py-2 px-2 flex-row justify-between ">
        <FlatList
          horizontal
          data={props.HourlyData}
          renderItem={({ item, index }) => {
            return (
              <HourlyItem
                index={index}
                key={index}
                isDay={isDayCheck(item.time)}
                {...item}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default Hourly;
