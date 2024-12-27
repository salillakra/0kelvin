import { create } from "zustand";


interface IForcastDayDate {
  forcastIndexDate: string;
  setForcastIndexDate: (date: string) => void;
}
export const useForcastIndexDate = create<IForcastDayDate>((set) => ({
  forcastIndexDate: new Date().getDate().toString(),
  setForcastIndexDate: (date: string) => set({ forcastIndexDate: date }),
}));