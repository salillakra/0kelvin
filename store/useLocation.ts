//store to maintain  latitude and longitude globally using one setter and one getter

import { create } from "zustand";

interface Location {
  latitude: number;
  longitude: number;
  placeName: string;
}

interface LocationState {
  location: Location;
  setLocation: (location: Location) => void;
}

export const useLocation = create<LocationState>((set) => ({
  location: {
    latitude: 28.6448,
    longitude: 77.216721,
    placeName: "Delhi",
  },
  setLocation: (location: Location) => {
    set({ location });
  },
}));
