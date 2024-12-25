import { create } from "zustand";

export interface DailyWeather {
  time: string;
  maxTemperature: number;
  minTemperature: number;
  weatherCode: number;
  sunrise: string;
  sunset: string;
  uvIndex: number;
  aqi?: number;
  precipitation: number;
  windSpeed: number;
  windDirection: number;
}

interface DailyWeatherState {
  data: DailyWeather[];
  update: (data: DailyWeather[]) => void;
}

export const useDailyWeatherStore = create<DailyWeatherState>((set) => ({
  data: [
    {
      time: "2021-09-06",
      maxTemperature: 30,
      minTemperature: 20,
      weatherCode: 1,
      sunrise: "06:00",
      sunset: "18:00",
      uvIndex: 5,
      aqi: 55,
      precipitation: 0,
      windSpeed: 10,
      windDirection: 180,
    },
    {
      time: "2021-09-07",
      maxTemperature: 31,
      minTemperature: 21,
      weatherCode: 2,
      sunrise: "06:00",
      sunset: "18:00",
      aqi: 55,
      uvIndex: 6,
      precipitation: 0,
      windSpeed: 10,
      windDirection: 180,
    },
  ],
  update: (data) => set((state) => ({ ...state, data })),
}));
