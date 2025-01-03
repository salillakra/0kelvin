import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import { Image} from 'expo-image'
import Markdown from "react-native-markdown-display";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Type for the weather tip response
type WeatherTipResponse = {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
};

const fetchWeatherTip = async (weatherData: string): Promise<string> => {
  const response = await axios<any>({
    url: "https://api.groq.com/openai/v1/chat/completions",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.EXPO_PUBLIC_GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
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
    }),
  });

  if (!response.data) {
    throw new Error("Failed to fetch weather tip");
  }

  const data = response.data as WeatherTipResponse;
  return data.choices[0]?.message?.content ?? "No tip available";
};

const WeatherTips = ({ WeatherData }: { WeatherData: string }) => {
  const {
    data: weatherTip,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["weatherTip", WeatherData],
    queryFn: () => fetchWeatherTip(WeatherData),
    staleTime: 24 * 60 * 60 * 1000, // Consider data fresh for 24 hours
    gcTime: 24 * 60 * 60 * 1000, // Keep unused data in cache for 24 hours
  });

  if (error) {
    return (
      <View className="flex-1 bg-[rgba(225,225,225,0.65) px-3 py-6">
        <Card className="mb-6 rounded-xl">
          <Card.Content className="bg-gray-200">
            <Text className="text-red-500 text-center">
              Failed to fetch weather tips. Please try again.
            </Text>
          </Card.Content>
        </Card>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-[rgba(225,225,225,0.65) px-3 py-6">
      <Card className="mb-6 rounded-xl">
        <Card.Content className="bg-gray-200">
          <View className="flex-row gap-3 justify-center items-center">
            <Image
              style={{ width: 40, height: 40, borderRadius: 20 }}
              alt="Okelvin icon"
              key="Okelvin icon"
              contentFit="cover"
              source={require("@/assets/images/black-bear.gif")}
            />
            <Text className="text-center text-2xl text-blue-800 font-bold">
              Kelvin's Weather Tips
            </Text>
          </View>
          {isLoading ? (
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
    </View>
  );
};

export default WeatherTips;
