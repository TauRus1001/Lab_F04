import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList,} from "recharts";
import {ForecastDto} from "../../../../data/openWeatherForecastData.ts";
import {format, fromUnixTime} from "date-fns";

interface WeatherData {
  dt_text: string;
  temperature: number;
  humidity: number;
}

type Props = {
  forecastDto: ForecastDto | undefined;
  isLoading: boolean;
  isGeoError: boolean;
}

export default function ForecastChart({forecastDto, isLoading, isGeoError}: Props) {

  const renderChart = () => {
    if (isLoading && !forecastDto) {
      return <></>
    } else if (isGeoError && !forecastDto) {
      return <></>
    } else {
      const weatherData: WeatherData[] = forecastDto.list.map((item)=>({
        dt_text:format(fromUnixTime(item.dt),"yyyy/MM/dd HH:mm:ss"),
        temperature:item.main.temp,
        humidity:item.main.humidity,
      }));
      return (
        <>
          <ResponsiveContainer width={"100%"} height={400}>
            <LineChart data={weatherData} margin={{ top: 20 }} accessibilityLayer>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dt_text" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="temperature"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              ></Line>
              <Line type="monotone" dataKey="humidity" stroke="#82ca9d"></Line>
            </LineChart>
          </ResponsiveContainer>
        </>
      );
    }
  }
  return (
    <>
      {renderChart()}
    </>
  );
}