import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navigation = ({ hasButton }) => {
  const navigate = useNavigate();

  return (
    <NavBlock>
      {hasButton ? (
        <BackButton
          onClick={() => {
            navigate(-1);
          }}
        >
          {"<"}
        </BackButton>
      ) : (
        <div></div>
      )}
      <div>코멘토 쇼핑</div>
    </NavBlock>
  );
};

const NavBlock = styled.div`
  display: flex;
  position: relative;
`;

const BackButton = styled.div`
  position: absolute;
  left: -50%;
  cursor: pointer;
`;

export default Navigation;
