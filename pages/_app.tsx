import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Navbar from "../components/NavBar"; // Correct if file is NavBar.tsx
import "../styles/globals.css";

// Create a custom theme (color scheme is now set inside `colors`)
const theme = createTheme({
    primaryColor: 'orange', // Change this to your desired color
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider theme={theme} defaultColorScheme="light">
            <div>
                <Navbar />
                <div style={{ height: 'calc(100vh-56px)', overflowY: 'auto' }}>
                    <Component {...pageProps} />
                </div>
            </div>

        </MantineProvider>
    );
}

export default MyApp;
