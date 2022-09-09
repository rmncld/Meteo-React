import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './MeteoWidget.scss';

function MeteoWidget({ city, code }) {

    const [temperature, setTemperature] = useState(null);
    const [icon, setIcon] = useState(null);

useEffect(() => {
    const API_KEY = '46cb5e69bc5cca4f3b28d6148e09e26f';
    axios.get( `https://api.openweathermap.org/data/2.5/weather?zip=${code},fr&appid=${API_KEY}&units=metric`)
    .then((response) => {
        setTemperature(Math.round(response.data.main.temp));
        setIcon(response.data.weather[0].icon);
    });
}, [code]);



  return (
    <div className='meteo'>
         <div>
        <div className='meteo-city'>{city}</div>
        <div className='meteo-code'>{code}</div>
        <div className='meteo-temperature'>{temperature} °</div>
      </div>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
    </div>
  )
};

MeteoWidget.propTypes = {
  city: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
}

export default MeteoWidget;