import "../Emojibar/Emojibar.css";

function emojiBar({ emojiState, handleEmojiButtonClick, characterName }) {
  const emojis = ["🧑‍🔬", "💥", "🥒", "👽"];
  return (
    <div className="emoji__container">
      {emojis.map((currentEmoji) => (
        <button
          key={currentEmoji}
          onClick={() => handleEmojiButtonClick(currentEmoji, characterName)}
          className={
            "emojibar__button " +
            (emojiState === currentEmoji ? "emojiBar__button--active" : "")
          }
        >
          {currentEmoji}
        </button>
      ))}
    </div>
  );
}

export default emojiBar;
