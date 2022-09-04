import Navigation from "../components/Navigation";
import ProductCard from "../components/ProductCard";
import ThemaButton from "../components/ThemaButton";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MockDataContext } from "../App";

const Home = () => {
  const { mockData } = useContext(MockDataContext);

  const navigate = useNavigate();

  const [isThemaType, setIsThemaType] = useState("cup");

  const sortThema = (item) => {
    if (isThemaType === "cup") {
      return item.filter((it) => it.themaType === "cup");
    } else {
      return item.filter((it) => it.themaType === "winter");
    }
  };

  return (
    <div>
      <Navigation
        text={"코멘토 쇼핑"}
        onClick={() => {
          navigate("/");
        }}
      />
      <ThemaSection>
        <ThemaButton
          themaName={"#겨울 방한템"}
          onClick={() => {
            setIsThemaType("winter");
          }}
        />
        <ThemaButton
          themaName={"#따순 머그컵"}
          onClick={() => {
            setIsThemaType("cup");
          }}
        />
      </ThemaSection>
      <GrayLine />
      <ProductSection>
        {sortThema(mockData).map((it) => (
          <ProductCard
            key={it.id}
            id={it.id}
            name={it.name}
            description={it.description}
            thumbnail={it.thumbnail}
          />
        ))}
      </ProductSection>
    </div>
  );
};

const ThemaSection = styled.div`
  display: flex;
  gap: 20px;
  padding: 40px 12px;
  justify-content: center;
  align-items: center;
`;

const GrayLine = styled.div`
  height: 8px;
  width: 100%;
  background: #eeeeee;
`;

const ProductSection = styled.div`
  padding: 20px;
`;

export default Home;
