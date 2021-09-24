// import "./Header.css";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <HeaderHeadline>Rick and Morty</HeaderHeadline>
      <HeaderText>Durchgeknallt durch die Galaxis.</HeaderText>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px white solid;
  border-radius: 20px;
  width: 400px;
  margin: 10px auto;
  background-color: rgb(5, 150, 135);
`;

const HeaderHeadline = styled.h1`
  padding: 5px;
  margin: 10px;
  font-family: Regular;
`;

const HeaderText = styled.p`
  font-family: AMISH;
  padding: 5px;
`;

export default Header;
