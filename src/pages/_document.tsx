import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import colors from '../utils/colors'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
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

          <link
            rel="icon"
            href="https://demo.themeregion.com/newshub/images/ico/favicon.ico"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="https://demo.themeregion.com/newshub/images/ico/apple-touch-icon-144-precomposed.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="https://demo.themeregion.com/newshub/images/ico/apple-touch-icon-114-precomposed.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="https://demo.themeregion.com/newshub/images/ico/apple-touch-icon-72-precomposed.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="https://demo.themeregion.com/newshub/images/ico/apple-touch-icon-57-precomposed.png"
          />
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