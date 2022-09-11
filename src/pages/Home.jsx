import Navigation from "../components/Navigation";
import ProductCard from "../components/ProductCard";
import ThemeButton from "../components/ThemeButton";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MockDataContext } from "../App";

const Home = () => {
  const { mockData } = useContext(MockDataContext);

  const navigate = useNavigate();

  const [themeType, setThemeType] = useState("cup");

  const sortTheme = (item) => {
    if (themeType === "cup") {
      return item.filter((it) => it.themeType === "cup");
    } else {
      return item.filter((it) => it.themeType === "winter");
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
      <ThemeSection>
        <ThemeButton
          themeName={"#겨울 방한템"}
          onClick={() => {
            setThemeType("winter");
          }}
        />
        <ThemeButton
          themeName={"#따순 머그컵"}
          onClick={() => {
            setThemeType("cup");
          }}
        />
      </ThemeSection>
      <GrayLine />
      <ProductSection>
        {sortTheme(mockData).map((it) => (
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

const ThemeSection = styled.div`
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
