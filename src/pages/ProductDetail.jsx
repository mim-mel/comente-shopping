import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navigation from "./../components/Navigation";
import { NavigationSection } from "./Home";
import { MockDataContext } from "../App";
import { useContext, useEffect, useState } from "react";

const ProductDetail = () => {
  let { id } = useParams();
  const { mockData, mockReviews } = useContext(MockDataContext);
  const [curData, setCurData] = useState([]);
  const [buttonUi, setButtonUi] = useState("detail");
  console.log(mockReviews);

  useEffect(() => {
    const getCurData = mockData.find((it) => parseInt(it.id) === parseInt(id));
    setCurData(getCurData);
  }, []);

  return (
    <div>
      <NavigationSection>
        <Navigation hasButton={true} />
      </NavigationSection>

      <Wrap>
        {/* Product Card */}
        <ImgBlock src={curData.thumbnail} />
        <TextBlock>
          <NameBlock>{curData.name}</NameBlock>
          <DescriptionBlock>{curData.price}</DescriptionBlock>
        </TextBlock>

        {/* Detail page and Review button */}
        <div>
          <Button
            onClick={() => {
              setButtonUi("detail");
            }}
          >
            상품 설명
          </Button>

          <Button
            onClick={() => {
              setButtonUi("review");
            }}
          >
            상품 후기
          </Button>
        </div>

        {/* Detail Page */}
        {buttonUi === "detail" ? <ImgBlock src={curData.mainImage} /> : null}

        {/* Review Page */}
        {buttonUi === "review" ? (
          <div>
            {mockReviews.map((it, i) => (
              <ReviewBox key={i}>
                <ProfileBox>
                  <ReviewProfile src={it.profileImage} />
                  <ScoreBox>
                    <ReviewScore>{it.score}</ReviewScore>
                    <ReviewName>
                      {it.username} | {it.createdDate}
                    </ReviewName>
                  </ScoreBox>
                </ProfileBox>
                <ReviewText>{it.reviewText}</ReviewText>
              </ReviewBox>
            ))}
          </div>
        ) : null}

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
  margin-top: 50px;
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
  transition: 0.2s;
  :hover {
    background: #24dbaf;
  }
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

const ReviewBox = styled.div`
  background: #f6f6f6;
  max-width: 390px;
  margin: 20px;
  height: 115px;
  border-radius: 10px;
`;

const ProfileBox = styled.div`
  display: flex;
  width: 390px;
  padding: 20px 20px 10px 20px;
`;

const ReviewProfile = styled.img`
  width: 50px;
  border-radius: 10px;
`;

const ScoreBox = styled.div`
  display: block;
  margin-left: 10px;
`;

const ReviewScore = styled.div`
  margin-left: auto;
`;

const ReviewName = styled.div`
  margin-top: 5px;
`;

const ReviewText = styled.div`
  padding-left: 20px;
`;

export default ProductDetail;
