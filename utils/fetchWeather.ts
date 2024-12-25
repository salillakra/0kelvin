import axios from "axios";
import { type HourlyWeather } from "@/store/useHourlyWeather";
import { type DailyWeather } from "@/store/useDailyWeather";
import { type WeatherData } from "@/store/useCurrentWeather";

type propstype = {
  latitude: number;
  longitude: number;
  getWeatherTitle: (code: number) => string;
  updateCurrentWeather: (data: WeatherData) => void;
  updateHourlyWeather: (data: HourlyWeather[]) => void;
  updateDailyWeather: (data: DailyWeather[]) => void;
};

export const fetchWeather = async ({
  latitude,
  longitude,
  getWeatherTitle,
  updateCurrentWeather,
  updateHourlyWeather,
  updateDailyWeather,
}: propstype) => {
  const URI = `https://api.open-meteo.com/v1/forecast?current=temperature_2m,is_day,weather_code,apparent_temperature&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,wind_speed_10m_max&timezone=Asia%2FKolkata`;

  try {
    const response = await axios.get<any>(URI, {
      params: {
        latitude: latitude,
        longitude: longitude,
      },
    });

    const data = response.data;

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
    });

    //arranging the response data
    let temp_hourlyweather = new Array<HourlyWeather>();
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
    });
    updateHourlyWeather(temp_hourlyweather); //updating the hourly weather data

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
      });
    });

    updateDailyWeather(temp_dailyweather); //updating the daily weather data
  } catch (error: any) {
    console.error(
      "Error fetching weather data:",
      error.message,
      error.response?.data || error
    );
  }
};
