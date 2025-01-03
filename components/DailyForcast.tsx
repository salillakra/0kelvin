import { View, Text } from "react-native";
import React from "react";
import { useDailyWeatherStore } from "@/store/useDailyWeather";
import { useWeatherCode } from "@/hooks/useWeatherCode";
import { useDailyHourlyForecastStore } from "@/store/useHourlyWeather";
import Hourly from "@/components/Hourly";
import WeatherConditions from "@/components/CurrentConditions";
import SunriseSunset from "./SunsetSunrise";
import { Divider } from "react-native-paper";
import Footer from "./Footer";
interface ForecastCompProps {
  date: string;
}

const TellTodayOrTomorrow = (date: string) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  if (new Date(date).getDate() === today.getDate()) {
    return "Today";
  } else if (new Date(date).getDate() === tomorrow.getDate()) {
    return "Tomorrow";
  } else {
    return new Date(date).toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "short",
    });
  }
};

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
      <View className="flex flex-col gap-1 mx-4 bg-[rgba(225,225,225,0.65)] p-4 rounded-lg">
        <Text className="text-gray-500 mb-2 font-Roboto-Regular text-xl">
          {TellTodayOrTomorrow(props.date)}
        </Text>
        <View className="flex flex-row items-center justify-start">
          <View className="flex flex-row items-baseline gap-2">
            <Text className=" font-Roboto-Medium text-blue-950 text-6xl">
              {parseInt(dataForThisComp_Daily[0].maxTemperature.toString())}°
            </Text>
            <Text className="text-gray-500 text-6xl">/</Text>
            <Text className=" font-Roboto-Medium text-blue-950 text-6xl">
              {parseInt(dataForThisComp_Daily[0].minTemperature.toString())}°
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
        <Text className="text-gray-500 font-Roboto-Regular text-xl">
          {getWeatherTitle(dataForThisComp_Daily[0].weatherCode)}
        </Text>
      </View>
      <Hourly HourlyData={dataForThisComp_Hourly} />
      <WeatherConditions
        Temp={
          (dataForThisComp_Daily[0].maxTemperature +
            dataForThisComp_Daily[0].minTemperature) / 2
        }
        wind_direction={dataForThisComp_Daily[0].windDirection.toString()}
        uvIndex={dataForThisComp_Daily[0].uvIndex}
        wind_speed={dataForThisComp_Daily[0].windSpeed}
        precipitation={dataForThisComp_Daily[0].precipitation.toString()}
        snowfall_sum={dataForThisComp_Daily[0].snowfall_sum}
      />
      <Divider />
      <SunriseSunset sunset={dataForThisComp_Daily[0].sunset} sunrise={dataForThisComp_Daily[0].sunrise} />
      <Divider/>
    </View>
  );
};

const DailyForcast = ({ date }: { date: string }) => {
  return (
    <View>
      <ForecastComp date={date} />
      <Footer />
    </View>
  );
};

export default DailyForcast;
