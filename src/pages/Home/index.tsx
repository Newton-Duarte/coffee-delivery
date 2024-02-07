import {
  Coffee as CoffeeIcon,
  Package,
  ShoppingCart,
  Timer,
} from 'phosphor-react'
import heroImg from '../../assets/coffee-delivery-hero.png'
import { Title } from '../../components/Title'
import { Text } from '../../components/Text'
import { CoffeeCard } from './components/CoffeeCard'

import * as S from './styles'
import { useProducts } from '../../hooks/useProducts'
import { useCart } from '../../hooks/useCart'

export function Home() {
  const { products, updateProductQuantity } = useProducts()
  const { addProductToCart } = useCart()

  return (
    <S.Container>
      <S.HeroWrapper>
        <S.Hero>
          <S.Content>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <Text variant="lg">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Text>
            <S.Info>
              <S.InfoItem>
                <div>
                  <ShoppingCart size={16} weight="fill" />
                </div>
                <Text>Compra simples e segura</Text>
              </S.InfoItem>
              <S.InfoItem>
                <div>
                  <Package size={16} weight="fill" />
                </div>
                <Text>Embalagem mantém o café intacto</Text>
              </S.InfoItem>
              <S.InfoItem>
                <div>
                  <Timer size={16} weight="fill" />
                </div>
                <Text>Entrega rápida e rastreada</Text>
              </S.InfoItem>
              <S.InfoItem>
                <div>
                  <CoffeeIcon size={16} weight="fill" />
                </div>
                <Text>O café chega fresquinho até você</Text>
              </S.InfoItem>
            </S.Info>
          </S.Content>
          <img src={heroImg} alt="" />
        </S.Hero>
      </S.HeroWrapper>
      <S.OurCoffees>
        <Title as="h2" variant="lg">
          Nossos cafés
        </Title>
        <S.CoffeesList>
          {products.map((product) => (
            <CoffeeCard
              key={product.id}
              coffee={product}
              onUpdateProductQuantity={updateProductQuantity}
              onAddProductToCart={addProductToCart}
            />
          ))}
        </S.CoffeesList>
      </S.OurCoffees>
    </S.Container>
  )
}
