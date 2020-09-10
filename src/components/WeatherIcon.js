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
      icon = <WiDaySunny color="#ffdcb4" size={size} />;
      break;
    case "01n":
      icon = <WiNightClear color="#ffdcb4" size={size} />;
      break;
    case "02d":
      icon = <WiDayCloudy color="#ffdcb4" size={size} />;
      break;
    case "02n":
      icon = <WiNightCloudy color="#ffdcb4" size={size} />;
      break;
    case "03d":
      icon = <WiCloud color="#ffdcb4" size={size} />;
      break;
    case "03n":
      icon = <WiCloud color="#ffdcb4" size={size} />;
      break;
    case "04d":
      icon = <WiDayCloudyHigh color="#ffdcb4" size={size} />;
      break;
    case "04n":
      icon = <WiNightAltCloudyHigh color="#ffdcb4" size={size} />;
      break;
    case "09d":
      icon = <WiDayShowers color="#ffdcb4" size={size} />;
      break;
    case "09n":
      icon = <WiNightShowers color="#ffdcb4" size={size} />;
      break;
    case "10d":
      icon = <WiDayRain color="#ffdcb4" size={size} />;
      break;
    case "10n":
      icon = <WiNightRain color="#ffdcb4" size={size} />;
      break;
    case "11d":
      icon = <WiDayThunderstorm color="#ffdcb4" size={size} />;
      break;
    case "11n":
      icon = <WiNightThunderstorm color="#ffdcb4" size={size} />;
      break;
    case "13d":
      icon = <WiDaySnow color="#ffdcb4" size={size} />;
      break;
    case "13n":
      icon = <WiNightSnow color="#ffdcb4" size={size} />;
      break;
    case "50d":
      icon = <WiDayFog color="#ffdcb4" size={size} />;
      break;
    case "50n":
      icon = <WiNightFog color="#ffdcb4" size={size} />;
      break;
    default:
      icon = <WiNa color="#ffdcb4" size="6em" />;
  }

  return <div style={{ alignSelf: position || "inherit" }}>{icon}</div>;
};

export default WeatherIcon;
