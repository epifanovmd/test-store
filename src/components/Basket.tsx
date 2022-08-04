import styled from "styled-components";
import cartBasket from "../assets/cartBasket.png";
import removeBasketPNG from "../assets/removeBasket.png";
import rubleBold from "../assets/rubleBold.png";
import rubleLite from "../assets/rubleLite.png";
import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cart/actions";

export const Basket = () => {
  const [isShowCart, setIsShowCart] = useState(false);
  const cart = useTypedSelector((state) => state.cart);
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const dispatch = useDispatch();
  const removeHandler = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <Button onClick={() => setIsShowCart(!isShowCart)}>
        <ImgButtonHeader src={cartBasket} alt="" />
        {cart.length > 0 && <BasketLenght>{cart.length}</BasketLenght>}
      </Button>
      {isShowCart && cart.length > 0 && (
        <CartWrap>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <ImgWrap>
                <ImgBasket src={item.imagePath} alt={item.name} />
              </ImgWrap>
              <Info>
                <NameProduct>
                  <Text>Название товара:</Text>
                  {item.name}
                </NameProduct>
                <Sum>
                  <Text>Количество:</Text>
                  <Price>
                    {`${item.count} x ${item.price}`}
                    <RubleImg src={rubleLite} alt="" />
                  </Price>
                </Sum>
                <ButtonWrap>
                  <Button onClick={() => removeHandler(item.id)}>
                    <ImgButton src={removeBasketPNG} alt="" />
                  </Button>
                </ButtonWrap>
              </Info>
            </CartItem>
          ))}
          <FooterWrap>
            {cart.length > 0 ? "Общая сумма: " : "Корзина пуста!"}
            {cart.length > 0 && (
              <b>
                {total} <RubleImg src={rubleBold} alt="" />
              </b>
            )}
          </FooterWrap>
        </CartWrap>
      )}
    </div>
  );
};

const CartWrap = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 3px;
  position: absolute;
  width: 555px;
  right: 0;
  top: 65px;
  box-shadow: 1px 3px 30px 0px rgba(50, 50, 50, 0.75);
  background-color: white;
`;
const CartItem = styled.div`
  border-bottom: 1px solid grey;
  margin: 1px;
  display: flex;
  align-items: center;
  padding: 0px 5px 0px 5px;
  height: 150px;
`;
const Info = styled.div`
  display: flex;
  padding-left: 10px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
`;

const Text = styled.span`
  font-size: 16px;
  color: rgba(64, 64, 64, 1);
  margin-right: 5px;
`;
const Price = styled.span`
  display: flex;
`;

const NameProduct = styled.span`
  color: #63599c;
  margin-bottom: 5px;
`;
const Sum = styled.span`
  display: flex;
  align-items: flex-end;
`;
const RubleImg = styled.img`
  width: 20px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 380px;
  padding-right: 5px;
`;
const ImgButton = styled.img`
  width: 30px;
`;
const ImgButtonHeader = styled.img`
  width: 45px;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: none;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: white;
`;
const BasketLenght = styled.div`
  font-size: 20px;
  background-color: yellow;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  right: 3px;
  top: 3px;
  position: absolute;
  color: #63599c;
`;
const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  height: 130px;
`;
const ImgBasket = styled.img`
  width: 150px;
`;
const FooterWrap = styled.div`
  border-top: 1px solid grey;
  padding: 10px 5px;
`;
