import React, { useRef } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-paper";
import { useDailyWeatherStore } from "@/store/useDailyWeather";
import * as Haptics from "expo-haptics";
import { Slot, useRouter } from "expo-router";
import { useWeatherCode } from "@/hooks/useWeatherCode";
import Animated from "react-native-reanimated"; // import Animated from react-native-reanimated

interface TabsData {
  date: string;
  WeatherCode: number;
  MaxTemp: number;
  MinTemp: number;
  index: number;
  isSelected: boolean;
  onSelect: (index: number) => void;
}

const DateLayout: React.FC<TabsData> = (props) => {
  const router = useRouter()
  const { getWeatherIcon } = useWeatherCode();
  const redirect = (time: string) => {
    router.push(`/(tabs)/forecast/${props.date}`);
  };
  return (
    <TouchableOpacity
      onPress={() => {
        props.onSelect(props.index);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
        redirect(props.date);
      }}
      className="flex-1 relative mx-2 items-center flex-col px-1 bg-gray-300 rounded-xl gap-1 justify-center h-32 w-20"
    >
      <Text className="text-slate-500 font-Roboto-Regular text-lg">
        {new Date(props.date).toLocaleDateString("en-US", {
          weekday: "short",
          day: "numeric",
        })}
      </Text>
      <View className="rounded-full bg-green-50 p-2">
        {getWeatherIcon({
          WeatherCode: props.WeatherCode,
          height: 24,
          width: 24,
          IsDay: 1,
        })}
      </View>

      <View className="flex flex-row items-center">
        <Text className="text-slate-500 text-base font-Roboto-Medium">
          {parseInt(props.MaxTemp.toString())}°
        </Text>
        <Text className="text-slate-500 text-base font-Roboto-Light mx-1">
          /
        </Text>
        <Text className="text-slate-500 text-base font-Roboto-Medium">
          {parseInt(props.MinTemp.toString())}°
        </Text>
      </View>
      {props.isSelected && (
        <View className="h-2 absolute w-[60%] bg-indigo-500 rounded-t-3xl z-10 bottom-[-3px]"></View>
      )}
    </TouchableOpacity>
  );
};

export default function TabLayout() {
  const dailyWeatherData = useDailyWeatherStore((state) => state.data);
  const [selected, setSelected] = React.useState<number | null>(null);
  const flatListRef = useRef<FlatList>(null);

  const handleSelect = (index: number) => {
    setSelected(index);
    flatListRef.current?.scrollToIndex({
      animated: true,
      index,
      viewPosition: 0.5,
    });
  };

  const scrollToValidIndex = (info: { index: number }) => {
    const totalItems = dailyWeatherData.length;
    if (info.index < 0 || info.index >= totalItems) {
      console.warn("Invalid index for FlatList scrollToIndex");
      return;
    }
    flatListRef.current?.scrollToIndex({
      animated: true,
      index: info.index,
      viewPosition: 0.5,
    });
  };

  return (
    <>
      <View className="flex mx-4 flex-row mt-5">
        <Animated.FlatList 
          ref={flatListRef}
          data={dailyWeatherData}
          pagingEnabled={false} 
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <DateLayout
              index={index}
              date={item.time}
              WeatherCode={item.weatherCode}
              MaxTemp={item.maxTemperature}
              MinTemp={item.minTemperature}
              isSelected={selected === index}
              onSelect={handleSelect}
            />
          )}
          keyExtractor={(item) => item.time}
          horizontal
          getItemLayout={(data, index) => ({
            length: 84.3,
            offset: 84.3 * index,
            index,
          })}
          initialScrollIndex={selected ?? 0} 
          onScrollToIndexFailed={scrollToValidIndex}
        />
      </View>
      <Divider bold className="my-4" />
      <Slot />
    </>
  );
}
