import React from "react";
import styled from "styled-components";
import ReactAnimatedWeather from "react-animated-weather";
import {
  WiNightClear,
  WiDaySunny,
  WiNightCloudy,
  WiDayCloudy,
  WiCloud,
  WiDayShowers,
  WiNightShowers,
  WiNightRain,
  WiDayRain,
  WiDayThunderstorm,
  WiNightThunderstorm,
  WiDaySnow,
  WiNightSnow,
  WiNightAltCloudy,
  WiDayCloudyHigh,
  WiNightAltCloudyHigh,
  WiDayFog,
  WiNightFog,
  WiNa,
} from "react-icons/wi";

const WeatherIcon = ({ condition }) => {
  let icon = "";
  switch (condition) {
    case "01d":
      icon = <WiDaySunny size="8em" />;
      break;
    case "01n":
      icon = <WiNightClear size="8em" />;
      break;
    case "02d":
      icon = <WiDayCloudy size="8em" />;
      break;
    case "02n":
      icon = <WiNightCloudy size="8em" />;
      break;
    case "03d":
      icon = <WiCloud size="8em" />;
      break;
    case "03n":
      icon = <WiCloud size="8em" />;
      break;
    case "04d":
      icon = <WiDayCloudyHigh size="8em" />;
      break;
    case "04n":
      icon = <WiNightAltCloudyHigh size="8em" />;
      break;
    case "09d":
      icon = <WiDayShowers size="8em" />;
      break;
    case "09n":
      icon = <WiNightShowers size="8em" />;
      break;
    case "10d":
      icon = <WiDayRain size="8em" />;
      break;
    case "10n":
      icon = <WiNightRain size="8em" />;
      break;
    case "11d":
      icon = <WiDayThunderstorm size="8em" />;
      break;
    case "11n":
      icon = <WiNightThunderstorm size="8em" />;
      break;
    case "13d":
      icon = <WiDaySnow size="8em" />;
      break;
    case "13n":
      icon = <WiNightSnow size="8em" />;
      break;
    case "50d":
      icon = <WiDayFog size="8em" />;
      break;
    case "50n":
      icon = <WiNightFog size="8em" />;
      break;
    default:
      icon = <WiNa size="6em" />;
  }

  return <div style={{ alignSelf: "flex-end" }}>{icon}</div>;
};

export default WeatherIcon;
