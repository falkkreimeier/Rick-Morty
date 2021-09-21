import { createGlobalStyle } from "styled-components";
import Background from "../image/Rick-and-morty.jpg";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-size: 100vw;
  background-attachment: fixed;
  background-image: url(${Background});
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

@font-face {
  font-family: AMISH;
  src: url("../Font/AmishCyborg-Regular.otf") format("openType");
}

.card__headline {
  margin: 10px;
}

.card__image {
  grid-area: image;
  height: 8rem;
  border: 2px silver solid;
  border-radius: 50%;
  color: silver;
  box-shadow: 0 0 5px 5px;
}

p {
  margin: 10px;
}

h2 {
  font-family: AMISH;
}

`;

export default GlobalStyle;
