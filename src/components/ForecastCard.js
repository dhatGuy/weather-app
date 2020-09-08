import React from "react";
import styled from "styled-components";
import { WiDayLightWind } from "react-icons/wi";
import dayjs from "dayjs";

const Card = styled.div`
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25));
`;

const ForecastCard = ({ forecast }) => {
  console.log(forecast);
  if (!forecast) return null;
  else
    return forecast.map((data, i) => (
      <Card key={i}>
        <p>{dayjs.unix(data.dt).format("ddd")}</p>
        <WiDayLightWind size="2em" />
        <p>{data.main.temp}C</p>
      </Card>
    ));
};

export default ForecastCard;
