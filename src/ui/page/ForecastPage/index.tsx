import "./style.css"
import { Container } from "react-bootstrap";
import ForecastHeader from "./component/ForecastHeader.tsx";
import ForecastTable from "./component/ForecastTable.tsx";
import { ForecastDto } from "../../../data/openWeatherForecastData.ts";
import * as OpenWeatherApi from "../../../assets/api/OpenWeatherApi.ts";
import { useEffect, useState } from "react";
import ForecastChart from "./component/ForecastChart.tsx";
import mockdata from "./response.json"

export default function ForecastPage() {
  const [forecastDto, setForecastDto] = useState<ForecastDto | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isGeoError, setIsGeoErrr] = useState<boolean>(false);
  const [updateTime, setUpdateTime] = useState<Date | undefined>(undefined);

  const getForecastData = async () => {
    setIsLoading(true);
    try {
      const responseData = await OpenWeatherApi.getForecastData();
      setForecastDto(responseData);
    } catch (e) {
      setForecastDto(undefined);
      setIsGeoErrr(true);
      console.log(e);
    } finally {
      setIsLoading(false);
      setUpdateTime(new Date());
    }
  }

  const handleRefresh = async () => {
    setForecastDto(undefined);
    setIsLoading(true);
    setUpdateTime(undefined);
    await getForecastData();
  }

  useEffect(() => {
    getForecastData();
  }, []);
  return (
    <Container>
      <ForecastHeader
        forecastDto={forecastDto}
        isLoading={isLoading}
        updateTime={updateTime}
        handleRefresh={handleRefresh}
      />
      <ForecastChart
        forecastDto={forecastDto}
        // forecastDto={mockdata}
        isLoading={isLoading}
        isGeoError={isGeoError}
      />
      <ForecastTable
        forecastDto={forecastDto}
        isLoading={isLoading}
        isGeoError={isGeoError}
      />
    </Container>
  );
}