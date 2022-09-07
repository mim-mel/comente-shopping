import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import BottomButton from "../components/BottomButton";
import { getFromStorage, removeItem } from "../utils/storage";

const Basket = () => {
  const navigate = useNavigate();
  const [cartItem, setCartItems] = useState([]);
  const [basketItemLength, setBasketItemLength] = useState(0);
  const [addPrice, setAddPrice] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const items = getFromStorage();
    setCartItems(items);
    setBasketItemLength(items.length);

    //상품 총합 구하기
    const price = items.map((it) => it.price);
    const totalPrice = price.reduce((a, b) => a + b);
    setAddPrice(totalPrice);

    //배송비 변경
    let deliveryPrice;
    if (totalPrice >= 20000) {
      deliveryPrice = 0;
    } else {
      deliveryPrice = 2500;
    }
    setDelivery(deliveryPrice);

    //총합구하기
    const endPrice = totalPrice + deliveryPrice;
    setTotalPrice(endPrice);
  }, []);

  //무한루프를 방지하기 위해서 useEffect를 두번 만들어준다
  useEffect(() => {
    const items = getFromStorage();
    setCartItems(items);

    //상품 총합 구하기
    const price = items.map((it) => it.price);
    const totalPrice = price.reduce((a, b) => a + b);
    setAddPrice(totalPrice);

    //배송비 변경
    let deliveryPrice;

    if (totalPrice >= 20000) {
      deliveryPrice = 0;
    } else {
      deliveryPrice = 2500;
    }

    setDelivery(deliveryPrice);
  }, [basketItemLength]);

  const onRemove = (productId) => {
    removeItem(productId);
    setBasketItemLength(basketItemLength - 1);
  };

  return (
    <>
      <Navigation
        text={"장바구니"}
        onClick={() => {
          navigate("/basket");
        }}
      />
      <Wrap>
        {cartItem.map((it) => (
          <CartItemBox key={it.id}>
            <ImgBlock src={it.thumbnail} />
            <XButton onClick={() => onRemove(it.id)}>×</XButton>
            <TextBlock>
              <Name>{it.name}</Name>
              <Price>{it.price}</Price>
            </TextBlock>
          </CartItemBox>
        ))}
        <TextBox>
          <div>상품 ({basketItemLength})개</div>
          <div>{addPrice}원</div>
        </TextBox>
        <TextBox>
          <div>배송비 (2만원 이상 무료배송)</div>
          <div>{delivery}원</div>
        </TextBox>
        <TextBox>
          <div>총 비용</div>
          <div>{totalPrice}원</div>
        </TextBox>
        <BottomButton text={"주문하기"} />
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

const CartItemBox = styled.div`
  position: relative;
  margin-top: 30px;
  display: flex;
  width: 390px;
  height: 160px;
  border-bottom: 1px solid #d5d5d5;
  transition: 0.2s;
  :hover {
    background-color: #ebebeb;
  }
`;

const ImgBlock = styled.img`
  margin: 15px;
  width: 130px;
  height: 130px;
`;

const TextBlock = styled.div`
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px 30px 15px 0px;
  padding: 10px;
`;

const Name = styled.div`
  font-size: 19px;
  font-weight: 700;
`;

const Price = styled.div`
  font-size: 17px;
`;

const XButton = styled.div`
  position: absolute;
  transform: translate(355px, 15px);
  font-size: 25px;
  font-weight: 700;
  color: #9e9e9e;
  cursor: pointer;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 370px;
  margin: 10px 0;
`;

export default Basket;
