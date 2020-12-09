import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: '#fff',
    darkBlue: '#004266',
    cyan: '#4CC7DE',
    gray: '#778C9F'
  },
  fontSizes: {
    mobile: {
      'xs': '1.6rem',
      'sm': '1.8rem',
      'md': '2.4rem',
      'lg': '3.4rem',
    }
  }
};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{ children }</ThemeProvider>
}

export default Theme;
