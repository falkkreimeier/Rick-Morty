import Emojibar from "../Emojibar/Emojibar";
import styled from "styled-components";
import { Button } from "../Create/Create";

function Card(props) {
  return (
    <StyledFlipCard>
      <StyledFlipCardFront>
        <StyledFlipCardBox>
          <h2 className="card__headline">
            {props.emoji}
            {props.characterName}
          </h2>
          <img
            className="card__image"
            src={props.image}
            alt={props.image}
          ></img>
          <p className="card__status">Status: {props.status}</p>
          <Emojibar
            emojiState={props.emojiState}
            handleEmojiButtonClick={props.handleEmojiButtonClick}
            characterName={props.characterName}
          />
          <Button primary onClick="">
            Karte drehen
          </Button>

          <StyledFlipCardBack>
            <p>Das müsste ich jetzt sehen können.</p>
          </StyledFlipCardBack>
        </StyledFlipCardBox>
      </StyledFlipCardFront>
    </StyledFlipCard>
  );
}

const StyledFlipCardBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledFlipCard = styled.section`
  border: 1px solid #ccc;
  position: relative;
  width: 800px;
  height: 300px;
  background-color: rgb(5, 150, 135);
  width: 400px;
  border: 2px white solid;
  border-radius: 20px;
  margin: 10px auto;
  padding: 10px;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  perspective: 1000px;
  :hover {
    transform: rotateY(180deg);
  }
`;

const StyledFlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  font-size: 1rem;
  color: black;
`;

const StyledFlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  font-size: 1rem;
  color: black;
  transform: rotateY(180deg);
`;

export default Card;
