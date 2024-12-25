import { create } from "zustand";

export interface DailyWeather {
  time: string;
  maxTemperature: number;
  minTemperature: number;
  weatherCode: number;
  sunrise: string;
  sunset: string;
  uvIndex: number;
  precipitation: number;
  windSpeed: number;
}

interface DailyWeatherState {
  data: DailyWeather[];
  update: (data: DailyWeather[]) => void;
}

export const useDailyWeatherStore = create<DailyWeatherState>((set) => ({
  data: [],
  update: (data) => set((state) => ({ ...state, data })),
}));
