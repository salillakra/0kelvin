import React from "react";
import { View, Text, Dimensions } from "react-native";
import { SunIcon, MoonIcon } from "react-native-heroicons/outline";

const { width } = Dimensions.get("window");

const SunriseSunset = ({
  sunrise,
  sunset,
}: {
  sunrise: string;
  sunset: string;
}) => {
  const getHourFromISOString = (isoString: string) => {
    const date = new Date(isoString);
    return date.getHours();
  };

  const sunriseHour = getHourFromISOString(sunrise);
  const sunsetHour = getHourFromISOString(sunset);

  const currentHour = new Date().getHours();
  const totalDayDuration = sunsetHour - sunriseHour; // Total duration of daylight
  const totalNightDuration = 24 - sunsetHour + sunriseHour; // Total duration of night

  const progressDay = Math.max(
    0,
    Math.min(1, (currentHour - sunriseHour) / totalDayDuration)
  );
  const progressNight = Math.max(
    0,
    Math.min(1, (currentHour - sunsetHour + 24) / totalNightDuration)
  );

  return (
    //write heading
    <>
      <Text className="text-xl font-Roboto-Bold mb-4 ml-4">
        Sunrise and Sunset
      </Text>
      <View className="bg-[rgba(225,225,225,0.65)] rounded-xl p-6 mx-4 mb-5 max-w-screen-sm">
        {/* Sunrise and Sunset Section */}
        <View className="flex-row justify-between items-center mb-6">
          <View className="flex-row items-center">
            <SunIcon className="w-10 h-10 text-yellow-500" />
            <View className="ml-3">
              <Text className="text-sm text-gray-500">Sunrise</Text>
              <Text className="text-xl font-semibold text-gray-800">
                {sunrise.slice(11, 16)}
              </Text>
            </View>
          </View>

          <View className="flex-row items-center">
            <MoonIcon className="w-10 h-10 text-blue-500" />
            <View className="ml-3">
              <Text className="text-sm text-gray-500">Sunset</Text>
              <Text className="text-xl font-semibold text-gray-800">
                {sunset.slice(11, 16)}
              </Text>
            </View>
          </View>
        </View>

        {/* Progress Bar Section */}
        <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <View
            className="h-full bg-yellow-500"
            style={{ width: `${progressDay * 100}%` }}
          />
          <View
            className="h-full bg-blue-500"
            style={{
              width: `${progressNight * 100}%`,
              marginLeft: `${progressDay * 100}%`,
            }}
          />
        </View>
      </View>
    </>
  );
};

export default SunriseSunset;
