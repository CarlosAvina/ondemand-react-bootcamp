import styled from "styled-components";
import logo from "../../media/furnit_logo.png";

import SearchBar from "../SearchBar/SearchBar";
import { CartIcon } from "../../icons";

const Wrapper = styled.header`
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 190px;
  object-fit: cover;
  justify-self: start;
`;

const CartButton = styled.button`
  background-color: black;
  border-radius: 50%;
  border: none;
  height: 50px;
  width: 50px;

  svg {
    height: 20px;
    width: 20px;
    transform: translateX(-1px) translateY(3px);
  }
`;

const Header = ({ ...extraProps }) => {
  return (
    <Wrapper {...extraProps}>
      <LogoImage src={logo} alt="app-logo" />
      <SearchBar />
      <CartButton>
        <CartIcon />
      </CartButton>
    </Wrapper>
  );
};

export default Header;
