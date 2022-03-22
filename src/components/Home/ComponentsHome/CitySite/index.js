import React from "react";
import { connect } from "react-redux";

import "./citySite.scss";
import clearSky from "../../../../images/clearSky.png";
import drizzle from "../../../../images/drizzle.png";
import fewClouds from "../../../../images/fewClouds.png";
import mist from "../../../../images/mist.png";
import overcastClouds from "../../../../images/overcastClouds.png";
import rain from "../../../../images/rain.png";
import showerRain from "../../../../images/showerRain.png";
import snow from "../../../../images/snow.png";
import thunderstorm from "../../../../images/thunderstorm.png";

const CitySite = ({ data }) => {
  console.log("data", data);
  const accessWeatherDescription =
    data.weather[data.weather.length - 1].description;

  /*  console.log("data", data);
  console.log(accessWeatherDescription); */
  const temp = data.main.temp;
  const tempMax = data.main.temp_max;
  const tempMin = data.main.temp_min;
  const tempC = Math.trunc(temp - 273.15) + "°C";
  const tempF = Math.trunc(((temp - 273.15) * 9) / 5 + 32) + "°F";
  const tempMaxC = Math.trunc(tempMax - 273.15) + "°C";
  const tempMaxF = Math.trunc(((tempMax - 273.15) * 9) / 5 + 32) + "°F";
  const tempMinC = Math.trunc(tempMin - 273.15) + "°C";
  const tempMinF = Math.trunc(((tempMin - 273.15) * 9) / 5 + 32) + "°F";

  let date = new Date().toDateString();
  let currentTime = new Date();
  let hour = currentTime.getHours() + ":" + currentTime.getMinutes();
  let iconImg;
  let descriptiveMessage;

  if (accessWeatherDescription === "few clouds") {
    iconImg = fewClouds;
    descriptiveMessage = `Se siente como ${
      tempC + " | " + tempF
    }. Pocas nubes. Brisa fuerte`;
    /* Feels like 34°C. Few clouds. Strong breeze */
  } else if (accessWeatherDescription === "clear sky") {
    iconImg = clearSky;
    descriptiveMessage = `Se siente como ${
      tempC + " | " + tempF
    }. Cielo despejado. Brisa ligera`;
    /* "Feels like 12°C. Clear sky. Light breeze" */
  } else if (accessWeatherDescription === "overcast clouds") {
    iconImg = overcastClouds;
    descriptiveMessage = `Se siente como ${
      tempC + " | " + tempF
    }. Nubes cubiertas. Brisa ligera`;
    /* "Feels like 12°C. Overcast clouds. Light breeze. */
  } else if (accessWeatherDescription === "rain") {
    iconImg = rain;
    descriptiveMessage = `Se siente como ${
      tempC + " | " + tempF
    }. Lluvia ligera. Calma`;
    /* "Feels like 12°C. Light rain. Calm*/
  } else if (accessWeatherDescription === "mist") {
    iconImg = mist;
    descriptiveMessage = `Se siente como ${
      tempC + " | " + tempF
    }. Neblina. Brisa ligera`;
    /* "Feels like 12°C. Mist. Light breeze*/
  } else if (accessWeatherDescription === "drizzle") {
    iconImg = drizzle;
    descriptiveMessage = `Se siente como ${
      tempC + " | " + tempF
    }. Lluvia ligera. Brisa moderada`;
    /* "Feels like 12°C. Light rain. Moderate breeze.*/
  } else if (accessWeatherDescription === "shower rain") {
    iconImg = showerRain;
    descriptiveMessage = `Se siente como ${
      tempC + " | " + tempF
    }. Lluvia de fuerte intensidad. Brisa moderada`;
    /* "Feels like 12°C. Heavy intensity rain. Moderate breeze.*/
  } else if (accessWeatherDescription === "snow") {
    iconImg = snow;
    descriptiveMessage = `Se siente como ${
      tempC + " | " + tempF
    }. Nieve ligera. Brisa ligera`;
    /* "Feels like 12°C. Light snow. Light breeze*/
  } else if (accessWeatherDescription === "thunderstorm") {
    iconImg = thunderstorm;
    descriptiveMessage = `Se siente como ${
      tempC + " | " + tempF
    }. Tormenta. Fuertes lluvias `;
    /* "Feels like 12°C. Thunderstorm. heavy rain */
  } else {
    iconImg = overcastClouds;
    descriptiveMessage = `Se siente como ${
      tempC + " | " + tempF
    }. Nubes cubiertas. Brisa ligera`;
  }

  return (
    <div className="city-container">
      <div className="date-hour-city">
        <div className="date">{date}</div>
        <div className="hour">{hour < 12 ? hour + "am" : hour + "pm"}</div>

        <h2 className="h2">
          {data.name}, {data.sys.country}
        </h2>
      </div>
      <div className="icon-temp">
        <div className="icon-div">
          <img src={iconImg} className="icon-weather" alt=""></img>
        </div>
        <div className="temp">{tempC}</div>
        <div className="_">|</div>
        <div className="temp">{tempF}</div>
      </div>
      <div className="description">{descriptiveMessage}</div>
      <div className="properties">
        <div className="lat-lon">
          <div> lat: {data.coord.lat} </div>
          <div> lon: {data.coord.lon} </div>
        </div>
        <div className="hum-pre">
          <div>Humedad: {data.main.humidity}%</div>
          <div>Presión: {data.main.pressure}hPa</div>
        </div>
        <div className="tmin-tmax">
          <div>
            Temp. máx {tempMaxC} | {tempMaxF}
          </div>
          <div>
            Temp. mín {tempMinC} | {tempMinF}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.appReducer.data,
  };
};

export default connect(mapStateToProps, null)(CitySite);
