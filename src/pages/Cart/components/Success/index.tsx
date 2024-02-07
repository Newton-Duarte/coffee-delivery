import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Text } from '../../../../components/Text'
import { Title } from '../../../../components/Title'

import successImg from '../../../../assets/success.svg'

import * as S from './styles'
import { useCart } from '../../../../hooks/useCart'
import { parsePaymentType } from '../../../../utils/payment'

export function Success() {
  const { paymentType } = useCart()

  return (
    <S.Container>
      <Title>Uhu! Pedido confirmado</Title>
      <Text variant="lg">
        Agora é só aguardar que logo o café chegará até você
      </Text>
      <S.Grid>
        <S.OrderInfoWrapper>
          <S.OrderInfo>
            <div>
              <div>
                <MapPin size={16} weight="fill" />
              </div>
              <div>
                <Text variant="md">
                  Entrega em Rua João Daniel Martinelli, 102 <br /> Centro -
                  Maceió, AL
                </Text>
              </div>
            </div>
            <div>
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <div>
                <Text variant="md">
                  Previsão de entrega <br /> 20 min - 30 min
                </Text>
              </div>
            </div>
            <div>
              <div>
                <CurrencyDollar size={16} weight="fill" />
              </div>
              <div>
                <Text variant="md">
                  Pagamento na entrega <br /> {parsePaymentType(paymentType)}
                </Text>
              </div>
            </div>
          </S.OrderInfo>
        </S.OrderInfoWrapper>
        <img src={successImg} alt="" />
      </S.Grid>
    </S.Container>
  )
}
