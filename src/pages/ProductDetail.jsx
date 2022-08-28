import styled from "styled-components";
import CartButton from "../components/CartButton";

import DetailButton from "../components/DetailButton";
import DetailPage from "../components/DetailPage";
import DetailProductCard from "../components/DetailProductCard";
import Navigation from "../components/Navigation";
import { NavigationSection } from "./Home";

const ProductDetail = () => {
  return (
    <div>
      <NavigationSection>
        <Navigation />
      </NavigationSection>
      <Wrap>
        <DetailProductCard />
        <DetailButton />
        <DetailPage />
        <CartButton />
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

export default ProductDetail;
