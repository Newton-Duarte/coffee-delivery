import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import heroImg from '../../assets/coffee-delivery-hero.png'

import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <S.Info>
            <S.InfoItem>
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </S.InfoItem>
            <S.InfoItem>
              <div>
                <Package size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </S.InfoItem>
            <S.InfoItem>
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </S.InfoItem>
            <S.InfoItem>
              <div>
                <Coffee size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </S.InfoItem>
          </S.Info>
        </S.Content>
        <img src={heroImg} alt="" />
      </S.Wrapper>
    </S.Container>
  )
}
