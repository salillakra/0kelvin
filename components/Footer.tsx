import React from "react";
import { View, Text } from "react-native";

const Footer = () => {

  return (
    <View className="my-6 flex mx-6 items-center justify-center bg-white p-4 rounded-xl shadow-md">


      <Text className="text-sm text-gray-600 mb-2">
        Made with ❤️ by Salil Lakra
      </Text>

      <View className="flex-row items-center justify-center">
        <Text className="text-sm text-gray-600 ml-2">
          © {new Date().getFullYear()} Okelvin. All rights reserved.
        </Text>
      </View>
    </View>
  );
};

export default Footer;
