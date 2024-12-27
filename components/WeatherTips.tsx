import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, Alert, Image } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import Markdown from "react-native-markdown-display";
import { SunIcon, CloudIcon, MoonIcon } from "react-native-heroicons/outline";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const WeatherTips = ({ WeatherData }: { WeatherData: string }) => {
  const [weatherData, setWeatherData] = useState<string>("");
  const [weatherTip, setWeatherTip] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchWeatherTip = async () => {
    setWeatherData(WeatherData); // set the weather data to the state
    try {
      const cachedTip = await AsyncStorage.getItem("weatherTip");
      if (cachedTip) {
        setWeatherTip(cachedTip);
        setLoading(false);
        return;
      }

      const aiResponse = await axios.post<any>(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          messages: [
            {
              role: "system",
              content:
                "First, introduce yourself by telling your name. Act like a lovely person named Kelvin an AI Weather Assitant. Address the user as 'Dear' and provide lifeStyle tips and tricks for the day and the upcoming week according to the data provided. Additionally, suggest what they should carry if they're going outside, or whether they should stay indoors in 120 words only & use emojis & humour. & never forget to say 'Love, Kelvin' at the end. & always be positive & cheerful. & always be helpful & informative. & never doubt on your source it's accurate what you get as data tell it & give funfacts make it engaging so the reader enjoys it. & don't specify any date like 5 Aug ",
            },
            {
              role: "user",
              content: `What's the weather advice for today & week? ${weatherData}`,
            },
          ],
          model: "llama-3.1-8b-instant",
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.EXPO_PUBLIC_GROQ_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      const tip = aiResponse.data?.choices?.[0]?.message?.content;
      setWeatherTip(tip);
      await AsyncStorage.setItem("weatherTip", tip);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch weather tips. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherTip();
  }, []);

  //cleaning cache
  useEffect(() => {
    const clearCache = async () => {
      try {
        await AsyncStorage.removeItem("weatherTip");
      } catch (e) {
        console.log("Error clearing cache", e);
      }
    };
  
    // Clear cache after a set interval 
    const cacheClearInterval = setInterval(clearCache, 24 * 60 * 60 * 1000);
    return () => clearInterval(cacheClearInterval); // Cleanup on unmount
  }, []);
  

  return (
    <View className="flex-1 bg-[rgba(225,225,225,0.65) px-3 py-6">
      <Card className="mb-6 rounded-xl">
        <Card.Content className="bg-gray-200 ">
          <View className="flex-row gap-4  items-center">
            <Image
              className="w-8 h-8 object-cover"
              alt="0kelvin icon"
              key="0kelvin icon"
              source={require("@/assets/images/icon.png")}
            />
            <Text className="text-center text-2xl text-blue-800 font-bold">
              Kelvin’s Weather Tips
            </Text>
          </View>
          {loading ? (
            <ActivityIndicator size="large" color="#1E90FF" className="mt-4" />
          ) : (
            <Paragraph className="mt-4 text-gray-700 text-center text-base">
              {weatherTip ? (
                <Markdown
                  style={{
                    text: {
                      color: "#4B5563",
                      fontSize: 16,
                      lineHeight: 24,
                    },
                  }}
                >
                  {weatherTip}
                </Markdown>
              ) : (
                "No tips available right now. Please check back later."
              )}
            </Paragraph>
          )}
        </Card.Content>
      </Card>

      <View className="flex-row justify-around mt-6">
        <View className="items-center">
          <SunIcon height={35} width={35} color="#eab308" />
          <Text className="text-gray-800 mt-2 font-medium">Sunny</Text>
        </View>
        <View className="items-center">
          <MoonIcon height={35} width={35} color="#3b82f6" />
          <Text className="text-gray-800 mt-2 font-medium">Rainy</Text>
        </View>
        <View className="items-center">
          <CloudIcon height={35} width={35} color="#6b7280" />
          <Text className="text-gray-800 mt-2 font-medium">Cloudy</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherTips;
