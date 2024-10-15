

const WeatherData = ({day, time, conditions}) => {


    return (




        <div>
            <h2>{day}</h2>
            <p><span> Conditions: </span> <br/>{conditions} </p>
            <p><span> Time: </span><br/> {time} </p>

        </div>







    )

}



export default WeatherData