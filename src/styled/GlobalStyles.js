import { css } from '@emotion/react';

export const globalStyles = css`
   body {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-style: normal;
    width: 100%;
    height: 100vh;
    margin: 0;
  }

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
ul,
ol,
li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}
html,
body {
  height: 100%;
  line-height: 1;
  background: var(--bg-grey-color);
  font-size: 14px;
  color: var(--primary-title-color);
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}
:root {
  --primary-title-color: #131d46;
  --grey-color: #494949;
  --green-color: #09575e;
  --darck-green-color: #064348;
  --white-color: #fff;
  --bg-grey-color: #f2f2f2;
}
/* ---------------------------------------
------------------------------------- */
.wrapper {
  min-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
/* --------------------------------------------------
-------------------------- */
._container {
  max-width: 1046px;
  padding: 0px 15px;
  margin: 0px auto;
  box-sizing: content-box;
}
._ibg {
  position: relative;
}
._ibg img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
}
  
`;