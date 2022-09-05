import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Navigation from "./../components/Navigation";
import BottomButton from "../components/BottomButton";
import { NavigationSection } from "./Home";
import { MockDataContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { saveToStorage } from "./../utils/storage";

const ProductDetail = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const { mockData, mockReviews } = useContext(MockDataContext);
  const [curData, setCurData] = useState([]);
  // const [cartItem, setCartItem] = useState([]);
  const [buttonUi, setButtonUi] = useState("detail");

  useEffect(() => {
    const getCurData = mockData.find((it) => parseInt(it.id) === parseInt(id));
    setCurData(getCurData);
  }, []);

  console.log(curData);

  const handleCartButton = () => {
    //장바구니에 아이템을 담는다
    saveToStorage(curData);
    //장바구니 페이지로 이동한다
    navigate("/basket");
  };

  return (
    <div>
      <Navigation
        hasButton={true}
        text={"코멘토 쇼핑"}
        onClick={() => {
          navigate("/");
        }}
      />

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
        <BottomButton text={"장바구니 버튼"} onClick={handleCartButton} />
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
