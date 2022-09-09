import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './MeteoWidget.scss';

function MeteoWidget({ city, code }) {

  const [temperature, setTemperature] = useState(null);
  const [icon, setIcon] = useState(null);

  useEffect(() => {

    /** On place les données sensibles dans les variables d'environnement 
     * - .env : 
     * REACT_APP_API_KEY=47840f4f526d9cc69b4b575c52495860
     * 
     * - .env.development et .env.production
     * 
     * Les variables qui commencent par REACT_APP_xxx sont placées automatiquement
     * dans une variable globale process.env
     * https://create-react-app.dev/docs/adding-custom-environment-variables/
     * 
     * On pourrait faire une condition sur l'environnement (process.env.NODE_ENV)
     * pour dire si on est de dev on utilise l'API locale
     * et si on est en prod on utilise l'API openweather
    */
    const API_KEY = process.env.REACT_APP_API_KEY;
    console.log(API_KEY)
    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${code},fr&appid=${API_KEY}&units=metric`)
      .then((response) => {
        setTemperature(Math.round(response.data.main.temp));
        setIcon(response.data.weather[0].icon);
      });
  }, []);

  return (
    <div className='meteo'>
      <div>
        <div className='meteo-city'>{city}</div>
        <div className='meteo-code'>{code}</div>
        <div className='meteo-temperature'>{temperature} °</div>
      </div>
      
      {icon && <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />}
    </div>
  )
};

MeteoWidget.propTypes = {
  city: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
}

export default MeteoWidget;