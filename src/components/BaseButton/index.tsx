import styled from 'styled-components'

export const BaseButton = styled.button`
  background: ${(props) => props.theme.baseButton};
  color: ${(props) => props.theme.baseLabel};
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;

  &:not(:disabled):hover {
    background: ${(props) => props.theme.baseHover};
  }
`
