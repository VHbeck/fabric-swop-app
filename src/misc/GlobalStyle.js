import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

h2 {
  font-family: 'Nunito', sans-serif;
   color: #131426;
   font-size: 20px;
}

body {
  background: rgb(253,247,245);
background: linear-gradient(0deg, rgba(253,247,245,1) 76%, rgba(255,224,199,1) 89%, rgba(255,200,202,1) 100%);
   margin: 0px;
   font-family: 'Nunito', sans-serif;
   color: #131426;
   display: flex;
   min-height: 100vh;
 flex-direction: column;
 font-size: 18px;
}
`;

export default GlobalStyle;
