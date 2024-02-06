import styled from 'styled-components'

export const Container = styled.div`
  max-width: 70rem;
  margin: 5rem auto 0;

  > h1 {
    color: ${(props) => props.theme.yellowDark};
  }

  > p {
    color: ${(props) => props.theme.baseSubtitle};
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2.5rem;

  img {
    margin-left: auto;
  }
`

export const OrderInfoWrapper = styled.div`
  position: relative;
  padding: 0.125rem;
  background: linear-gradient(
    to bottom right,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );
  border: 1px solid transparent;
  border-radius: 6px 36px 6px 36px;
`

export const OrderInfo = styled.div`
  position: absolute;
  inset: 0;
  background: ${(props) => props.theme.white};
  border-radius: 6px 36px 6px 36px;
  padding: 2.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    & + div {
      margin-top: 2rem;
    }

    &:nth-child(1) {
      > div {
        &:first-of-type {
          background-color: ${(props) => props.theme.purple};
        }
      }
    }

    &:nth-child(2) {
      > div {
        &:first-of-type {
          background-color: ${(props) => props.theme.yellow};
        }
      }
    }

    &:nth-child(3) {
      > div {
        &:first-of-type {
          background-color: ${(props) => props.theme.yellowDark};
        }
      }
    }

    > div {
      &:first-of-type {
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 999rem;

        svg {
          color: ${(props) => props.theme.white};
        }
      }
    }
  }
`
