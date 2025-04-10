import {Table} from "react-bootstrap";
import ForecastTableHeader from "./ForecastTableHeader.tsx";
import ForecastTableRow from "./ForecastTableRow.tsx";
import {ForecastDto} from "../../../../data/openWeatherForecastData.ts";

type Props ={
  forecastDto: ForecastDto
}

export default function ForecastTable({forecastDto}:Props){
  return(
    <>
      <Table striped bordered hover variant="dark" className="align-middle">
      <ForecastTableHeader/>
      <tbody>
        {
          forecastDto.list.map((listItem)=>(
            <ForecastTableRow key={listItem.dt} list={listItem}/>
          ))
        }
      </tbody>
    </Table>
    </>
  );
}