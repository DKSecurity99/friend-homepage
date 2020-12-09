import Theme from '../styles/theme';
import GlobalStyle from '../styles/globals';

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <GlobalStyle />
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp
