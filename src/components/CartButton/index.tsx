import { ShoppingCart } from 'phosphor-react'
import * as S from './styles'
import { useCart } from '../../hooks/useCart'
import { useMemo } from 'react'

export function CartButton() {
  const { totalProductsQuantity } = useCart()

  const totalProductsLabel = useMemo(() => {
    return totalProductsQuantity > 9 ? '9+' : totalProductsQuantity
  }, [totalProductsQuantity])

  return (
    <S.Container>
      {!!totalProductsQuantity && <S.Badge>{totalProductsLabel}</S.Badge>}
      <ShoppingCart size={22} weight="fill" />
    </S.Container>
  )
}
