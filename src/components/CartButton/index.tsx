import { ShoppingCart } from 'phosphor-react'
import * as S from './styles'

export function CartButton() {
  return (
    <S.Container>
      <ShoppingCart size={22} weight="fill" />
    </S.Container>
  )
}
