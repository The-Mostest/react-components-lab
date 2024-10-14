import './WeatherForecast.css'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import WeatherData from '../WeatherData/WeatherData'

const WeatherForecast = (props) => {

  console.log(props)

  return (


    <>

      <div className="weather">




        <h2>{props.day}</h2>
        <WeatherIcon
          src={props.img}
          alt={props.alt}
        />
        {/* <WeatherData
        conditions = {props.conditions}
        time = {props.time}
        /> */}



      </div>


    </>












  )
}



export default WeatherForecast