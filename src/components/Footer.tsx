import styled from "styled-components";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";

export const Footer = ({ prevPage, nextPage }: any) => {
  return (
    <Wrap>
      <Button onClick={prevPage}>
        <ImgArrow src={leftArrow} alt="" />
        Предыдущая
      </Button>
      <Button onClick={nextPage}>
        Следующая
        <ImgArrow src={rightArrow} alt="" />
      </Button>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 98vw;
  height: 5vh;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 120px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: #ffb229;
  background-color: #f5f5f6;
  margin: 0px 5px;
  :hover {
    font-weight: bold;
    border: none;
    background-color: rgb(250, 231, 221);
  }
`;
const ImgArrow = styled.img`
  width: 15px;
  padding: 6px;
`;
