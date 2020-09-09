import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  align-self: flex-start;
  color: #ffdcb4;
  margin-left: 20px;
`;

const Info = ({ location, time, description, temp }) => {
  return (
    <InfoContainer>
      <span>{location}</span> <br />
      <span style={{ fontSize: "85px", fontWeight: "bold" }}>
        {Math.round(temp)}°C
      </span>{" "}
      <br />
      <span style={{ textTransform: "capitalize" }}>{description}</span>
    </InfoContainer>
  );
};

export default Info;
