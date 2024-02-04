import { ShoppingCartSimple } from 'phosphor-react'
import { InputNumber } from '../../../../components/InputNumber'
import { Text } from '../../../../components/Text'
import { Title } from '../../../../components/Title'
import { priceFormatter } from '../../../../utils/formatter'

import * as S from './styles'

export type Coffee = {
  id: number
  name: string
  description: string
  categories: string[]
  price: number
  image_url: string
  quantity: number
}

export type CoffeeProps = {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
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
          <InputNumber />
          <S.AddToCartButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </S.AddToCartButton>
        </div>
      </S.CoffeeFooter>
    </S.Coffee>
  )
}
