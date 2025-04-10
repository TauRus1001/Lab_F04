import { format, fromUnixTime } from "date-fns";
import {ListItem} from "../../../../data/openWeatherForecastData.ts";

type Props ={
  list:ListItem
}

export default function ForecastTableRow({list}:Props){
  return(
    <>
      <tr>
          <td>{format(fromUnixTime(list.dt),"yyyy/MM/dd")}</td>
          <td>{format(fromUnixTime(list.dt),"HH:mm")}</td>
          <td>{`${list.main.temp_min}/${list.main.temp_max}`}</td>
          <td>{list.main.humidity}%</td>
          <td>
            <img
              style={{backgroundColor: "transparent", width:"64px"}}
              alt={list.weather[0].icon}
              src={`https://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png`}
              />
          </td>
      </tr>
    </>
  );
}