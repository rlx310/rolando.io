import React from 'react'

import Link from 'next/link'

const NavLogo = () => {
  return (
    <Link href="/">
      <a className="logo">
        <img src="/static/logos/white_logo_transparent_background.png" />
      </a>
    </Link>
  )
}

export default NavLogo
