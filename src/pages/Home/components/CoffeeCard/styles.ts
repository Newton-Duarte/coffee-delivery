import styled from 'styled-components'
import { BaseButton } from '../../../../components/BaseButton'

export const Coffee = styled.div`
  width: 16rem;
  padding: 1.25rem 1.5rem;
  background: ${(props) => props.theme.baseCard};
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    margin-top: -2.5rem;
    margin-bottom: 0.75rem;
  }

  h3 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
`

export const CoffeeFooter = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h4 {
    color: ${(props) => props.theme.baseText};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const AddToCartButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.purpleDark};
  width: 2.375rem;
  height: 2.375rem;

  svg {
    color: ${(props) => props.theme.white};
  }
`

export const Chip = styled.span`
  background: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellowDark};
  font-size: 0.625rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  border-radius: 999rem;
`
