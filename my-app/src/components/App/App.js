import Header from "../Header/Header";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import "./App.css";

function App({ data }) {
  return (
    <div>
      <Header />
      {data.map((character) => (
        <Card
          characterName={character.name}
          status={character.status}
          image={character.image}
          key={character.name}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
