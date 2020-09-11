import React from "react";
import styled from "styled-components";

const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Input = styled.input`
  background: #ebebeb;
  border: 1px solid #000000;
  height: 30px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 3px;
  width: 100%;
`;

const Button = styled.button`
  text-transform: uppercase;
  background: #00005c;
  border: 1px solid #000000;
  border-radius: 5px;
  color: #ffdcb4;
  padding: 7px 0;
  width: 75px;

  &:hover {
    background: #00007c;
    color: white;
  }
`;

const ErrorMsg = styled.p`
  font-size: 12px;
  margin: 0;
  text-align: center;
  color: #ffdcb4;
`;

const Search = ({ handleChange, handleSearch, input, error, errorMsg }) => {
  return (
    <>
      <Container onSubmit={handleSearch}>
        <div style={{ width: "60%", marginRight: "5px" }}>
          <Input
            type="search"
            value={input}
            onChange={handleChange}
            placeholder="Enter a location here"
          />
        </div>
        <Button type="submit">search</Button> <br /> <br />
      </Container>
      {error ? <ErrorMsg>{errorMsg}</ErrorMsg> : null}
    </>
  );
};

export default Search;
