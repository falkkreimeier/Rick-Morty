import styled, { css } from "styled-components";

function emojiBar({ emojiState, handleEmojiButtonClick, characterName }) {
  const emojis = ["🧑‍🔬", "💥", "🥒", "👽"];
  return (
    <EmojiContainer>
      {emojis.map((currentEmoji) => (
        <Button
          key={currentEmoji}
          onClick={() => handleEmojiButtonClick(currentEmoji, characterName)}
          className={
            "emojibar__button " +
            (emojiState === currentEmoji ? "emijibar__button--active" : "")
          }
        >
          {currentEmoji}
        </Button>
      ))}
    </EmojiContainer>
  );
}

const EmojiContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
  margin: 5px;
  display: block;
  width: 28px;
  height: 28px;
  border: 1px solid #dddddd;
  border-radius: 50%;
  cursor: pointer;
  margin-bottom: 10px;
  padding-left: 3px;
  :hover {
    box-shadow: 0 0 5px 5px white;
  }
`;

// const EmojibarButtonActive = styled.className`
//   border: 1px solid #6ec7ff;
//   background-color: #e6f4ff;
// `;

export default emojiBar;
