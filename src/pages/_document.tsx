import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import colors from '../utils/colors'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta charSet="ut8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="http-equiv" />
          <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />

          <link rel="icon" href="https://i1.wp.com/www.juno7.ht/wp-content/uploads/2019/01/cropped-1024j7.jpg?fit=32%2C32&#038;ssl=1" sizes="32x32" />
          <link rel="icon" href="https://i1.wp.com/www.juno7.ht/wp-content/uploads/2019/01/cropped-1024j7.jpg?fit=192%2C192&#038;ssl=1" sizes="192x192" />
          <link rel="apple-touch-icon" href="https://i1.wp.com/www.juno7.ht/wp-content/uploads/2019/01/cropped-1024j7.jpg?fit=180%2C180&#038;ssl=1" />
          <meta name="msapplication-TileImage" content="https://i1.wp.com/www.juno7.ht/wp-content/uploads/2019/01/cropped-1024j7.jpg?fit=270%2C270&#038;ssl=1" />

          <script dangerouslySetInnerHTML={{
            __html: `
              window.onload = function(e) {
                loadAdAndPushcripts()
              }

              function loadAdAndPushcripts() {
                if (!document.querySelectorAll('.adsense-script').length) {
                  var adsense = document.createElement("script");
                  adsense.className = "adsense-script";
                  adsense.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
                  adsense.setAttribute('data-ad-client', "ca-pub-7203147191748397")
                  document.body.appendChild(adsense);
                }
              }
            `
          }} />
        </Head>
        <body>
          <Main />
          <NextScript />

          {process.env.NODE_ENV === 'production' && (
            <>
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-81362147-3"></script>
              <script dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'UA-81362147-3');
                `
              }} />
            </>
          )}
        </body>
      </Html>
    )
  }
}