import styled from 'styled-components'
import { BaseButton } from '../BaseButton'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  max-width: 70rem;
  margin: 0 auto;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const CityButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.purpleLight};
  color: ${(props) => props.theme.purpleDark};

  svg {
    color: ${(props) => props.theme.purple};
  }
`
