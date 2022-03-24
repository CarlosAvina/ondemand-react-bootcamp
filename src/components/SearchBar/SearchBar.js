import styled from "styled-components";

import { SearchIcon } from "../../icons";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  height: 40px;
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  gap: 5px;

  svg {
    height: 20px;
    width: 20px;
    padding: 15px;
  }
`;

const Input = styled.input`
  border: none;
  height: 80%;
  width: 100%;
`;

const SearchButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  padding: 15px;
`;

const SearchBar = () => {
  return (
    <Wrapper>
      <SearchIcon />
      <Input />
      <SearchButton>Buscar</SearchButton>
    </Wrapper>
  );
};

export default SearchBar;
