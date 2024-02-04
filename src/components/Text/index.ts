import styled, { css } from 'styled-components'

export type TextVariant = 'xs' | 'sm' | 'md' | 'lg'

type TextProps = {
  variant?: TextVariant
  fontWeight?: 'normal' | 'bold'
}

function getVariant(variant?: TextVariant) {
  switch (variant) {
    case 'lg':
      return css`
        font:
          400 1.25rem/1.3 'Roboto',
          sans-serif;
      `
    case 'md':
      return css`
        font:
          400 1rem/1.3 'Roboto',
          sans-serif;
      `
    case 'sm':
      return css`
        font:
          400 0.875rem/1.3 'Roboto',
          sans-serif;
      `
    case 'xs':
      return css`
        font:
          700 0.75rem/1.3 'Roboto',
          sans-serif;
      `
    default:
      return css`
        font:
          400 0.875rem/1.3 'Roboto',
          sans-serif;
      `
  }
}

export const Text = styled.p<TextProps>`
  color: ${(props) => props.theme.baseText};

  ${(props) => getVariant(props.variant)}
  font-weight: ${(props) => props.fontWeight || 'normal'};
`
