import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-self: flex-end;
  color: #ffdcb4;
  background-color: #00005c;
  padding: 0 40px 0 10px;
  position: relative;
  bottom: 0;

  p {
    line-height: 10px;
  }
`;

const MoreInfo = ({ info, unit }) => {
  return (
    <Container>
      <h3>MORE INFO</h3>
      <p>
        Feels like:{" "}
        {unit === "C"
          ? `${Math.round(info.feels_like)}°${unit}`
          : `${Math.round(info.feels_like * (9 / 5) + 32)}°${unit}`}
      </p>
      <p>Humidity: {Math.round(info.humidity)}% </p>
      <p>Pressure: {Math.round(info.pressure)} hPa </p>
    </Container>
  );
};

export default MoreInfo;
