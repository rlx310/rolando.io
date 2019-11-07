import React from 'react'
import Link from 'next/link'

import { CardWrapper } from './styles'

const Card = ({ href, src, children, horizontal }) => {
  const Wrapper = href
    ? ({ children }) => (
        <Link href={href}>
          <a className="wrapper-inner">{children}</a>
        </Link>
      )
    : ({ children }) => <div className="wrapper-inner">{children}</div>

  const direction = horizontal ? 'row' : 'column'

  return (
    <CardWrapper direction={direction}>
      <Wrapper>
        <div className="card-image" direction={direction}>
          <img src={src} />
        </div>
        <div className="card-body">{children}</div>
      </Wrapper>
    </CardWrapper>
  )
}

export default Card
