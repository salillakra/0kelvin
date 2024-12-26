import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "weather";

export const Cache = async (value: any) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch (e) {
    console.log("Error storing data", e);
  }
};

// Get the weather data
export const getData = async () => {
  setInterval(clearCache, 3600000); // 3600000 milliseconds = 1 hour

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

// Clear the cache every 1 hour
export const clearCache = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.log("Error clearing cache", e);
  }
};

// Schedule cache clearing every 1 hour
