import { FC } from "react";
import styled from "styled-components";
import plusLogo from "../assets/plus.png";
import minusLogo from "../assets/minus.png";
import { TypeSetState } from "../types";

interface IQuantity {
  count: number;
  setCount: TypeSetState<number>;
}

export const Quantity: FC<IQuantity> = ({ count, setCount }) => {
  return (
    <Wrap>
      <ButtonQuantity onClick={() => count > 1 && setCount(count - 1)}>
        <ImgQuantity src={minusLogo} alt="" />
      </ButtonQuantity>
      <Input
        type="string"
        onChange={(e) => setCount(+e.target.value)}
        value={count}
      />
      <ButtonQuantity onClick={() => count < 10 && setCount(count + 1)}>
        <ImgQuantity src={plusLogo} alt="" />
      </ButtonQuantity>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 15px;
  outline: none;
  display: flex;
  text-align: center;
`;
const ButtonQuantity = styled.button`
  height: 20px;
  width: 20px;
  border-radius: 30px;
  border: none;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgQuantity = styled.img`
  width: 20px;
  border-radius: 20px;
  cursor: pointer;
  :active {
    background-color: orange;
  }
`;
