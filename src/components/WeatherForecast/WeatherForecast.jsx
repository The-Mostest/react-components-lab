import './WeatherForecast.css'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import WeatherData from '../WeatherData/WeatherData'

const WeatherForecast = (props) => {

  console.log(props)

  return (


    <>

      <div className="weather">





        <WeatherIcon
          src={props.img}
          alt={props.alt}
        />
        <WeatherData
          conditions={props.conditions}
          time={props.time}
          day={props.day}
        />



      </div>


    </>












  )
}



export default WeatherForecast