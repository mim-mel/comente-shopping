import styled from "styled-components";
import { NameBlock } from "./ProductCard";
import { DescriptionBlock } from "./ProductCard";

const DetailProductCard = () => {
  return (
    <>
      <ImgBlock src="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg" />
      <TextBlock>
        <NameBlock>비숑 블랙 머그잔</NameBlock>
        <DescriptionBlock>21,800원</DescriptionBlock>
      </TextBlock>
    </>
  );
};

const ImgBlock = styled.img`
  width: 390px;
`;

const TextBlock = styled.div`
  width: 390px;
  padding-left: 20px;
`;

export default DetailProductCard;
