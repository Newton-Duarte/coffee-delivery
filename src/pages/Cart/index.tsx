import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from 'phosphor-react'
import { Title } from '../../components/Title'
import { Text } from '../../components/Text'

import cafeImg from '../../assets/cafe-americano.png'

import * as S from './styles'
import { InputNumber } from '../../components/InputNumber'

export function Cart() {
  return (
    <S.Container>
      <S.CompleteOrder>
        <Title variant="xs">Complete seu pedido</Title>
        <S.DeliveryAddress>
          <S.SectionHeader>
            <MapPin size={22} />
            <div>
              <Text variant="md">Endereço de Entrega</Text>
              <Text variant="sm">
                Informe o endereço onde deseja receber seu pedido
              </Text>
            </div>
          </S.SectionHeader>
          <form>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" className="form-control" />
            <S.FormRow>
              <input type="text" placeholder="Número" />
              <input
                type="text"
                placeholder="Complemento"
                className="form-control"
              />
            </S.FormRow>
            <S.FormRow>
              <input type="text" placeholder="Bairro" />
              <input
                type="text"
                placeholder="Cidade"
                className="form-control"
              />
              <input type="text" placeholder="UF" className="uf" />
            </S.FormRow>
          </form>
        </S.DeliveryAddress>
        <S.Payment>
          <S.SectionHeader>
            <CurrencyDollar size={22} />
            <div>
              <Text variant="md">Pagamento</Text>
              <Text variant="sm">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </Text>
            </div>
          </S.SectionHeader>
          <S.PaymentTypes>
            <S.PaymentButton>
              <CreditCard size={16} />
              Cartão de crédito
            </S.PaymentButton>
            <S.PaymentButton>
              <Bank size={16} />
              Cartão de débito
            </S.PaymentButton>
            <S.PaymentButton>
              <Money size={16} />
              Dinheiro
            </S.PaymentButton>
          </S.PaymentTypes>
        </S.Payment>
      </S.CompleteOrder>
      <S.Order>
        <Title variant="xs">Cafés selecionados</Title>
        <S.OrderItems>
          <S.OrderItem>
            <div>
              <img src={cafeImg} alt="" />
              <div>
                <Text>Expresso Tradicional</Text>
                <div>
                  <InputNumber />
                  <S.RemoveButton>
                    <Trash />
                    Remover
                  </S.RemoveButton>
                </div>
              </div>
            </div>
            <Text variant="md" fontWeight="bold">
              R$ 9,90
            </Text>
          </S.OrderItem>
          <S.OrderItem>
            <div>
              <img src={cafeImg} alt="" />
              <div>
                <Text>Expresso Tradicional</Text>
                <div>
                  <InputNumber />
                  <S.RemoveButton>
                    <Trash />
                    Remover
                  </S.RemoveButton>
                </div>
              </div>
            </div>
            <Text variant="md" fontWeight="bold">
              R$ 9,90
            </Text>
          </S.OrderItem>
          <S.Total>
            <div>
              <Text variant="sm">Total de itens</Text>
              <Text variant="md">R$ 29,70</Text>
            </div>
            <div>
              <Text variant="sm">Entrega</Text>
              <Text variant="md">R$ 3,50</Text>
            </div>
            <div>
              <Text variant="lg" fontWeight="bold">
                Total
              </Text>
              <Text variant="lg" fontWeight="bold">
                R$ 33,20
              </Text>
            </div>
          </S.Total>
          <S.ConfirmButton>Confirmar Pedido</S.ConfirmButton>
        </S.OrderItems>
      </S.Order>
    </S.Container>
  )
}
