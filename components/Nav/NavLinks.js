import React from 'react'
import Link from 'next/link'

import NavLogo from './NavLogo'

const NavLinks = () => {
  return (
    <>
      <NavLogo />
      {links.map(({ key, href, label, absolute }) =>
        absolute ? (
          <a href={href} key={key} className="nav-link">
            {label}
          </a>
        ) : (
          <Link href={href} key={key}>
            <a className="nav-link">{label}</a>
          </Link>
        )
      )}
    </>
  )
}

const links = [
  { href: '/web', label: 'HTML/CSS', absolute: false },
  { href: '/javascript', label: 'JavaScript', absolute: false },
  { href: '/python', label: 'Python', absolute: false },
  { href: '/vr', label: 'Web VR', absolute: false },
  { href: '/blog', label: 'Blog', absolute: false }
].map((link) => ({ ...link, key: `nav-link-${link.href}-${link.label}` }))

export default NavLinks
