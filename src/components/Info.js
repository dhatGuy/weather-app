import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  align-self: flex-start;
`;

const Info = ({ location, time, description, temp }) => {
  return (
    <InfoContainer>
      <p>{location}</p>
      <p>{temp} degrees</p>
      <p style={{ textTransform: "capitalize" }}>{description}</p>
    </InfoContainer>
  );
};

export default Info;
