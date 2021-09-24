import styled, { css } from "styled-components";

function Create({ newCharacterButton }) {
  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <CreateLable>
        <p>Name of Character:</p>
        <Input type="text" name="characterName" required></Input>
      </CreateLable>
      <CreateLable>
        <p>Spezies:</p>
        <Input type="text" name="spezies" required></Input>
      </CreateLable>
      <Button primary>create</Button>
    </Form>
  );
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { characterName, spezies } = form.elements;
    console.log("form", form);
    console.log("form.elements");
    console.log("characterName" + characterName.value);
    console.log("spezies" + spezies.value);
    characterName.focus();
    newCharacterButton({ name: characterName, spezies: spezies });
  }
}

const Button = styled.button`
  width: 60px;
  margin: 10px;
  background-color: white;
  border-radius: 20px;
  ${(props) =>
    props.primary &&
    css`
      background-color: black;
      color: white;
    `}
  :hover {
    box-shadow: 0 0 5px 5px white;
  }
`;

const CreateLable = styled.label`
  font-family: AMISH;
`;

const Input = styled.input`
  width: 150px;
  margin: 10px;
  background-color: white;
  border-radius: 20px;
`;

const Form = styled.form`
  background-color: rgb(5, 150, 135);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px white solid;
  border-radius: 20px;
  width: 400px;
  margin: 10px auto;
  text-align: center;
`;

export default Create;
