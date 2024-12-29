import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

interface SavedLocationsProps {
  location: {
    latitude: number;
    longitude: number;
  };
  weatherCode: number;
  temperature: number;
  isDay: number;
  placeName: string;
}

export const StoreLocations = async (props: {
  location: {
    latitude: number;
    longitude: number;
  };
  placeName: string;
}) => {
  const response = await axios.get<any>(
    `https://api.open-meteo.com/v1/forecast?latitude=${props.location.latitude}&longitude=${props.location.longitude}&current=temperature_2m,is_day,weather_code&timezone=Asia%2FKolkata`
  );

  const weatherCode = response.data.current.weather_code;
  const temperature = response.data.current.temperature_2m;
  const isDay = response.data.current.is_day;
  const placeName = props.placeName;
  await getSavedLocations().then((locations) => {
    locations.push({
      location: {
        latitude: props.location.latitude,
        longitude: props.location.longitude,
      },
      weatherCode,
      temperature,
      placeName,
      isDay,
    });
    AsyncStorage.setItem("SavedLocations", JSON.stringify(locations));
  });
};

export const getSavedLocations = async (): Promise<SavedLocationsProps[]> => {
  try {
    const value = await AsyncStorage.getItem("SavedLocations");
    if (value !== null) {
      return JSON.parse(value) as SavedLocationsProps[];
    }
  } catch (error) {
    console.error("Error fetching saved locations:", error);
  }
  return [];
};
