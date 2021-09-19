import "./Card.css";
import { useState } from "react";

function Card(props) {
  const [emoji, setemoji] = useState("");

  const handleEmojiClick = (emoji) => setemoji(emoji);

  return (
    <section className="card__container">
      <h1 className="card__name">
        {emoji}
        {props.characterName}
      </h1>
      <img className="card__image" src={props.image} alt={props.image}></img>
      <p className="card__status">{props.status}</p>
      <ul>
        <button
          onClick={() => handleEmojiClick("🧑‍🔬")}
          className="card__image--button"
        >
          <li className="card__emoji">🧑‍🔬</li>
        </button>
        <button
          onClick={() => handleEmojiClick("💥")}
          className="card__image--button"
        >
          <li className="card__emoji">💥</li>
        </button>
        <button
          onClick={() => handleEmojiClick("🥒")}
          className="card__image--button"
        >
          <li className="card__emoji">🥒</li>
        </button>
        <button
          onClick={() => handleEmojiClick("👽")}
          className="card__image--button"
        >
          <li className="card__emoji">👽</li>
        </button>
      </ul>
    </section>

    // <section className="card-box">
    //   <div className="flip-card-container">
    //     <div className="flip-cart">
    //       <div className="flip-cart-front">Front</div>
    //       <div className="flip-cart-back">Back</div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default Card;
