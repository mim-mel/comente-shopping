import styled from "styled-components";

const CartButton = () => {
  return <ButtonBlock>장바구니 담기</ButtonBlock>;
};

const ButtonBlock = styled.button`
  width: 390px;
  background: #24dbaf;
  border: none;
  padding: 25px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

export default CartButton;
