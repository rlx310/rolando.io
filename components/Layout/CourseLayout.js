import React from 'react'

import Container from '../Container'
import Hero from '../Hero'
import Nav from '../Nav'

const CourseLayout = ({ heroThumbnail, children }) => {
  return (
    <>
      <Nav />
      <Hero src={heroThumbnail} />
      <Container style={{ marginTop: '-40px' }}>{children}</Container>
    </>
  )
}

export default CourseLayout
