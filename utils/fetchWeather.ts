import axios from "axios";
import { type HourlyWeather } from "@/store/useHourlyWeather";
import { type DailyWeather } from "@/store/useDailyWeather";
import { type WeatherData } from "@/store/useCurrentWeather";
import { setCache, getCache } from "./Cache";

type propstype = {
  latitude: number;
  longitude: number;
  getWeatherTitle: (code: number) => string;
  updateCurrentWeather: (data: WeatherData) => void;
  updateHourlyWeather: (data: HourlyWeather[]) => void;
  updateDailyWeather: (data: DailyWeather[]) => void;
  updateLoadingState: (isLoading: boolean) => void;
  updatedailyHourlyForecast: (data: HourlyWeather[]) => void;
};

export const fetchWeather = async ({
  latitude,
  longitude,
  getWeatherTitle,
  updateCurrentWeather,
  updateHourlyWeather,
  updateDailyWeather,
  updateLoadingState,
  updatedailyHourlyForecast,
}: propstype) => {
  const URI = `https://api.open-meteo.com/v1/forecast?current=temperature_2m,is_day,weather_code,apparent_temperature,relative_humidity_2m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,wind_speed_10m_max,wind_direction_10m_dominant&timezone=Asia%2FKolkata`;

  try {
    updateLoadingState(true);
    let data = await getCache();

    if (data) {
      console.log("Data fetched from cache");
    } else {
      const response = await axios.get<any>(URI, {
        params: {
          latitude: latitude,
          longitude: longitude,
          forecast_days: 14,
        },
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "0Kelvin/1.0",
        },
      });
      data = response.data;
    }

    const AQI_response = await axios.get<any>(
      "https://air-quality-api.open-meteo.com/v1/air-quality?hourly=us_aqi_pm10&timezone=Asia/Kolkata&forecast_days=7",
      {
        params: {
          latitude: latitude,
          longitude: longitude,
        },
      }
    );

    const AQI_data = AQI_response.data;

    updateCurrentWeather({
      temperature: data.current.temperature_2m,
      longitude: data.longitude,
      latitude: data.latitude,
      weatherCode: data.current.weather_code,
      feelsLike: data.current.apparent_temperature,
      weather: getWeatherTitle(data.current.weather_code),
      high: data.daily.temperature_2m_max[0],
      low: data.daily.temperature_2m_min[0],
      isDay: data.current.is_day,
      relative_humidity_2m: data.current.relative_humidity_2m,
    });

    //arranging the response data
    let temp_hourlyweather = new Array<HourlyWeather>(); // for hourly forecast i.e 24 hours from this.time to next 24 hours
    let temp_dailyhourlyforecast = new Array<HourlyWeather>(); //for daily hourly forecast i.e all the hourly of 14 days
    data.hourly.time.forEach((time: string, index: number) => {
      //checking the current time
      const CurrentTime = new Date().getTime();
      const ServerTime = new Date(time).getTime();

      //only pushing the data for the current hour and the future hours
      if (CurrentTime <= ServerTime && temp_hourlyweather.length < 25) {
        temp_hourlyweather.push({
          time: time,
          temperature: data.hourly.temperature_2m[index],
          weatherCode: data.hourly.weather_code[index],
        });
      }

      //pushing all the hourly data for the coming 14 days
      temp_dailyhourlyforecast.push({
        time: time,
        temperature: data.hourly.temperature_2m[index],
        weatherCode: data.hourly.weather_code[index],
      });
    });

    updateHourlyWeather(temp_hourlyweather); //updating the hourly weather data
    updatedailyHourlyForecast(temp_dailyhourlyforecast); //updating the daily hourly forecast data


    //arranging the response data
    let temp_dailyweather = new Array<DailyWeather>();
    data.daily.time.forEach((time: string, index: number) => {
      temp_dailyweather.push({
        time: time,
        maxTemperature: data.daily.temperature_2m_max[index],
        minTemperature: data.daily.temperature_2m_min[index],
        weatherCode: data.daily.weather_code[index],
        sunrise: data.daily.sunrise[index],
        sunset: data.daily.sunset[index],
        uvIndex: data.daily.uv_index_max[index],
        precipitation: data.daily.precipitation_sum[index],
        windSpeed: data.daily.wind_speed_10m_max[index],
        windDirection: data.daily.wind_direction_10m_dominant[index],
        aqi: AQI_data.hourly.us_aqi_pm10[index],
      });
    });

    updateDailyWeather(temp_dailyweather); //updating the daily weather data

    // Cache the weather data
    setCache(data);

    //loading false
    updateLoadingState(false);
  } catch (error: any) {
    updateLoadingState(false);
    console.error(
      "Error fetching weather data:",
      error.message,
      error.response?.data || error
    );
  }
};
