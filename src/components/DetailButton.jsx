import styled from "styled-components";

const DetailButton = () => {
  return (
    <div>
      <Button>상품 설명</Button>
      <Button>상품 후기</Button>
    </div>
  );
};

const ButtonBlock = styled.div`
  width: 390px;
`;

const Button = styled.button`
  margin-top: 24px;
  width: 195px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  padding: 14px 20px;
  cursor: pointer;
`;

export default DetailButton;
