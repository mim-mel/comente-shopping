import styled from "styled-components";
import Navigation from "../../components/Navigation";
import { NavigationSection } from "../Home";

const ProductDetail = () => {
  return (
    <div>
      <NavigationSection>
        <Navigation hasButton={true} />
      </NavigationSection>

      <Wrap>
        {/* Product Card */}
        <ImgBlock src="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg" />
        <TextBlock>
          <NameBlock>비숑 블랙 머그잔</NameBlock>
          <DescriptionBlock>21,800원</DescriptionBlock>
        </TextBlock>

        {/* Detail page and Review button */}
        <div>
          <Button>상품 설명</Button>
          <Button>상품 후기</Button>
        </div>

        {/* Detail Page */}
        <ImgBlock src="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1_detail.jpeg" />

        {/* Review Page */}
        <div>
          <div>배송을 해주어서 편리했음</div>
        </div>

        {/* Cart Button */}
        <CartButtonBlock>장바구니 담기</CartButtonBlock>
      </Wrap>
    </div>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgBlock = styled.img`
  width: 390px;
`;

const TextBlock = styled.div`
  width: 390px;
  padding-left: 20px;
`;

const NameBlock = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding: 20px 0 5px 0;
`;

const DescriptionBlock = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
`;

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

const CartButtonBlock = styled.button`
  width: 390px;
  background: #24dbaf;
  border: none;
  padding: 25px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

export default ProductDetail;
