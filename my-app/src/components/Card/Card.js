import Emojibar from "../Emojibar/Emojibar";
import styled, { css } from "styled-components";
import { Button } from "../Create/Create";
import { useState } from "react";

function Card(props) {
  const [showDetails, setShowDetails] = useState(false);
  function handelShowDetailsButtonClick() {
    setShowDetails((Check) => !Check);
  }

  // const [showProfile, setShowProfile] = useState(true);
  // function handleShowProfileButtonClick() {
  //   setShowProfile(false);
  // }

  return (
    <StyledFlipCard showDetails={showDetails}>
      <StyledFlipCardFront>
        <h2 className="card__headline">
          {props.emoji}
          {props.characterName}
        </h2>
        <img className="card__image" src={props.image} alt={props.image}></img>
        <p className="card__status">Status: {props.status}</p>
        <Emojibar
          emojiState={props.emojiState}
          handleEmojiButtonClick={props.handleEmojiButtonClick}
          characterName={props.characterName}
        />
        <Button primary onClick={() => handelShowDetailsButtonClick()}>
          Karte drehen
        </Button>
      </StyledFlipCardFront>

      <StyledFlipCardBack>
        <p>Das müsste ich jetzt sehen können.</p>
        <Button primary onClick={() => handelShowDetailsButtonClick()}>
          Zurück
        </Button>
      </StyledFlipCardBack>
    </StyledFlipCard>
  );
}

const StyledFlipCard = styled.section`
  width: 400px;
  height: 300px;
  perspective: 1000px;
  border-radius: 20px;
  margin: 10px auto;
  padding: 0px;
  border: 2px white solid;
  border-radius: 20px;
  transition: transform 1s;
  transform-style: preserve-3d;
  /* cursor: pointer; */
  position: relative;
  /* background-color: rgb(5, 150, 135); */

  ${({ showDetails }) =>
    showDetails &&
    css`
      transform: rotateY(180deg);
    `}
`;

const StyledFlipCardFront = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  font-size: 1rem;
  color: black;
  background-color: rgb(5, 150, 135);
  border-radius: 20px;
`;

const StyledFlipCardBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  font-size: 1rem;
  color: black;
  transform: rotateY(180deg);
  background-color: rgb(5, 150, 135);
  border-radius: 20px;
`;

export default Card;
