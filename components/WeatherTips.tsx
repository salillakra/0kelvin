import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, Alert, Image } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import Markdown from "react-native-markdown-display";
import { SunIcon, CloudIcon, MoonIcon } from "react-native-heroicons/outline";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const WeatherTips = ({ WeatherData }: { WeatherData: string }) => {
  const [weatherTip, setWeatherTip] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchWeatherTip = async () => {
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
                "First, introduce yourself by telling your name. Act like a lovely person named Kelvin an AI Weather Assitant. Address the user as 'Dear' and provide tips and tricks for the day and the upcoming week. Additionally, suggest what they should carry if they're going outside, or whether they should stay indoors in 120 words only & use emojis & humour. & never forget to say 'Love, Kelvin' at the end. & always be positive & cheerful. & always be helpful & informative. & never doubt on your source it's accurate what you get as data tell it & give funfacts make it engaging so the reader enjoys it.",
            },
            {
              role: "user",
              content: `What's the weather advice for today & week? ${WeatherData}`,
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

  return (
    <View className="flex-1 bg-blue-100 p-6">
      <Card className="mb-6 rounded-xl shadow-lg">
        <Card.Content>
          <View className="flex-row gap-4  items-center">
            <Image
              className="w-8 h-8 object-cover"
              alt="0kelvin icon"
              key="0kelvin icon"
              source={require("@/assets/images/icon.png")}
            />
            <Title className="text-center text-xl text-blue-800 font-bold">
              Kelvin’s Weather Tips
            </Title>
          </View>
          {loading ? (
            <ActivityIndicator size="large" color="#1E90FF" className="mt-4" />
          ) : (
            <Paragraph className="mt-4 text-gray-700 text-center text-base">
              {weatherTip ? (
                <Markdown
                  style={{
                    body: {
                      color: "#374151",
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
