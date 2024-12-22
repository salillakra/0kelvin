import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/SearchBar";
import Hero from "@/components/Hero";
import Hourly from "@/components/Hourly";

const WeatherApp = () => {
	return (
		<SafeAreaView className="flex-1 relative ">
			<ImageBackground blurRadius={5} source={require("@/assets/wallpaper.jpg")} style={StyleSheet.absoluteFill} />
			<ScrollView>
				<SearchBar />
				<Hero />
				<Hourly />
			</ScrollView>

		</SafeAreaView>
	);
};

export default WeatherApp;
