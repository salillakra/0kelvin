import { create } from "zustand";


export interface HourlyWeather {
    temperature: number;
    time: string;
    weatherCode: number;
}

interface HourlyWeatherState {
    hourlyWeather: HourlyWeather[];
    update: (data: HourlyWeather[]) => void;
}

export const useHourlyWeatherStore = create<HourlyWeatherState>((set) => ({
    // State
    hourlyWeather: [
        {
            temperature: 15,
            time: "2023-10-01T00:00:00Z",
            weatherCode: 100
        },
        {
            temperature: 17,
            time: "2023-10-01T01:00:00Z",
            weatherCode: 101
        },
        {
            temperature: 16,
            time: "2023-10-01T02:00:00Z",
            weatherCode: 102
        }
    ],
    // Setters
    update: (data) => set((state) => ({ ...state, hourlyWeather: data }))
}));