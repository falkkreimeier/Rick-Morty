import "./Footer.css";
import styled, { css } from "styled-components";
import Portal from "../image/Portal.gif";

function Footer({ activeButton, handleButtonClick }) {
  return (
    <FooterContainer>
      <FooterButton
        isActive={activeButton === "Human"}
        onClick={() => handleButtonClick("Human")}
      >
        <p className="footer__text">Humans</p>
      </FooterButton>
      <FooterButton
        isActive={activeButton === "Alien"}
        onClick={() => handleButtonClick("Alien")}
      >
        <p className="footer__text">Aliens</p>
      </FooterButton>
      <FooterButton></FooterButton>
      <FooterButton></FooterButton>
    </FooterContainer>
  );
}

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
