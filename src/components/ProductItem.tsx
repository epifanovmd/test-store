import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { IProduct } from "../types";
import { Quantity } from "./Quantity";
import { addToCart } from "../store/cart/actions";
import addBasket from "../assets/addBasket.png";
import rubleLite from "../assets/rubleLite.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface IProductItem {
  product: IProduct;
}

export const ProductItem: FC<IProductItem> = ({ product }) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const handlerAddBasket = () => {
    dispatch(addToCart({product, count}));
  };

  return (
    <Item>
      <LinkWrap to={`/${product.id}`} key={product.id.toString()}>
        <ImgWrap>
          <ImgItem src={product.imagePath} alt={product.name} />
        </ImgWrap>
        <NameItem>{product.name}</NameItem>
      </LinkWrap>
      <FooterItem>
        <PriceItem>
          {product.price} <RubleImgMainPage src={rubleLite} alt="" />
        </PriceItem>
        <AddBasketWrap>
          <Quantity count={count} setCount={setCount} />
          <Button onClick={handlerAddBasket}>
            <ImgButton src={addBasket} alt="" />
          </Button>
        </AddBasketWrap>
      </FooterItem>
    </Item>
  );
};

const Item = styled.div`
  align-self: center;
  justify-self: center;
  height: 290px;
  width: 280px;
  background-color: white;
  border-radius: 5px;
  :hover {
    box-shadow: 0px 0px 2px 2px grey;
  }
  :active {
    box-shadow: 0px 0px 2px 2px rgba(6, 16, 208, 1);
  }
`;
const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 280px;
`;

const ImgItem = styled.img`
  width: 200px;
`;
const ImgButton = styled.img`
  width: 30px;
`;
const NameItem = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  height: 45px;
  color: #63599c;
`;
const LinkWrap = styled(Link)`
  text-decoration: none;
  color: #63599c;
`;
const PriceItem = styled.span`
  display: flex;
  font-size: 24px;
`;
const RubleImgMainPage = styled.img`
  width: 25px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: 30px;
  border: none;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: white;
`;

const FooterItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 40px;
`;

const AddBasketWrap = styled.div`
  display: flex;
  align-items: center;
`;
