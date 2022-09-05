import styled from "styled-components";

const BottomButton = ({ text, onClick }) => {
  return <CartButtonBlock onClick={onClick}>{text}</CartButtonBlock>;
};

const CartButtonBlock = styled.button`
  width: 390px;
  background: #24dbaf;
  border: none;
  padding: 25px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

export default BottomButton;
