import React from 'react'

import Nav from '../../../components/Nav'
import Hero from '../../../components/Hero'
import Container from '../../../components/Container'
import Card from '../../../components/Card'

const JSIntroHomePage = () => {
  const cardThumbnail = '/static/assets/js-intro.svg'
  const baseHref = '/javascript/intro/'
  const getFullHref = (slug) => baseHref + slug

  return (
    <>
      <Nav />
      <Hero src="/static/assets/js-intro.svg" />
      <Container style={{ marginTop: '-40px' }}>
        <Card src={cardThumbnail} href={getFullHref('lesson1')} horizontal>
          <h5>Lesson #1</h5>
          <h3>What is JavaScript?</h3>
          <p>
            Get an overview of what JavaScript is, where its used, and what you
            can build with it.
          </p>
        </Card>
        <Card src={cardThumbnail} href={getFullHref('lesson2')} horizontal>
          <h5>Lesson #2</h5>
          <h3>Numbers</h3>
          <p>
            Numbers are essential to working with JavaScript! Learn how to do
            common math operations as well as some new ones.
          </p>
        </Card>
        <Card src={cardThumbnail} href={getFullHref('lesson3')} horizontal>
          <h5>Lesson #3</h5>
          <h3>Variables</h3>
          <p>
            Learn how to store, modify, and re-use values in your codebase to
            write cleaner, more expressive code.
          </p>
        </Card>
        <Card src={cardThumbnail} href={getFullHref('lesson4')} horizontal>
          <h5>Lesson #4</h5>
          <h3>Strings</h3>
          <p></p>
        </Card>
        <Card src={cardThumbnail} href={getFullHref('lesson5')} horizontal>
          <h5>Lesson #5</h5>
          <h3>Booleans and Logic</h3>
          <p></p>
        </Card>
        <Card src={cardThumbnail} href={getFullHref('lesson6')} horizontal>
          <h5>Lesson #6</h5>
          <h3>Functions</h3>
          <p></p>
        </Card>
      </Container>
    </>
  )
}

export default JSIntroHomePage
