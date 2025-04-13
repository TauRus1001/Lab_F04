import axios from "axios";
import { ForecastDto } from "../../data/openWeatherForecastData.ts";

const apiKey: string = "d5fa401c3dd395797556dab315eee580";

const getCurrentLocation = (): Promise<{ latitude: number; longitude: number }> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position.coords),
      (error) => reject(error)
    );
  });
};

export async function getForecastData() {
  try {
    const coords = await getCurrentLocation();
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}&units=metric`;
    const response = await axios.get<ForecastDto>(url);
    return response.data;
  } catch (error) {
    // console.log(error);
    throw error;
  }
}