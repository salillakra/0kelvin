import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hourly from "@/components/Hourly";
import Forecast from "@/components/Forecast";
import AirQualityMeter from "@/components/AirQuality";
import { useDailyWeatherStore } from "@/store/useDailyWeather";
import { useLoadingStatus } from "@/store/useloading";
import LoadingScreen from "@/components/Loading";
import WeatherConditions from "@/components/CurrentConditions";
import { useCurrentWeatherStore } from "@/store/useCurrentWeather";
import WeatherTips from "@/components/WeatherTips";
import { useEffect, useState } from "react";
import { clearCache } from "@/utils/Cache";
import { fetchWeather } from "@/utils/fetchWeather";
import {
  useDailyHourlyForecastStore,
  useHourlyWeatherStore,
} from "@/store/useHourlyWeather";
import * as Location from "expo-location";
import { useWeatherCode } from "@/hooks/useWeatherCode";

const App = () => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  //using the CustomHook to get the Icon (in Hooks folder)
  const { getWeatherTitle } = useWeatherCode();

  const isLoading = useLoadingStatus((state) => state.isLoading);
  const dailyWeather = useDailyWeatherStore((state) => state.data);
  const hourlyWeather = useHourlyWeatherStore((state) => state.hourlyWeather);
  const currentWeather = useCurrentWeatherStore(
    (state) => state.CurrentWeather
  );

  const updateCurrentWeather = useCurrentWeatherStore((state) => state.update);
  const updateHourlyWeather = useHourlyWeatherStore((state) => state.update);
  const updateDailyWeather = useDailyWeatherStore((state) => state.update);
  const updateLoadingState = useLoadingStatus((state) => state.update);
  const updatedailyHourlyForecast = useDailyHourlyForecastStore(
    (state) => state.update
  );

  //using the useEffect hook to get the current location and fetch the weather data
  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Please enable location access to get the weather data");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      if (location) {
        setLocation(location.coords); 

        //fetching the weather data
        await fetchWeather({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          getWeatherTitle: getWeatherTitle,
          updateCurrentWeather: updateCurrentWeather,
          updateHourlyWeather: updateHourlyWeather,
          updateDailyWeather: updateDailyWeather,
          updateLoadingState: updateLoadingState,
          updatedailyHourlyForecast: updatedailyHourlyForecast,
        });
      } else {
        console.log("Location is not available");
      }
    }
    getCurrentLocation();
  }, []);

  //clearing the cache when the location changes
  useEffect(() => {
    clearCache();
  }, [location]);

  const aiModelData = JSON.stringify({
    dailyWeather: dailyWeather,
    currentWeather: currentWeather,
    hourlyWeather: hourlyWeather,
  });

  return (
    <SafeAreaProvider>
      {/* {isLoading && <LoadingScreen />} */}
      <SafeAreaView className="flex-1 relative bg-slate-100 ">
        <ScrollView>
          <Header />
          <Hero />
          <Hourly HourlyData={hourlyWeather} />
          <Forecast />
          <AirQualityMeter aqi={dailyWeather[0].aqi} />
          <WeatherConditions
            Temp={
              (dailyWeather[0].maxTemperature +
                dailyWeather[0].minTemperature) /
              2
            }
            wind_speed={dailyWeather[0].windSpeed}
            relative_humidity={currentWeather.relative_humidity_2m}
            precipitation={dailyWeather[0].precipitation.toString()}
            uvIndex={dailyWeather[0].uvIndex}
            wind_direction={dailyWeather[0].windDirection.toString()}
          />
          {/* <SunriseSunset
            sunrise={dailyWeather[0].sunrise}
            sunset={dailyWeather[0].sunset}
          /> */}
          <WeatherTips WeatherData={aiModelData} />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
