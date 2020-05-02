import React from 'react'
import Head from 'next/head'

import { DOMAIN, APP_NAME, TWITTER_HANDLE } from '../utils/constants'

type Props = {
  title?: string,
  url?: string,
  description?: string,
  type?: string,
  image?: string,
  imageWidth?: number,
  imageHeight?: number,
}

export default function SEO({ title, url, description, type, image, imageWidth, imageHeight }: Props) {
  const titleContent = `${APP_NAME} - ${title || "Actualité, Politique, Culture, Sport"}`
  const descriptionContent = description || `
      Juno7, Haïti News : Agence de Presse Numérique. Actualité et Informations Nationales et Internationales: Politique, Sport, Culture. Plus d'un Million d'Abonnés
  `
  const imageContent = image || `/assets/images/logo-juno7.jpg`

  return (
    <>
      <Head>
        <meta property="og:title" content={titleContent} key="title" />
        <meta property="og:site_name" content={APP_NAME} key="site_name" />
        <meta property="og:url" content={url || DOMAIN} key="url" />
        <meta property="og:description" content={descriptionContent.replace(/(<([^>]+)>)/ig, "")} key="description" />
        <meta property="og:type" content={type || "website"} key="type" />
        <meta property="og:image" content={imageContent} key="image" />
        {imageWidth && <meta property="og:image:width" content={`${imageWidth}`} key="image_width" />}
        {imageHeight && <meta property="og:image:height" content={`${imageHeight}`} key="image_height" />}

        {/* <meta property="fb:app_id" content={FB_APP_ID} key="fb_app_id" /> */}

        <meta name="twitter:card" content="summary" key="twitter_card" />
        <meta name="twitter:site" content={`@${TWITTER_HANDLE}`} key="twitter_site" />
        <meta name="twitter:title" content={titleContent} key="twitter_title " />
        <meta name="twitter:description" content={descriptionContent.replace(/(<([^>]+)>)/ig, "")} key="twitter_description" />
        <meta name="twitter:image" content={imageContent} key="twitter_image" />

        <title>{titleContent}</title>
      </Head>
    </>
  )
}