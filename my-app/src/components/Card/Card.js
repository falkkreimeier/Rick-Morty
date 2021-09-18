import "./Card.css";

function Card(props) {
  return (
    <section className="card__container">
      <h1>{props.characterName}</h1>
      <img className="card__image" src={props.image} alt={props.image}></img>
      <p>{props.status}</p>
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
