import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navigation = ({ hasButton, text, onClick }) => {
  const navigate = useNavigate();

  return (
    <NavigationSection>
      <NavBlock>
        {hasButton ? (
          <BackButton
            onClick={() => {
              navigate(-1);
            }}
          >
            {"<"}
          </BackButton>
        ) : null}
        <TextButton onClick={onClick}>{text}</TextButton>
      </NavBlock>
    </NavigationSection>
  );
};

const NavigationSection = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  letter-spacing: 3px;
  font-weight: 800;
  padding: 30px 0;
  border-bottom: 1px solid #bebebe;
`;

const NavBlock = styled.div`
  display: flex;
  position: relative;
`;

const BackButton = styled.div`
  position: absolute;
  left: -50%;
  cursor: pointer;
`;

const TextButton = styled.div`
  cursor: pointer;
`;

export default Navigation;
