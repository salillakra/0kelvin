import { create } from "zustand";


interface IForcastDayDate {
  forcastIndexDate: string;
  index: number;
  setForcastIndexDate: (date: string) => void;
  setIndex: (index: number) => void;
}
export const useForcastIndexDate = create<IForcastDayDate>((set) => ({
  forcastIndexDate: new Date().getDate().toString(),
  index: 0,
  setForcastIndexDate: (date: string) => set({ forcastIndexDate: date }),
  setIndex: (index: number) => set({ index: index }),
}));