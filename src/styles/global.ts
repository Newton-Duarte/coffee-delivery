import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }

  a {
    text-decoration: none;

    &.link {
      color: ${(props) => props.theme.blue};
      text-transform: uppercase;
      font-weight: bold;
      font-size: 12px;
      text-decoration: none;
      border-bottom: 1px solid transparent;

      display: flex;
      gap: 0.5rem;

      &:not(:disabled):hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }
`
