import "./Footer.css";

function Footer({ activeButton, handleButtonClick }) {
  return (
    <div className="footer__container">
      <button
        className={`footer__button ${
          activeButton === "Human" ? "footer__button--active" : ""
        }`}
        onClick={() => handleButtonClick("Human")}
      >
        Humans
      </button>
      <button
        className={`footer__button ${
          activeButton === "Alien" ? "footer__button--active" : ""
        }`}
        onClick={() => handleButtonClick("Alien")}
      >
        Aliens
      </button>
      <button className="footer__button"></button>
      <button className="footer__button"></button>
    </div>
  );
}

export default Footer;
