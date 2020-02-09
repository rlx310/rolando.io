import React from 'react'

import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Difficulty from '../components/Difficulty'
import Container from '../components/Container'
import Row from '../components/Layout/Row'

const Home = () => (
  <>
    <Nav />
    <Hero src="/static/assets/code-hero.jpeg" gradient>
      <h1>Learn to Code From Scratch</h1>
      <h2>Take you skills to the next level</h2>
    </Hero>

    <Container style={{ marginTop: '-40px' }}>
      <Row>
        <Card src="/static/assets/js-intro.svg" href="/javascript/intro">
          <h3>JavaScript Intro</h3>
          <p>
            JavaScript lets you turn a web page into a full blown application!
            Build software, games, and full-blown media platforms! Learn the
            basics of the language here!
          </p>
          <Difficulty level={1} />
        </Card>
        <Card src="/static/assets/js-intro.svg" href="/javascript/intermediate">
          <h3>JavaScript Intermediate</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            delectus dolorem magnam necessitatibus corporis harum.
          </p>
          <Difficulty level={2} />
        </Card>
        <Card src="/static/assets/js-intro.svg" href="/javascript/advanced">
          <h3>JavaScript Advanced</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            delectus dolorem magnam necessitatibus corporis harum.
          </p>
          <Difficulty level={3} />
        </Card>
        <Card src="/static/assets/python.svg" href="/python/intro">
          <h3>Python Intro</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            delectus dolorem magnam necessitatibus corporis harum.
          </p>
          <Difficulty level={1} />
        </Card>
        <Card src="/static/assets/python.svg" href="/python/intermediate">
          <h3>Python Intermediate</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            delectus dolorem magnam necessitatibus corporis harum.
          </p>
          <Difficulty level={2} />
        </Card>
        <Card src="/static/assets/python.svg" href="/python/advanced">
          <h3>Python Advanced</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            delectus dolorem magnam necessitatibus corporis harum.
          </p>
          <Difficulty level={3} />
        </Card>
      </Row>
    </Container>
  </>
)

export default Home
