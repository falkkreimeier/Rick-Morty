import styled, { css } from "styled-components";
import Portal from "../image/Portal.gif";

function Footer({ activeButton, handleButtonClick }) {
  return (
    <FooterContainer>
      <FooterButton
        isActive={activeButton === "Human"}
        onClick={() => handleButtonClick("Human")}
      >
        <FooterText>Humans</FooterText>
      </FooterButton>
      <FooterButton
        isActive={activeButton === "Alien"}
        onClick={() => handleButtonClick("Alien")}
      >
        <FooterText>Aliens</FooterText>
      </FooterButton>
      <FooterButton
        isActive={activeButton === "Alive"}
        onClick={() => handleButtonClick("Alive")}
      >
        <FooterText>Alive</FooterText>
      </FooterButton>

      <FooterButton
        isActive={activeButton === "Dead"}
        onClick={() => handleButtonClick("Dead")}
      >
        <FooterText>Dead</FooterText>
      </FooterButton>
    </FooterContainer>
  );
}
const FooterText = styled.p`
  font-family: AMISH;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: azure;
  border: 2px white solid;
  border-radius: 20px;
  width: 400px;
  margin: 10px auto;
  padding: 10px;
  background-color: rgb(5, 150, 135);
`;

const FooterButton = styled.button`
  background-color: transparent;
  border: 0;
  width: 120px;
  height: 80px;
  border: 0;
  color: white;
  background-color: none;
  background-size: 94%;
  ${({ isActive }) =>
    isActive === true &&
    css`
      background-image: url(${Portal});
    `}
  &:hover {
    font-size: 25px;
  }
`;

export default Footer;
