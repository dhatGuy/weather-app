import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import WeatherIcon from "./WeatherIcon";

const Card = styled.div`
  background-color: #c060a1;
  flex-basis: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25));

  p {
    line-height: 5px;
  }
`;

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ForecastCard = ({ forecast }) => {
  if (!forecast) return null;
  return (
    <Container>
      {forecast.map((data, i) => (
        <Card key={i}>
          <p>{dayjs.unix(data.dt).format("ddd")}</p>
          <WeatherIcon condition={data.weather[0].icon} size={"2em"} />
          <p>{Math.round(data.main.temp)}°C</p>
        </Card>
      ))}
    </Container>
  );
};

export default ForecastCard;
