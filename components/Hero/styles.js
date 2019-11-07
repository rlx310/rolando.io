import styled, { css } from 'styled-components'

export const HeroWrapper = styled.div`
  min-height: 560px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-size: cover;
  background-position: center center;
  ${({ gradient, src }) =>
    gradient
      ? css`
          background-image: linear-gradient(
              to right,
              rgba(0, 4, 40, 0.8),
              rgba(0, 78, 146, 0.8)
            ),
            url(${src});
        `
      : css`
          background-image: url(${src});
        `}
  h1,
  h2, h3, p {
    margin: 0;
    text-align: center;
  }
`
