import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../../services/weatherService";

function TodayForecast({weather}) {
  return (
    <div>

      <div>
        <img src={iconUrlFromCode(weather.icon)} alt=""  />
        <p>{`${weather.temp.toFixed()}°`}</p>
        <div >
          <div>
            <UilTemperature size={18}/>
            Real fell:
            <span>{`${weather.feels_like.toFixed()}°`}</span>
          </div>
          <div>
            <UilTear size={18} />
            Humidity:
            <span>{`${weather.humidity.toFixed()}%`}</span>
          </div>
          <div >
            <UilWind size={18}/>
            Wind:
            <span>{`${weather.speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div>
        <UilSun />
        <p >
          Rise:{" "}
          <span>
            {formatToLocalTime(weather.sunrise, weather.timezone, "hh:mm a")}
          </span>
        </p>
        <p >|</p>

        <UilSunset />
        <p >
          Set:{" "}
          <span>
            {formatToLocalTime(weather.sunset, weather.timezone, "hh:mm a")}
          </span>
        </p>
        <p >|</p>

        <UilSun />
        <p >
          High:{" "}
          <span>{`${weather.temp_max.toFixed()}°`}</span>
        </p>
        <p >|</p>

        <UilSun />
        <p >
          Low:{" "}
          <span>{`${weather.temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TodayForecast;
