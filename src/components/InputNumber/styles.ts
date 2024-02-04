import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.baseButton};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  width: 4.5rem;
  border-radius: 6px;
`

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:not(:disabled):hover {
    svg {
      color: ${(props) => props.theme.purpleDark};
    }
  }
`

export const Input = styled.input.attrs({
  readOnly: true,
  value: 1,
})`
  background: transparent;
  border: none;
  min-width: 0;
  text-align: center;
  color: ${(props) => props.theme.baseTitle};
  font-size: 0.875rem;
`
