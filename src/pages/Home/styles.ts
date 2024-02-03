import styled from 'styled-components'

import heroBg from '../../assets/hero-background.png'

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.5rem;
  margin: 5.875rem 0;
  background: url(${heroBg});
  background-repeat: no-repeat;
  background-size: cover;

  > img {
    justify-self: end;
  }
`

export const Content = styled.div`
  margin: 0 auto;

  h1 {
    font:
      800 3rem 'Baloo 2',
      sans-serif;
    line-height: 1.3;
    max-width: 36.75rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.875rem;
    max-width: 36.75rem;
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-top: 4rem;
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:nth-child(1) {
    div {
      background-color: ${(props) => props.theme.yellowDark};
    }
  }

  &:nth-child(2) {
    div {
      background-color: ${(props) => props.theme.baseText};
    }
  }

  &:nth-child(3) {
    div {
      background-color: ${(props) => props.theme.yellow};
    }
  }

  &:nth-child(4) {
    div {
      background-color: ${(props) => props.theme.purple};
    }
  }

  div {
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
