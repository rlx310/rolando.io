import React, { useState } from 'react'

import {
  NavMobileWrapper,
  Menu,
  HamburgerButton,
  HamburgerOpen,
  Drawer,
  HamburgerClose
} from './styles'
import NavLinks from './NavLinks'
import NavLogo from './NavLogo'

const NavMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <NavMobileWrapper>
      <Menu>
        <NavLogo />
        <HamburgerButton onClick={() => setMenuOpen(!menuOpen)}>
          <HamburgerOpen />
        </HamburgerButton>
      </Menu>
      <Drawer className={menuOpen ? 'active' : ''}>
        <HamburgerClose onClick={() => setMenuOpen(false)}>X</HamburgerClose>
        <NavLinks />
      </Drawer>
    </NavMobileWrapper>
  )
}

export default NavMobile
