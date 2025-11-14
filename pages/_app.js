import '../styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;