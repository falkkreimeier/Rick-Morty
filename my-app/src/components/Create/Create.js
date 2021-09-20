import "./Create.css";

function Create(newCharacterButton) {
  return (
    <form
      className="create__container"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label>
        <p>Name of Character:</p>
        <input
          className="create__input"
          type="text"
          name="characterName"
          required
        ></input>
      </label>
      <label>
        <p>Spezies:</p>
        <input className="create__input" type="text" name="spezies"></input>
      </label>
      <button className="create__button">create</button>
    </form>
  );
  function handleSubmit(event) {
    const form = event.target;
    const { characterName, spezies } = form.elements;
    console.log("form", form);
    console.log("form.elements");
    console.log("characterName" + characterName.value);
    console.log("house" + spezies.value);
    form.reset();
    characterName.focus();
    newCharacterButton({ name: characterName, Spezies: spezies });
  }
}

export default Create;
