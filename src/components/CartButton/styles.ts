import styled from 'styled-components'
import { BaseButton } from '../BaseButton'

export const Container = styled(BaseButton)`
  background-color: ${(props) => props.theme.yellowLight};
  height: 2.375rem;
  position: relative;

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

export const Badge = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 999rem;
  background: ${(props) => props.theme.yellowDark};
  font-size: 0.75rem;
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
`
