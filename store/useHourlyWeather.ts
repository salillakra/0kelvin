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
    hourlyWeather: new Array<HourlyWeather>(),
    // Setters
    update: (data) => set((state) => ({ ...state, hourlyWeather: data }))
}));