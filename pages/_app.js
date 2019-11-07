import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from '../components/styles/theme'
import GlobalStyles from '../components/styles/globalStyles'

export default class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    )
  }
}
