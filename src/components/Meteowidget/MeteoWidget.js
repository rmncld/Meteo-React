import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

function MeteoWidget({ city, code }) {

useEffect(() => {
    const API_KEY = '46cb5e69bc5cca4f3b28d6148e09e26f';
    axios.get( `https://api.openweathermap.org/data/2.5/weather?zip=${code},fr&appid=${API_KEY}&units=metric`)
    .then((response) => {
        console.log(response.data.main.temp);
    })
}, []);



  return (
    <div className='meteo'>
      <div className='meteo-city'>{city}</div>
      <div className='meteo-code'>{code}</div>
      <div className='meteo-temperature'>15 °</div>
    </div>
  )
};

MeteoWidget.propTypes = {
  city: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
}

export default MeteoWidget;