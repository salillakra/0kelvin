import React, { useRef, useState } from "react";
import {
  FlatList,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "react-native-paper";
import { useDailyWeatherStore } from "@/store/useDailyWeather";
import * as Haptics from "expo-haptics";
import { useWeatherCode } from "@/hooks/useWeatherCode";
import Animated, { SlideInRight } from "react-native-reanimated";
import DailyForcast from "@/components/DailyForcast";
import { useForcastIndexDate } from "@/store/useForcastDayDate";

interface TabsData {
  date: string;
  WeatherCode: number;
  MaxTemp: number;
  MinTemp: number;
  index: number;
  isSelected: boolean;
  setDate: (date: string) => void;
  onSelect: (index: number) => void;
}

const DateLayout: React.FC<TabsData> = (props) => {
  const setIndex = useForcastIndexDate((state) => state.setIndex);
  const { getWeatherIcon } = useWeatherCode();
  return (
    <TouchableOpacity
      onPress={() => {
        props.onSelect(props.index);
        if (Platform.OS === "ios" || Platform.OS === "android") {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
        }
        props.setDate(props.date);
        setIndex(props.index);
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
          height: 30,
          width: 30,
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

export default function DailyTab() {
  const dailyWeatherData = useDailyWeatherStore((state) => state.data);
  const [selected, setSelected] = useState<number | null>(null);
  const date = useForcastIndexDate((state) => state.forcastIndexDate);
  const setDate = useForcastIndexDate((state) => state.setForcastIndexDate);
  const flatListRef = useRef<FlatList>(null);
  const GlobalIndex = useForcastIndexDate((state) => state.index);

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
    <ScrollView>
      <View className="flex mx-4 flex-row mt-5">
        <Animated.FlatList
          entering={SlideInRight.springify(2000)}
          contentContainerStyle={{ flexGrow: 1 }}
          ref={flatListRef}
          data={dailyWeatherData}
          pagingEnabled={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <DateLayout
              setDate={setDate}
              index={index}
              date={item.time}
              WeatherCode={item.weatherCode}
              MaxTemp={item.maxTemperature}
              MinTemp={item.minTemperature}
              isSelected={index === GlobalIndex}
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
          initialScrollIndex={GlobalIndex}
          onScrollToIndexFailed={scrollToValidIndex}
        />
      </View>
      <Divider bold className="my-4" />
      <DailyForcast date={date} />
    </ScrollView>
  );
}
