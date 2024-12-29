import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface OSMLocationResponse {
  display_name: string;
  address?: {
    road?: string;
    suburb?: string;
    city?: string;
    state?: string;
    country?: string;
  };
}

// Format location name to be shorter
const formatLocationName = (displayName: string): string => {
  const parts = displayName.split(",");
  return [parts[0], parts[1], parts[2]]
    .filter(Boolean)
    .map((part) => part.trim())
    .join(", ");
};

// Base query function
const fetchLocation = async (
  latitude: number,
  longitude: number
): Promise<string> => {
  const URI = "https://nominatim.openstreetmap.org/reverse";

  const response = await axios.get<OSMLocationResponse>(URI, {
    params: {
      format: "json",
      lat: latitude,
      lon: longitude,
    },
    headers: {
      "User-Agent": "0Kelvin/1.0",
    },
  });

  return formatLocationName(response.data.display_name);
};

// Hook for using reverse geocoding
export const useReverseGeocoding = (latitude: number, longitude: number) => {
  return useQuery({
    queryKey: ["location", latitude, longitude],
    queryFn: () => fetchLocation(latitude, longitude),
    staleTime: 1000 * 60 * 30, // Consider data fresh for 30 minutes
    gcTime: 1000 * 60 * 60 * 24, // Keep in garbage collection for 24 hours
    retry: 2,
    enabled: Boolean(latitude && longitude),
    meta: {
      timestamp: Date.now(),
    },
  });
};

export const ReverseGeocoding = async (
  latitude: number,
  longitude: number
): Promise<string> => {
  return fetchLocation(latitude, longitude);
};
