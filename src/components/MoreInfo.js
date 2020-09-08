import React from "react";

const MoreInfo = ({ info }) => {
  return (
    <div style={{ alignSelf: "flex-end" }}>
      <h3>INFO</h3>
      <p>Feels like: {info.feels_like}</p>
      <p>Humidity: {info.humidity} </p>
      <p>Pressure: {info.pressure} </p>
    </div>
  );
};

export default MoreInfo;
