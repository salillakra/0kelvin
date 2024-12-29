import { Link } from "expo-router";
import React from "react";
import { View, Text, ImageBackground } from "react-native";

const DeveloperMessage = () => {
  return (
    <View className="flex-1 bg-gray-50">
      <ImageBackground
        source={require("../assets/images/wallpaper.avif")}
        className="flex-1 justify-center items-center w-full overflow-hidden"
      >
        <View className="bg-[rgba(200,200,200,0.5)] mx-3 p-6 rounded-lg shadow-lg max-w-3xl ">
          <Text className="text-3xl font-Roboto-Bold text-black text-center">
            Message from the Developer
          </Text>
          <Text className="mt-4 text-lg text-gray-900 font-Roboto-Regular text-center">
            Dear users, this is Salil Lakra, the developer of this 0kelvin. I am
            an undergraduate student at BIT Mesra, and I have developed 0kelvin
            as part of my project. I hope you find this app helpful and
            enjoyable.
          </Text>
          <Text className="mt-4 text-lg text-gray-900 font-Roboto-Regular text-center">
            Built with love, care, and a lot of coding hours If you have
            suggestions, feedback, or just want to chat about tech, feel free to
            reach out. Your thoughts are important to me.
          </Text>
          <Text className="mt-4 text-lg text-gray-900 font-Roboto-Regular text-center">
            I am constantly working to improve and update the app, so stay tuned
            for new features and improvements. Thanks for being a part of this
            journey!
          </Text>
          <Text className="mt-4 text-base text-purple-800 font-Roboto-Regular text-center">
            0kelvin is opensource and available on GitHub. Feel free to check by
            the link below.
          </Text>
          <Link
            href="https://salillakra.vercel.app"
            className="mt-6 text-xl font-Roboto-Light text-blue-600 underline text-center"
          >
            Visit my website
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DeveloperMessage;
