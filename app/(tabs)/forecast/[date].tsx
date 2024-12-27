import { View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native-paper";
import { useDailyWeatherStore } from "@/store/useDailyWeather";
import { useWeatherCode } from "@/hooks/useWeatherCode";
import { useDailyHourlyForecastStore } from "@/store/useHourlyWeather";
import Hourly from "@/components/Hourly";
interface ForecastCompProps {
  date: string;
}

const ForecastComp = (props: ForecastCompProps) => {
  const { getWeatherIcon, getWeatherTitle } = useWeatherCode();
  const dailyWeather = useDailyWeatherStore((state) => state.data);
  const DailyHourlyWeather = useDailyHourlyForecastStore(
    (state) => state.hourlyWeather
  );

  const dataForThisComp_Daily = dailyWeather.filter(
    (item) => new Date(item.time).getDate() === new Date(props.date).getDate()
  );
  const dataForThisComp_Hourly = DailyHourlyWeather.filter(
    (item) => new Date(item.time).getDate() === new Date(props.date).getDate()
  );

  return (
    <View>
      <View>
        <Text className="text-gray-400" variant="bodyMedium">
          {new Date(dataForThisComp_Daily[0].time).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
          })}
        </Text>
        <View className="flex flex-row">
          <View className="flex gap-3 flex-row">
            <Text className="font-Roboto-Regular" variant="headlineLarge">
              {parseInt(dataForThisComp_Daily[0].minTemperature.toString())}
            </Text>
            <Text className="font-Roboto-Regular" variant="headlineLarge">
              /
            </Text>
            <Text className="font-Roboto-Regular" variant="headlineLarge">
              {parseInt(dataForThisComp_Daily[0].maxTemperature.toString())}
            </Text>
          </View>
          <View>
            {getWeatherIcon({
              WeatherCode: dataForThisComp_Daily[0].weatherCode,
              IsDay: 1,
              height: 40,
              width: 40,
            })}
          </View>
        </View>
        <Text
          className="font-Roboto-Regular text-gray-400"
          variant="bodyMedium"
        >
          {getWeatherTitle(dataForThisComp_Daily[0].weatherCode)}
        </Text>
      </View>
      <Hourly HourlyData={dataForThisComp_Hourly} />
    </View>
  );
};

const Page = () => {
  const { date } = useLocalSearchParams();
  return (
    <View>
      <ForecastComp date={date.toString()} />
    </View>
  );
};

export default Page;
