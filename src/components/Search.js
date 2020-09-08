import React from "react";
import styled from "styled-components";

const Container = styled.form`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const Input = styled.input`
  background: #ebebeb;
  border: 1px solid #000000;
  height: 30px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 3px;
  width: 60%;
  margin-right: 5px;
`;

const Button = styled.button`
  text-transform: uppercase;
  background: #00005c;
  border: 1px solid #000000;
  border-radius: 5px;
  color: #fff;
  width: 75px;

  &:hover {
    color: #ffdcb4;
  }
`;

const Search = ({ handleChange, handleSearch, input }) => {
  return (
    <Container onSubmit={handleSearch}>
      <Input
        type="search"
        value={input}
        onChange={handleChange}
        placeholder="Enter a location here"
      />
      <Button type="submit">search</Button>
    </Container>
  );
};

export default Search;
