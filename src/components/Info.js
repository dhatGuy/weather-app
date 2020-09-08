import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00005c;
  position: relative;
  height: 50px;
`;

const Info = ({ location, time, description, temp }) => {
  return (
    <div style={{ alignSelf: "flex-start" }}>
      <p>{location}</p>
      <p>{temp} degrees</p>
      <p>
        {dayjs.unix(time).format("HH:mm")} {description}
      </p>
    </div>
  );
};

export default Info;
