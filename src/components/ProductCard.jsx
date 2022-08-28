import styled from "styled-components";

const ProductCard = ({ name, description, thumbnail }) => {
  return (
    <ProductCardBlock>
      <ImgBlock src={thumbnail} alt={name} />
      <TextBlock>
        <NameBlock>{name}</NameBlock>
        <DescriptionBlock>{description}</DescriptionBlock>
      </TextBlock>
    </ProductCardBlock>
  );
};

const ProductCardBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 40px 0 20px 0;
`;

const ImgBlock = styled.img`
  width: 341px;
  height: 204px;
  object-fit: cover;
`;

const TextBlock = styled.div`
  max-width: 341px;
`;

const NameBlock = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding: 20px 0 15px 0;
`;

const DescriptionBlock = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
`;

export default ProductCard;
