import React from "react";
import styled from "styled-components";
import icon from "../assets/icon.svg";
const Icon = styled.img``;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00005c;
  position: relative;
  height: 50px;
  color: #ffdcb4;
`;

const H1 = styled.span`
  font-weight: bold;
  font-size: 21px;
`;

const Header = (props) => {
  return (
    <>
      <Container>
        <Icon src={icon} alt="icon" />
        <H1>WEATHER FORECAST</H1>
      </Container>
    </>
  );
};

export default Header;
