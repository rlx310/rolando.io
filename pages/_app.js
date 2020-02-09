import React from 'react'
import App from 'next/app'
import Head from 'next/Head'
import { ThemeProvider } from 'styled-components'

import theme from '../components/styles/theme'
import GlobalStyles from '../components/styles/globalStyles'

export default class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <>
          <Head>
            <title>ByteSized Coding</title>
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    )
  }
}
