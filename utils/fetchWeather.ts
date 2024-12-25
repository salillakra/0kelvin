import axios from "axios";
import { type HourlyWeather } from "@/store/useHourlyWeather";

type propstype = {
  latitude: number;
  longitude: number;
  getWeatherTitle: (code: number) => string;
  updateWeather: (data: any) => void;
  updateHourlyWeather: (data: HourlyWeather[]) => void;
};

export const fetchWeather = async ({
  latitude,
  longitude,
  getWeatherTitle,
  updateWeather,
  updateHourlyWeather,
}: propstype) => {
  const URI = `https://api.open-meteo.com/v1/forecast?current=temperature_2m,is_day,weather_code,apparent_temperature&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,wind_speed_10m_max&timezone=Asia%2FKolkata`;

  try {
    console.log("fetching weather data");
    const response = await axios.get<any>(URI, {
      params: {
        latitude: latitude,
        longitude: longitude,
      },
    });

    const data = response.data;
    console.log("Weather data fetched:", data);

    updateWeather({
      temperature: data.current.temperature_2m,
      longitude:data.longitude,
      latitude:data.latitude,
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
      const currentHour = new Date().getHours();
      const serverHour = new Date(time).getHours();

      //only pushing the data for the current hour and the future hours
      if (currentHour <= serverHour && index < 24) {
        temp_hourlyweather.push({
          time: time,
          temperature: data.hourly.temperature_2m[index],
          weatherCode: data.hourly.weather_code[index],
        });
      }
    });
 
    updateHourlyWeather(temp_hourlyweather); //updating the hourly weather data
  } catch (error: any) {
    console.error(
      "Error fetching weather data:",
      error.message,
      error.response?.data || error
    );
  }
};
