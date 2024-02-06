import styled from 'styled-components'
import { BaseButton } from '../../components/BaseButton'

export const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`

export const CompleteOrder = styled.div``

export const DeliveryAddress = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme.baseCard};
  margin-top: 1rem;
  margin-bottom: 0.75rem;

  form {
    margin-top: 2rem;

    input {
      border: 1px solid ${(props) => props.theme.baseButton};
      background: ${(props) => props.theme.baseInput};
      height: 2.625rem;
      border-radius: 4px;
      padding: 0.75rem;

      &::placeholder {
        color: ${(props) => props.theme.baseLabel};
        font-size: 0.875rem;
      }

      &.form-control {
        width: 100%;
        flex-grow: 1;
      }

      &.uf {
        width: 15%;
      }
    }

    > input + input {
      margin-top: 1rem;
    }
  }
`

export const FormRow = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`

export const SectionHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.yellowDark};
  }
`

export const Payment = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme.baseCard};

  > div > svg {
    color: ${(props) => props.theme.purple};
  }
`

export const PaymentTypes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2rem;
`

export const PaymentButton = styled.button`
  display: flex;
  align-items: flex;
  flex: 1;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 0.75rem;
  outline: none;
  border: 1px solid transparent;
  cursor: pointer;
  background: ${(props) => props.theme.baseButton};
  color: ${(props) => props.theme.baseSubtitle};

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.baseHover};
  }

  &.active {
    background: ${(props) => props.theme.purpleLight};
    border-color: ${(props) => props.theme.purple};
  }
`

export const Order = styled.div`
  align-self: start;
`

export const OrderItems = styled.div`
  background: ${(props) => props.theme.baseCard};
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;
`

export const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;

  & + div {
    border-top: 1px solid ${(props) => props.theme.baseButton};
    margin-top: 1.5rem;
    padding-top: 1.5rem;
  }

  > div {
    display: flex;

    img {
      width: 4rem;
      height: 4rem;
      margin-right: 1.25rem;
    }

    > div {
      p {
        margin-bottom: 0.5rem;
      }

      > div {
        display: flex;
        gap: 0.5rem;
      }
    }
  }
`

export const RemoveButton = styled(BaseButton)`
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.baseText};

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const Total = styled.div`
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    justify-content: space-between;

    & + div {
      margin-top: 0.75rem;
    }
  }
`

export const ConfirmButton = styled(BaseButton)`
  width: 100%;
  height: 2.875rem;
  padding: 1rem;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  text-align: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: bold;
  border-radius: 6px;

  &:not(:disabled):hover {
    background: ${(props) => props.theme.yellowDark};
  }
`
