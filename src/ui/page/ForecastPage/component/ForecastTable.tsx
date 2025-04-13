import {Table} from "react-bootstrap";
import ForecastTableHeader from "./ForecastTableHeader.tsx";
import ForecastTableRow from "./ForecastTableRow.tsx";
import {ForecastDto} from "../../../../data/openWeatherForecastData.ts";
import ForecastTableRowLoading from "./ForecastTableRowLoading.tsx";
import ForecastTableRowGeoError from "./ForecastTableRowGeoError.tsx";

type Props ={
  forecastDto: ForecastDto | undefined;
  isLoading: boolean;
  isGeoError: boolean;
}

export default function ForecastTable({forecastDto,isLoading,isGeoError}:Props){
  const renderTableRow =()=>{
    if(isLoading && !forecastDto){
      return Array.from({length:10}).map(()=><ForecastTableRowLoading/>)
    }else if(isGeoError && !forecastDto){
      return <ForecastTableRowGeoError/>
    }else{
      return (
        forecastDto.list.map((listItem)=>(
            <ForecastTableRow key={listItem.dt} list={listItem}/>
          ))
      );
    }
  }

  return(
    <>
      <Table striped bordered hover variant="dark" className="align-middle">
      <ForecastTableHeader/>
      <tbody>
        {
          renderTableRow()
        }
      </tbody>
    </Table>
    </>
  );
}