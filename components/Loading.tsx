import React from "react";
import { View, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const LoadingScreen = () => {
  return (
    <View
      className={`flex-1 h-screen absolute z-10 inset-0 bg-[rgba(0,0,0,0.8)] justify-center items-center`}
    >
      {/* React Native Paper Activity Indicator */}
      <ActivityIndicator  animating={true} color="#ffffff" size="large" />

      {/* Loading Text */}
      <Text className={`mt-4 text-white text-lg font-semibold`}>
        Loading, please wait...
      </Text>
    </View>
  );
};

export default LoadingScreen;
