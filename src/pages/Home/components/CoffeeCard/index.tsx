import { ShoppingCartSimple } from 'phosphor-react'
import { InputNumber } from '../../../../components/InputNumber'
import { Text } from '../../../../components/Text'
import { Title } from '../../../../components/Title'
import { priceFormatter } from '../../../../utils/formatter'

import * as S from './styles'
import {
  Product,
  UpdateProductQuantityData,
} from '../../../../contexts/ProductsContext'

export type CoffeeProps = {
  coffee: Product
  onUpdateProductQuantity: (data: UpdateProductQuantityData) => void
  onAddProductToCart: (product: Product) => void
}

export function CoffeeCard({
  coffee,
  onUpdateProductQuantity,
  onAddProductToCart,
}: CoffeeProps) {
  return (
    <S.Coffee>
      <img src={coffee.image_url} alt={coffee.name} />
      <S.Categories>
        {coffee.categories.map((category) => (
          <S.Chip key={category}>{category}</S.Chip>
        ))}
      </S.Categories>
      <Title as="h3" variant="sm">
        {coffee.name}
      </Title>
      <Text variant="sm">{coffee.description}</Text>
      <S.CoffeeFooter>
        <Title as="h4" variant="md">
          {priceFormatter.format(coffee.price)}
        </Title>
        <div>
          <InputNumber
            value={coffee.quantity}
            onMinusClick={() =>
              onUpdateProductQuantity({
                productId: coffee.id,
                quantity: coffee.quantity - 1,
              })
            }
            onPlusClick={() =>
              onUpdateProductQuantity({
                productId: coffee.id,
                quantity: coffee.quantity + 1,
              })
            }
          />
          <S.AddToCartButton
            type="button"
            onClick={() => onAddProductToCart(coffee)}
          >
            <ShoppingCartSimple size={22} weight="fill" />
          </S.AddToCartButton>
        </div>
      </S.CoffeeFooter>
    </S.Coffee>
  )
}
