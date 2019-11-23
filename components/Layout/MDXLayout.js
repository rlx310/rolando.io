import React from 'react'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import mdComponents from '../MDX/components'

import Footer from '../MDX/Footer'
import Nav from '../Nav'

const MDXLayout = ({ children, prev, next, noNav }) => {
  return (
    <MDXProvider components={mdComponents}>
      {!noNav && <Nav />}
      <LayoutWrapper>
        {children}
        <Footer prev={prev} next={next} />
      </LayoutWrapper>
    </MDXProvider>
  )
}

const LayoutWrapper = styled.div`
  max-width: 720px;
  margin: auto;
  padding: 0 20px;
  padding-top: 20px;
  padding-bottom: 40px;

  hr {
    margin-bottom: 50px;
  }

  img {
    width: 100%;
  }

  figure {
    display: block;
    text-align: left;
    margin: 0;
    margin-top: -15px;
    border-left: 2px solid black;
    padding-left: 10px;
    font-size: 1.15rem;
  }

  h2,
  h3 {
    border-left: 2px solid black;
    margin: 40px 0;
    padding-left: 16px;
  }

  h1,
  h4,
  h5 {
    margin: 10px 0;
  }

  a {
    text-decoration: underline;
    font-weight: bold;
  }

  li {
    font-size: 1.15rem;
  }
`

export default MDXLayout
