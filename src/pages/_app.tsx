import React from 'react'
import { AppProps } from 'next/app'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { APP_NAME } from '../utils/constants'
import '../css/tailwind.css'

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title key="title">{APP_NAME}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}