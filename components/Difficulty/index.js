import React from 'react'
import { DifficultyWrapper, Label, Bubbles, Bubble } from './styles'

const Difficulty = ({ level = 1 }) => {
  const bubbles = []
  for (let i = 0; i < level; i += 1) {
    bubbles.push(<Bubble key={i} level={level} />)
  }

  return (
    <DifficultyWrapper>
      <Label>Difficulty:</Label>
      <Bubbles>{bubbles}</Bubbles>
    </DifficultyWrapper>
  )
}

export default Difficulty
