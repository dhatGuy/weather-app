import React from "react";
// import styled from "styled-components";
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
  WiDayCloudyHigh,
  WiNightAltCloudyHigh,
  WiDayFog,
  WiNightFog,
  WiNa,
} from "react-icons/wi";

const WeatherIcon = ({ condition, size, position }) => {
  let icon = "";
  switch (condition) {
    case "01d":
      icon = <WiDaySunny size={size} />;
      break;
    case "01n":
      icon = <WiNightClear size={size} />;
      break;
    case "02d":
      icon = <WiDayCloudy size={size} />;
      break;
    case "02n":
      icon = <WiNightCloudy size={size} />;
      break;
    case "03d":
      icon = <WiCloud size={size} />;
      break;
    case "03n":
      icon = <WiCloud size={size} />;
      break;
    case "04d":
      icon = <WiDayCloudyHigh size={size} />;
      break;
    case "04n":
      icon = <WiNightAltCloudyHigh size={size} />;
      break;
    case "09d":
      icon = <WiDayShowers size={size} />;
      break;
    case "09n":
      icon = <WiNightShowers size={size} />;
      break;
    case "10d":
      icon = <WiDayRain size={size} />;
      break;
    case "10n":
      icon = <WiNightRain size={size} />;
      break;
    case "11d":
      icon = <WiDayThunderstorm size={size} />;
      break;
    case "11n":
      icon = <WiNightThunderstorm size={size} />;
      break;
    case "13d":
      icon = <WiDaySnow size={size} />;
      break;
    case "13n":
      icon = <WiNightSnow size={size} />;
      break;
    case "50d":
      icon = <WiDayFog size={size} />;
      break;
    case "50n":
      icon = <WiNightFog size={size} />;
      break;
    default:
      icon = <WiNa size="6em" />;
  }

  return <div style={{ alignSelf: position || "inherit" }}>{icon}</div>;
};

export default WeatherIcon;
