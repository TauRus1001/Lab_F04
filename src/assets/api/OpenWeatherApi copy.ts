import axios from "axios";
import {ForecastDto} from "../../data/openWeatherForecastData.ts";
// let lat: number = 22.3529584;
// let lon: number = 113.9745899;
const apiKey: string = "d5fa401c3dd395797556dab315eee580";
// let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

const getCurrentLocation = () =>{
  return new Promise <GeolocationCoordinates> ((resolve, reject)=>{
   navigator.geolocation.getCurrentPosition(
     (position)=>resolve(position.coords),
     (error)=> reject(error)
   );
  });
}
// navigator.geolocation.getCurrentPosition((position) => {
//   lat = position.coords.latitude;
//   lon = position.coords.longitude;
//   url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
// }, () => {
//   console.log("failed");
// })
const {latitude:lat,longitude:lon} = await getCurrentLocation();
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

export async function getForecastData() {
  try {
    const response = await axios.get<ForecastDto>(url);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}