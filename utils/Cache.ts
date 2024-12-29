import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "weather";

// Set the weather data
export const setCache = async (value: any) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch (e) {
    console.log("Error storing data", e);
  }
};

// Get the weather data
export const getCache = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    if (value !== null) {
      try {
        return JSON.parse(value);
      } catch (e) {
        console.error("Error parsing cached data", e);
        return false;
      }
    }
  } catch (e) {
    console.log("Error reading data", e);
    return false;
  }
  return false;
};
