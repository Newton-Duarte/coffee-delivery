import styled, { css } from 'styled-components'

export type TitleVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type TitleProps = {
  variant?: TitleVariant
}

function getVariant(variant?: TitleVariant) {
  switch (variant) {
    case 'xl':
      return css`
        font:
          800 3rem/1.3 'Baloo 2',
          sans-serif;
      `
    case 'lg':
      return css`
        font:
          800 2rem/1.3 'Baloo 2',
          sans-serif;
      `
    case 'md':
      return css`
        font:
          800 1.5rem/1.3 'Baloo 2',
          sans-serif;
      `
    case 'sm':
      return css`
        font:
          700 1.25rem/1.3 'Baloo 2',
          sans-serif;
      `
    case 'xs':
      return css`
        font:
          700 1.125rem/1.3 'Baloo 2',
          sans-serif;
      `
    default:
      return css`
        font:
          800 3rem/1.3 'Baloo 2',
          sans-serif;
      `
  }
}

export const Title = styled.h1<TitleProps>`
  color: ${(props) => props.theme.baseTitle};

  ${(props) => getVariant(props.variant)}
`
