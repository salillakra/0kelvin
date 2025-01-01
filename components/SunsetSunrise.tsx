import React from 'react';
import { View, Text } from 'react-native';
import { SunIcon, MoonIcon } from 'react-native-heroicons/outline';

const SunriseSunset = ({
  sunrise,
  sunset,
}: {
  sunrise: string;
  sunset: string;
}) => {
  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  return (
    <View className="bg-gray-200 rounded-2xl p-6 mx-4 my-2">
      <Text className="text-gray-700 text-lg mb-4 font-medium">Today's Sun Schedule</Text>

      <View className="flex-row justify-between">
        <View className="items-center">
          <View className="bg-orange-100 p-4 rounded-full mb-3">
            <SunIcon size={32} color="#f97316" />
          </View>
          <Text className="text-orange-600 font-medium mb-1">Sunrise</Text>
          <Text className="text-gray-800 text-xl font-semibold">{formatTime(sunrise)}</Text>
        </View>

        <View className="h-full w-px bg-gray-800" />

        <View className="items-center">
          <View className="bg-blue-100 p-4 rounded-full mb-3">
            <MoonIcon size={32} color="#3b82f6" />
          </View>
          <Text className="text-blue-600 font-medium mb-1">Sunset</Text>
          <Text className="text-gray-800 text-xl font-semibold">{formatTime(sunset)}</Text>
        </View>
      </View>
    </View>
  );
};

export default SunriseSunset;