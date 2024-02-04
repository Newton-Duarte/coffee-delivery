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

const coffees = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    categories: ['Tradicional'],
    price: 9.9,
    image_url: '/src/assets/cafe-expresso.png',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    categories: ['Tradicional'],
    price: 9.9,
    image_url: '/src/assets/cafe-americano.png',
    quantity: 1,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    categories: ['Tradicional'],
    price: 9.9,
    image_url: '/src/assets/cafe-expresso-cremoso.png',
    quantity: 1,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    categories: ['Tradicional', 'Gelado'],
    price: 9.9,
    image_url: '/src/assets/cafe-gelado.png',
    quantity: 1,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    categories: ['Tradicional', 'Com Leite'],
    price: 9.9,
    image_url: '/src/assets/cafe-com-leite.png',
    quantity: 1,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    categories: ['Tradicional', 'Com Leite'],
    price: 9.9,
    image_url: '/src/assets/cafe-latte.png',
    quantity: 1,
  },
  {
    id: 7,
    name: 'Cappuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    categories: ['Tradicional', 'Com Leite'],
    price: 9.9,
    image_url: '/src/assets/cappuccino.png',
    quantity: 1,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    categories: ['Tradicional', 'Com Leite'],
    price: 9.9,
    image_url: '/src/assets/cafe-macchiato.png',
    quantity: 1,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    categories: ['Tradicional', 'Com Leite'],
    price: 9.9,
    image_url: '/src/assets/cafe-mocaccino.png',
    quantity: 1,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description:
      'OBebida feita com chocolate dissolvido no leite quente e café',
    categories: ['Especial', 'Com Leite'],
    price: 9.9,
    image_url: '/src/assets/chocolate-quente.png',
    quantity: 1,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    categories: ['Especial', 'Alcoólico', 'Gelado'],
    price: 9.9,
    image_url: '/src/assets/cafe-cubano.png',
    quantity: 1,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    categories: ['Especial'],
    price: 9.9,
    image_url: '/src/assets/cafe-havaiano.png',
    quantity: 1,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    categories: ['Especial'],
    price: 9.9,
    image_url: '/src/assets/cafe-arabe.png',
    quantity: 1,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    categories: ['Especial', 'Alcoólico'],
    price: 9.9,
    image_url: '/src/assets/cafe-irlandes.png',
    quantity: 1,
  },
]

export function Home() {
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
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </S.CoffeesList>
      </S.OurCoffees>
    </S.Container>
  )
}
