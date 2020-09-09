import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00005c;
  height: 50px;
  color: #ffdcb4;

  a {
    text-decoration: underline;
    color: inherit;
  }
`;

const Footer = (props) => {
  return (
    <Container>
      <p>
        Made with ❤ by{" "}
        <a
          href="https://github.com/dhatguy"
          target="_blank"
          rel="noopener noreferrer"
          alt="dhatGuy"
        >
          dhatGuy
        </a>
      </p>
    </Container>
  );
};

export default Footer;
