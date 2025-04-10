import {Component} from "react";
import "./style.css"
import {Container} from "react-bootstrap";
import ForecastHeader from "./component/ForecastHeader.tsx";
import ForecastTable from "./component/ForecastTable.tsx";
import mockData from  "./response.json"
import {ForecastDto} from "../../../data/openWeatherForecastData.ts";

type Props = {}
type State = {
  forecastDto: ForecastDto | undefined;
  isLoading: boolean;
}

export default class ForecastPage extends Component<Props,State>{
  constructor(props:Props) {
    super(props);
    this.state ={
      forecastDto:undefined,
      isLoading:true
    }
  }

  componentDidMount() {
    this.setState({
      forecastDto:mockData,
      isLoading:false
    })
  }

  render(){
    return(
      <>
        <Container>
          {
            this.state.forecastDto &&(
              <>
                <ForecastHeader forecastDto={this.state.forecastDto}/>
                <ForecastTable forecastDto={this.state.forecastDto}/>
            </>
            )
          }
        </Container>
      </>
    );
  }
}