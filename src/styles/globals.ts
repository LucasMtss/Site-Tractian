import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`

:root {
        --blue: ${colors.blue};
        --black: ${colors.black};
        --white: ${colors.white};
    }

html,
body {
  background-color: #1E1D1D;
  padding: 1rem;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

span{
  font-family: 'Offside', cursive;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
`;
