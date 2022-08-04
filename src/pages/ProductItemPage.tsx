import styled from "styled-components";
import rubleBold from "../assets/rubleBold.png";
import { useNavigate, useParams } from "react-router-dom";
import { product } from "../components/Products";

export const ProductItemPage = () => {
  const params = useParams();
  const productID = +(params.id || 0) - 1;
  const props = product[productID];

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <MainWrap>
      <ButtonWrap>
        <ButtonItemPrev onClick={goBack}>Назад</ButtonItemPrev>
      </ButtonWrap>
      <ProductPage>
        <ProductFullName>{props.fullName}</ProductFullName>
        <Form>
          <FormLeft>
            <ImageWrap>
              <ProductImage src={props.imagePath} alt={props.name} />
            </ImageWrap>
            <ProductPrice>
              <PriceWrap>
                {props.price} <PriceImg src={rubleBold} alt="" />
              </PriceWrap>
            </ProductPrice>
          </FormLeft>
          <FormRight>
            <ProductCharacteristic>
              <CharacteristicItem>
                <Title>Диагональ экрана в дюймах:</Title>
                {props.characteristics?.screenDiagonal}
              </CharacteristicItem>
              <CharacteristicItem>
                <Title>Разрешение экрана:</Title>
                {props.characteristics?.screenResolution}
              </CharacteristicItem>
              <CharacteristicItem>
                <Title>Тип матрицы:</Title>
                {props.characteristics?.matrixType}
              </CharacteristicItem>
              <CharacteristicItem>
                <Title>Процессор:</Title>
                {props.characteristics?.processor}
              </CharacteristicItem>
              <CharacteristicItem>
                <Title>Процессор, частота:</Title>
                {props.characteristics?.processorFrequency}
              </CharacteristicItem>
              <CharacteristicItem>
                <Title>Оперативная память: </Title>
                {props.characteristics?.ram}
              </CharacteristicItem>
              {props.characteristics?.gpu.length > 0 && (
                <CharacteristicItem>
                  <Title>Графический процессор: </Title>
                  {props.characteristics?.gpu}
                </CharacteristicItem>
              )}

              <CharacteristicItem>
                <Title>Объем SSD:</Title>
                {props.characteristics?.ssd}
              </CharacteristicItem>
              <CharacteristicItem>
                <Title>Операционная система:</Title>
                {props.characteristics?.operatingSystem}
              </CharacteristicItem>
            </ProductCharacteristic>
          </FormRight>
        </Form>
      </ProductPage>
    </MainWrap>
  );
};
const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
const ButtonWrap = styled.div`
  width: 80%;
`;
const ButtonItemPrev = styled.button`
  margin-top: 20px;
  height: 30px;
  width: 80px;
  background-color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #5d5d64;
  :hover {
    color: white;
    background-color: rgb(150, 150, 150);
  }
  :active {
    color: white;
    background-color: #5d5d64;
  }
`;
const ProductPage = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: 50%;
  width: 80%;
  background-color: white;
  border-radius: 10px;
`;
const ProductFullName = styled.span`
  margin: 20px;
  text-align: left;
  font-size: 26px;
  height: 10%;
`;
const Form = styled.span`
  display: flex;
  height: 100%;
`;
const FormLeft = styled.span`
  display: flex;
  flex-direction: column;
  width: 40%;
`;
const FormRight = styled.span`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
const ImageWrap = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
`;
const ProductPrice = styled.span`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 20%;
`;
const PriceImg = styled.img`
  width: 25px;
`;
const PriceWrap = styled.span`
  font-size: 34px;
`;

const ProductImage = styled.img`
  margin-top: 5px;
  max-width: 300px;
`;

const ProductCharacteristic = styled.span`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 20px;
  background-color: #f5f5f6;
`;
const CharacteristicItem = styled.span`
  margin: 5px 10px;
  font-size: 18px;
`;

const Title = styled.span`
  margin-right: 10px;
  color: #5d5d64;
`;
