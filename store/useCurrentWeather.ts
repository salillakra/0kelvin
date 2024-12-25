//using zustand to create a store for the current weather data
import { create } from "zustand";

export interface WeatherData {
  temperature: number;
  weatherCode: number;
  feelsLike: number;
  weather: string;
  longitude: number;
  latitude: number;
  isDay: number;
  high: number;
  low: number;
}

interface CurrentWeatherState {
  CurrentWeather: WeatherData;
  update: (data: WeatherData) => void;
}

export const useCurrentWeatherStore = create<CurrentWeatherState>((set) => ({
  // State
  CurrentWeather: {
    temperature: 20,
    weatherCode: 1,
    longitude: 0,
    latitude: 0,
    isDay: 1,
    feelsLike: 20,
    weather: "Partly Cloudy",
    high: 22,
    low: 12,
  },
  // Setters
  update: (data: WeatherData) =>
    set((state) => ({ ...state, CurrentWeather: data })),
}));
