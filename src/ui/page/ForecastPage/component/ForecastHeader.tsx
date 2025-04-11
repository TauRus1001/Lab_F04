import {ForecastDto} from "../../../../data/openWeatherForecastData.ts";
import {format} from "date-fns";
import {Spinner} from "react-bootstrap";

type Props ={
  forecastDto: ForecastDto | undefined,
  isLoading: boolean,
  updateTime: Date | undefined,
  handleRefresh:()=>void
}

export default function ForecastHeader({forecastDto,isLoading,updateTime,handleRefresh}:Props){
  const renderUpdateTime = ()=>{
    if(isLoading || !updateTime) {
      return "幫緊你幫緊你"
    }else{
        return format(updateTime, "yyyy/MM/dd HH:mm:ss")
      }
    }

  const renderCityName = ()=>{
  if(isLoading || !updateTime || !forecastDto) {
    return <Spinner animation="grow" variant="light"/>
  }else{
      return forecastDto.city.name
    }
  }

  return(
    <>
      <div className="mt-3">
        <div className="d-flex justify-content-between">
              <h1 className="text-white">5 Day / 3 Hour Forecast</h1>
            <div className="d-flex">
              <div className="text-white text-end me-2">
                Last Update Time:<br/>
                {renderUpdateTime()}
              </div>
              <div id="refresh-btn-div" onClick={handleRefresh}>
                <div id="refresh-btn"></div>
              </div>
            </div>
        </div>
        <h2
          className="fst-italic fw-light"
          style={{color:"#B6C5C8"}}>
          {renderCityName()}
        </h2>
      </div>
    </>
  );
}