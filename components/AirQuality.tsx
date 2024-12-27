// Import dependencies
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { Divider } from "react-native-paper";

const AirQualityMeter = ({ aqi = 50 }) => {
  // Colors based on AQI levels
  type AQILevel =
    | "good"
    | "moderate"
    | "unhealthyForSensitiveGroups"
    | "unhealthy"
    | "veryUnhealthy"
    | "hazardous";

  const gradientColors: Record<AQILevel, string> = {
    good: "#00e400", // Green (Good)
    moderate: "#ffff00", // Yellow (Moderate)
    unhealthyForSensitiveGroups: "#ff7e00", // Orange (Unhealthy for Sensitive Groups)
    unhealthy: "#ff0000", // Red (Unhealthy)
    veryUnhealthy: "#8f3f97", // Purple (Very Unhealthy)
    hazardous: "#7e0023", // Maroon (Hazardous)
  };

  const [aqiLabel, setAqiLabel] = useState("Good");
  const [description, setDescription] = useState(
    "Air quality is considered satisfactory, and air pollution poses little or no risk."
  );

  // Update AQI label and animated value
  useEffect(() => {
    let label = "Good";
    let desc =
      "Air quality is considered satisfactory, and air pollution poses little or no risk.";

    if (aqi <= 55) {
      label = "Good";
      desc =
        "Air quality is considered satisfactory, and air pollution poses little or no risk.";
    } else if (aqi <= 155) {
      label = "Moderate";
      desc =
        "Air quality is acceptable; however, there may be a moderate health concern for some people who are unusually sensitive to air pollution.";
    } else if (aqi <= 255) {
      label = "Unhealthy for Sensitive Groups";
      desc =
        "Members of sensitive groups may experience health effects. The general public is not likely to be affected.";
    } else if (aqi <= 355) {
      label = "Unhealthy";
      desc =
        "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.";
    } else if (aqi <= 425) {
      label = "Very Unhealthy";
      desc =
        "Health alert: everyone may experience more serious health effects.";
    } else {
      label = "Hazardous";
      desc =
        "Health warning of emergency conditions: everyone is more likely to be affected.";
    }

    setAqiLabel(label);
    setDescription(desc);
  }, [aqi]);

  return (
    <View className="flex justify-center px-4 my-10 items-center">
      <View className=" p-4 bg-[rgba(225,225,225,0.65)] rounded-lg container">
        <View className="flex-row gap-2 justify-start items-center">
          <Entypo name="air" size={24} color="black" />
          <Text className="text-xl font-Roboto-Regular text-gray-800">
            Air Quality
          </Text>
        </View>
        <View className="flex-row gap-2 justify-start items-center mt-5 p-2 rounded">
          <Text className="text-3xl font-Roboto-Regular text-gray-700">
            {aqiLabel}
          </Text>
          <Text
            style={{
              color:
                gradientColors[
                  aqiLabel.toLowerCase().replace(/ /g, "") as AQILevel
                ],
            }}
            className="text-3xl font-Roboto-Bold text-gray-800"
          >
            {aqi}
          </Text>
        </View>
        <Divider className="mt-4" />
        <Text className="mt-1 text-base font-Roboto-Regular text-gray-500 text-center">
          {description}
        </Text>
        <View className="flex-row justify-start items-center mt-5">
          <View
          className=" rounded-3xl"
            style={{
              width: (aqi / 400) * 1000,
              height: 3.5,
              backgroundColor:
                gradientColors[
                  aqiLabel.toLowerCase().replace(/ /g, "") as AQILevel
                ],
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default AirQualityMeter;
