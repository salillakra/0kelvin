import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Page = () => {
  const { date } = useLocalSearchParams();
  return (
    <View>
      <Text>{new Date(date as string).toLocaleDateString()}</Text>
    </View>
  );
};

export default Page;
