import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap');

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Overpass', sans-serif, monospace;
}

:root {
  /* primary */
  --clr-Orange: hsl(25, 97%, 53%);
  /* neutral */
  --clr-White: hsl(0, 0%, 100%);
  --clr-LightGrey: hsl(217, 12%, 63%);
  --clr-MediumGrey: hsl(216, 12%, 54%);
  --clr-DarkBlue: hsl(213, 20%, 18%);
  --clr-VeryDarkBlue: hsl(216, 12%, 8%);
}

body {
  background-color: var(--clr-VeryDarkBlue);
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  font-weight: 700;
  font-style: normal;
}

`