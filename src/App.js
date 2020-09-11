import React from "react";
import "./App.css";
import Main from "./components/Main";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

function App() {
  return (
    <Container>
      <Main />
    </Container>
  );
}

export default App;
