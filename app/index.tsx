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
import SunriseSunset from "@/components/SunriseSunset";

const App = () => {
  const dailyWeather = useDailyWeatherStore((state) => state.data);
  const isLoading = useLoadingStatus((state) => state.isLoading);
  const currentWeather = useCurrentWeatherStore(
    (state) => state.CurrentWeather
  );

  const data = {
    dailyWeather: dailyWeather,
    currentWeather: currentWeather,
  };

  return (
    <SafeAreaProvider>
      {isLoading && <LoadingScreen />}
      <SafeAreaView className="flex-1 relative bg-slate-100 ">
        {/* <ImageBackground blurRadius={5} source={require("@/assets/wallpaper.jpg")} style={StyleSheet.absoluteFill} /> */}
        <ScrollView>
          <Header />
          <Hero />
          <Hourly />
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
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
