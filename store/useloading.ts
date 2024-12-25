import { create } from "zustand";

export interface LoadingState {
  isLoading: boolean;
  update: (isLoading: boolean) => void;
}

export const useLoadingStatus = create<LoadingState>((set) => ({
  isLoading: true,
  update: (isLoading: boolean) => set({ isLoading }),
}));
