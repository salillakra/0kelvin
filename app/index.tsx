import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/SearchBar";

const WeatherApp = () => {
	return (
		<SafeAreaView className="flex-1 ">
			<SearchBar />
			<View className="">
				<Text className=" text-4xl font-bold">Weather App</Text>
			</View>
		</SafeAreaView>
	);
};

export default WeatherApp;
