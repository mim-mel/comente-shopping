import styled from "styled-components";

const ThemaButton = ({ themaName }) => {
  return (
    <ThemaButtonStyled>
      <div>{themaName}</div>
    </ThemaButtonStyled>
  );
};

const ThemaButtonStyled = styled.div`
  color: white;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;

  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.01em;

  padding: 17px 20px;
  width: fit-content;
`;

export default ThemaButton;
