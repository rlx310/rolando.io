import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Footer = ({ prev, next }) => {
  return (
    <FooterWrapper>
      {prev && (
        <Link href={prev}>
          <a className="prev">previous</a>
        </Link>
      )}
      {next && (
        <Link href={next}>
          <a className="next">next</a>
        </Link>
      )}
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  font-size: 1.15rem;
  display: flex;

  a {
    font-size: 1.15rem;
    text-decoration: none;
  }

  .prev,
  .next {
    width: 50%;
    border: 3px solid #f5f2f0;
    padding: 17px 0;
    text-align: center;
    transition: all 0.3s;
  }

  .prev:hover,
  .next:hover {
    background-color: #fcfcfc;
  }

  .prev {
    border-radius: 6px 0 0 6px;
  }

  .next {
    border-radius: 0 6px 6px 0;
    margin-left: auto;
  }
`

export default Footer
