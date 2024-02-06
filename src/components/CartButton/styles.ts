import styled from 'styled-components'
import { BaseButton } from '../BaseButton'

export const Container = styled(BaseButton)`
  background-color: ${(props) => props.theme.yellowLight};
  height: 2.375rem;

  svg {
    color: ${(props) => props.theme.yellowDark};
  }

  &:not(:disabled):hover {
    transition: background-color 0.2s;
    background-color: ${(props) => props.theme.yellowDark};

    svg {
      color: ${(props) => props.theme.yellowLight};
    }
  }
`
