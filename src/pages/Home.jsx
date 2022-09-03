import Navigation from "../components/Navigation";
import ProductCard from "../components/ProductCard";
import ThemaButton from "../components/ThemaButton";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MockDataContext } from "../App";

const Home = () => {
  const data = useContext(MockDataContext);

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
      <NavigationSection>
        <Navigation />
      </NavigationSection>
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
        {sortThema(data).map((it) => (
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

export const NavigationSection = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  letter-spacing: 3px;
  font-weight: 800;
  padding: 30px 0;
  border-bottom: 1px solid #bebebe;
`;

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
