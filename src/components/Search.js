import React from "react";
import styled from "styled-components";

const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
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
  color: #fff;
  padding: 5px 0;
  width: 75px;

  &:hover {
    color: #ffdcb4;
  }
`;

const ErrorMsg = styled.p`
  font-size: 12px;
  margin: 0;
  color: white;
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
          {error ? <ErrorMsg>{errorMsg}</ErrorMsg> : null}
        </div>
        <Button type="submit">search</Button>
      </Container>
    </>
  );
};

export default Search;
