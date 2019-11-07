import React from 'react'

import { HeroWrapper } from './styles'

const Hero = ({ src, gradient, children }) => {
  return (
    <HeroWrapper src={src} gradient={gradient}>
      {children}
    </HeroWrapper>
  )
}

export default Hero
