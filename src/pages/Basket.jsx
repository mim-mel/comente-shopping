import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";

const Basket = () => {
  const navigate = useNavigate();

  return (
    <Navigation
      text={"장바구니"}
      onClick={() => {
        navigate("/basket");
      }}
    />
  );
};

export default Basket;
