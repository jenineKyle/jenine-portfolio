// _app.tsx
import '../styles/globals.css'; // Make sure the path is correct
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
