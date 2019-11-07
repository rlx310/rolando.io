import styled, { css } from 'styled-components'

export const CardWrapper = styled.div`
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.25rem;
  margin: 0 1rem 2rem;
  overflow: hidden;

  transition: transform 0.3s;

  &:hover {
    transform: translateY(-4px);
  }

  .wrapper-inner {
    display: flex;
    flex-direction: ${({ direction }) => direction};
    height: 100%;
  }

  .card-image {
    width: ${({ direction }) => (direction === 'column' ? '100%' : '30%')};
    background-color: white;
    

    @media (max-width: 768px) {
      display: ${({ direction }) =>
        direction === 'column' ? 'block' : 'none'};
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      vertical-align: middle;
    }
  }

  .card-body {
    width: ${({ direction }) => (direction === 'column' ? '100%' : '70%')};
    padding: 20px 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background-color: #fff;
  }

  ${({ direction }) =>
    direction === 'column'
      ? css`
          width: calc(31% - 1rem);

          @media (max-width: 1024px) {
            width: calc(47% - 1rem);
          }

          @media (max-width: 768px) {
            max-width: 500px;
            margin: 0 auto 2rem;
            width: calc(100% - 1rem);
          }

          .card-image {
            width: 100%;
          }
        `
      : css`
          min-height: 150px;

          .card-image: {
            width: 33%;
          }
        `}
`
