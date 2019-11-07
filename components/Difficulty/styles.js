import styled from 'styled-components'

export const DifficultyWrapper = styled.div`
  display: flex;
  margin-top: auto;

  .bubble {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`

export const Label = styled.div``

export const Bubbles = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
`

export const Bubble = styled.div`
  background-color: ${({ level }) => levelColors[level]};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin: 0px 3px;
`

const levelColors = {
  '1': '#23F0C7',
  '2': '#F9CB40',
  '3': '#E84855'
}
