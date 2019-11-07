import React from 'react'

import { NavWrapper, NavGap } from './styles'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'

const Nav = () => (
  <>
    <NavWrapper>
      <NavDesktop />
      <NavMobile />
    </NavWrapper>
    <NavGap />
  </>
)

export default Nav
