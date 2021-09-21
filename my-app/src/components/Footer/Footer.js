import "./Footer.css";
import portal from "../image/Portal.gif";

function Footer({ activeButton, handleButtonClick }) {
  return (
    <div className="footer__container">
      <button
        className={`footer__button ${
          activeButton === "Human" ? "footer__button--active" : ""
        }`}
        onClick={() => handleButtonClick("Human")}
      >
        <p className="footer__text">Humans</p>
      </button>
      <button
        className={`footer__button ${
          activeButton === "Alien" ? "footer__button--active" : ""
        }`}
        onClick={() => handleButtonClick("Alien")}
      >
        <p className="footer__text">Aliens</p>
      </button>
      <button className="footer__button"></button>
      <button className="footer__button"></button>
    </div>
  );
}

export default Footer;
