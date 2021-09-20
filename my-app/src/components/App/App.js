import Header from "../Header/Header";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import "./App.css";
import { useState } from "react";
import { getEmoji } from "../helper";
import Create from "../Create/Create";

function App({ data }) {
  const [emojiData, setEmojiData] = useState(() => {
    if (localStorage.getItem("emojiDataLocalStorage")) {
      return JSON.parse(localStorage.getItem("emojiDataLocalStorage"));
    } else {
      return [];
    }
  });

  function handleEmojiButtonClick(newEmoji, characterName) {
    const oldEmoji = getEmoji(characterName, emojiData);
    const filteredEmojiData = emojiData.filter((item) => {
      if (item.name === characterName) {
        return false;
      } else {
        return true;
      }
    });

    const newEmojiData =
      oldEmoji === newEmoji
        ? filteredEmojiData
        : [...filteredEmojiData, { name: characterName, emoji: newEmoji }];
    setEmojiData(newEmojiData);
    localStorage.setItem("emojiDataLocalStorage", JSON.stringify(newEmojiData));
  }

  const [activeButton, setspecies] = useState("All");
  function handleSpeciesButtonClick(species) {
    setspecies(species);
  }

  const filteredData = data.filter((character) => {
    return character.species === activeButton;
  });
  const shownData = activeButton === "All" ? data : filteredData;

  const INITIAL_DATA = [
    {
      name: "Rick Sanches",
      Spezies: "Human;",
    },
  ];

  const [newCharacterData, setNewCharacter] = useState(INITIAL_DATA);

  return (
    <div>
      <Header />
      {shownData.map((character) => (
        <Card
          characterName={character.name}
          status={character.status}
          episode={character.episode}
          image={character.image}
          key={character.name}
          handleEmojiButtonClick={handleEmojiButtonClick}
          emoji={getEmoji(character.name, emojiData)}
        />
      ))}
      <Create newCharacterButton={handleNewCharacterButton} />

      <Footer
        activeButton={activeButton}
        handleButtonClick={handleSpeciesButtonClick}
      />
    </div>
  );
  function handleNewCharacterButton(name, species) {
    const newData = [...newCharacterData, { name: name, house: species }];
    setNewCharacter(newData);
  }
}

export default App;
