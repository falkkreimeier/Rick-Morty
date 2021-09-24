import Header from "../Header/Header";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Create from "../Create/Create";
import { useEffect, useState } from "react";
import { getEmoji } from "../helper";
import { Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((dataFromServer) => {
        console.log(dataFromServer);
        setData(dataFromServer.results);
      });
  }, []);

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
  function handleSpeciesButtonClick(spezies, status) {
    setspecies(spezies, status);
  }

  const filteredData = data.filter((character) => {
    if (activeButton === "Human") {
      return character.species === activeButton;
    } else if (activeButton === "Alien") {
      return character.species === activeButton;
    } else if (activeButton === "Alive") {
      return character.status === activeButton;
    } else if (activeButton === "Dead") {
      return character.status === activeButton;
    } else {
      return "";
    }
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
    <>
      <Header />
      <Route exact path={["/", "/character"]}>
        <StyledLink to="/create">Create</StyledLink>
        {shownData.map((character) => (
          <Card
            characterName={character.name}
            status={character.status}
            episode={character.episode}
            type={character.type}
            gender={character.gender}
            image={character.image}
            key={character.name}
            handleEmojiButtonClick={handleEmojiButtonClick}
            emoji={getEmoji(character.name, emojiData)}
          />
        ))}
        ;
      </Route>
      <Route exact path={["/", "/create"]}>
        <StyledLink to="/">characters</StyledLink>
        {newCharacterData.map((newCharacter) => (
          <Create
            newCharacterButton={handleNewCharacterButton}
            key={newCharacter.name}
          />
        ))}
      </Route>
      <Footer
        activeButton={activeButton}
        handleButtonClick={handleSpeciesButtonClick}
      />
    </>
  );
  function handleNewCharacterButton(name, species) {
    const newData = [...newCharacterData, { name: name, house: species }];
    setNewCharacter(newData);
  }
}

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  margin: 0 auto;
  background-color: rgb(5, 150, 135);
  color: black;
  height: 25px;
  width: 90px;
  border: 2px solid white;
  border-radius: 20px;
  :hover {
    color: white;
    box-shadow: 0 0 10px 10px;
  }
`;

export default App;
