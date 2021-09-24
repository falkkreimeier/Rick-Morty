import Emojibar from "../Emojibar/Emojibar";
import styled, { css } from "styled-components";
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
        <ProfileNameFront>
          {props.emoji}
          {props.characterName}
        </ProfileNameFront>
        <ProfilImageFront
          src={props.image}
          alt={props.image}
        ></ProfilImageFront>
        <Details>Status: {props.status}</Details>
        <Emojibar
          emojiState={props.emojiState}
          handleEmojiButtonClick={props.handleEmojiButtonClick}
          characterName={props.characterName}
        />
        <CardSpinButtonFront
          primary
          onClick={() => handelShowDetailsButtonClick()}
        >
          Details
        </CardSpinButtonFront>
      </StyledFlipCardFront>

      <StyledFlipCardBack>
        <ProfileNameBack>
          {props.emoji}
          {props.characterName}
        </ProfileNameBack>
        <ProfilImageBack src={props.image} alt={props.image}></ProfilImageBack>
        <Details>
          <ul>
            <li> {props.status}</li>
            <li> {props.spezies}</li>
            <li> {props.type}</li>
            <li> {props.gender}</li>
            <li> {props.origin}</li>
          </ul>
        </Details>
        <CardSpinButtonBack
          primary
          onClick={() => handelShowDetailsButtonClick()}
        >
          Zurück
        </CardSpinButtonBack>
      </StyledFlipCardBack>
    </StyledFlipCard>
  );
}

const StyledFlipCard = styled.section`
  width: 400px;
  height: 320px;
  perspective: 1000px;
  border-radius: 20px;
  margin: 10px auto;
  padding: 0px;
  border: 2px white solid;
  border-radius: 20px;
  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;

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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.2fr 0.2fr;
  grid-template-areas:
    "profilename details"
    "profileimage button";
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

const CardSpinButtonFront = styled.button`
  grid-area: button;
  width: 60px;
  margin: 10px;
  background-color: white;
  border-radius: 20px;
  ${(props) =>
    props.primary &&
    css`
      background-color: black;
      color: white;
    `}
  &:hover {
    box-shadow: 0 0 5px 5px white;
  }
`;

const CardSpinButtonBack = styled.button`
  grid-area: button;
  width: 60px;
  margin: 10px;
  background-color: white;
  border-radius: 20px;
  ${(props) =>
    props.primary &&
    css`
      background-color: black;
      color: white;
    `}
  &:hover {
    box-shadow: 0 0 5px 5px white;
  }
`;

const ProfileNameFront = styled.h2`
  margin: 5px;
  padding: 5px;
  font-family: AMISH;
`;

const ProfileNameBack = styled.h2`
  margin: 5px;
  padding: 5px;
  grid-area: profilename;
  font-family: AMISH;
`;
const ProfilImageFront = styled.img`
  margin: 5px;

  border: 1px solid white;
  border-radius: 50%;
  height: 8rem;
  box-shadow: 0 0 5px 5px gray;
`;

const ProfilImageBack = styled.img`
  margin: 5px;
  grid-area: profileimage;
  border: 1px solid white;
  border-radius: 50%;
  height: 8rem;
  box-shadow: 0 0 5px 5px gray;
`;

const Details = styled.p`
  grid-area: details;
  font-family: AMISH;
`;

export default Card;
