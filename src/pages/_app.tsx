import "../styles/App.css";
import "../styles/index.css";
import {AppProps} from "next/app";
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />
                <title>RoboFriends</title>
                <link rel="manifest" href="/manifest.json" />
                <link href="/icons/favicon.ico" rel="icon" type="image/ico" sizes="16x16" />
                <link href="/icons/favicon.ico" rel="icon" type="image/ico" sizes="32x32" />
                <link rel="apple-touch-icon" href="/icons/192.png"></link>
                <meta name="theme-color" content="#317EFB" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;
