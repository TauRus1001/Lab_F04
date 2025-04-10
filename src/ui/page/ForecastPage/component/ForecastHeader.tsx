import {ForecastDto} from "../../../../data/openWeatherForecastData.ts";

type Props ={
  forecastDto: ForecastDto
}

export default function ForecastHeader({forecastDto}:Props){
  return(
    <>
      <div className="mt-3">
        <div className="d-flex justify-content-between">
              <h1 className="text-white">5 Day / 3 Hour Forecast</h1>
            <div className="d-flex">
              <div className="text-white text-end me-2">
                Last Update Time:<br/>
                10/10/2025 10:25:00
              </div>
              <div id="refresh-btn-div">
                <div id="refresh-btn"></div>
              </div>
            </div>
        </div>
        <h2
          className="fst-italic fw-light"
          style={{color:"#B6C5C8"}}>
          {forecastDto.city.name}
        </h2>
      </div>
    </>
  );
}