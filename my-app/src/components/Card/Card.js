import "./Card.css";

function Card() {
  return (
    <div className="card-body">
      <div className="flip-card-container">
        <div className="flip-cart">
          <div className="flip-cart-front">Front</div>
          <div className="flip-cart-back">Back</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
