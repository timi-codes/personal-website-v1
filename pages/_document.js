import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
    }
    render() {
        return (
        <Html lang="en">
            <Head>
              <link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
              <noscript>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"/>
              </noscript>
              <script dangerouslySetInnerHTML={{ __html: 'try{Typekit.load({ async: false });}catch(e){}' }} />
              <meta name="twitter:card" content="summary" key="twcard" />
            <meta name="twitter:creator" content="timicodes" key="twhandle" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <meta name="description" content="I'm Timi Tejumola, a design-minded software engineer
              focused on building beautiful interfaces & experiences across
              mobile & web platforms. 🚀"/>
            <meta property="og:url" content="https://www.timitej.dev" key="ogurl" />
            <meta property="og:image" content="/images/profile-avatar.png" key="ogimage" />
            <meta property="og:site_name" content="Timi Tejumola" key="ogsitename" />
            <meta property="og:title" content="Timi Tejumola" key="ogtitle" />
            <meta property="og:description" content="
              I'm Timi Tejumola, a design-minded software engineer
              focused on building beautiful interfaces & experiences across
              mobile & web platforms.🚀" key="ogdesc" />
            <link rel="icon" href="/favicon.ico" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-175462548-1"></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-175462548-1');
                `
              }}
            ></script>
        </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
        );
    }
}
export default MyDocument;
