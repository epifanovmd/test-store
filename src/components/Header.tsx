import styled from "styled-components";
import headerPNG from "../assets/header.svg";
import { Link } from "react-router-dom";
import { Basket } from "./Basket";

export const Header = () => {
  return (
    <HeaderWrap>
      <LinkWrap to="/">
        <Img src={headerPNG} alt="Logo" />
      </LinkWrap>
      <LinkWrap to="/contacts">Our stores</LinkWrap>
      <Basket />
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  height: 60px;
  width: 50%;
  border-radius: 0 0 20px 20px;
  background: linear-gradient(
    90deg,
    rgba(121, 116, 251, 1) 0%,
    rgba(250, 103, 0, 1) 100%
  );
  position: relative;
  font-size: 20px;
`;
const Img = styled.img`
  width: 100px;
`;

const LinkWrap = styled(Link)`
  text-decoration: none;
  color: #63599c;
`;
