import "./Card.css";
import Emojibar from "../Emojibar/Emojibar";

function Card(props) {
  return (
    <section className="card__container">
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
      <section className="card-box">
        <div className="flip-card-container">
          <div className="flip-cart">
            <div className="flip-cart-front">Front</div>
            <div className="flip-cart-back">Back</div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Card;
