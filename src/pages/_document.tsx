import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import colors from '../utils/colors'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta charSet="ut8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" key="http-equiv" />
          <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />

          <link rel="stylesheet" href="/assets/css/main.css" />

          <link rel="icon" href="https://i1.wp.com/www.juno7.ht/wp-content/uploads/2019/01/cropped-1024j7.jpg?fit=32%2C32&#038;ssl=1" sizes="32x32" />
          <link rel="icon" href="https://i1.wp.com/www.juno7.ht/wp-content/uploads/2019/01/cropped-1024j7.jpg?fit=192%2C192&#038;ssl=1" sizes="192x192" />
          <link rel="apple-touch-icon" href="https://i1.wp.com/www.juno7.ht/wp-content/uploads/2019/01/cropped-1024j7.jpg?fit=180%2C180&#038;ssl=1" />
          <meta name="msapplication-TileImage" content="https://i1.wp.com/www.juno7.ht/wp-content/uploads/2019/01/cropped-1024j7.jpg?fit=270%2C270&#038;ssl=1" />

          {/* <script dangerouslySetInnerHTML={{
            __html: `
              window.onload = function(e) {
                loadAdAndPushcripts()
              }

              function loadAdAndPushcripts() {
                if (!document.querySelectorAll('.adsense-script').length) {
                  var adsense = document.createElement("script");
                  adsense.className = "adsense-script";
                  adsense.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
                  adsense.setAttribute('data-ad-client', "ca-pub-3793163111580068")
                  document.body.appendChild(adsense);
                }
              }
            `
          }} /> */}
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* {process.env.NODE_ENV === 'production' && (
            <>
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-161910284-1"></script>
              <script dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'UA-161910284-1');
                `
              }} />
            </>
          )} */}
        </body>
      </Html>
    )
  }
}