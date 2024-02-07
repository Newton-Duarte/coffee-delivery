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

import { Success } from './components/Success'
import { InputNumber } from '../../components/InputNumber'
import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { priceFormatter } from '../../utils/formatter'
import * as S from './styles'

export function Cart() {
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    paymentType,
    totalProducts,
    deliveryFee,
    updatePaymentType,
    cartProducts,
    updateCartProductQuantity,
    removeProductFromCart,
  } = useCart()

  return isSuccess ? (
    <Success />
  ) : (
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
            <S.PaymentButton
              type="button"
              onClick={() => updatePaymentType('credit-card')}
              className={paymentType === 'credit-card' ? 'active' : ''}
            >
              <CreditCard size={16} />
              Cartão de crédito
            </S.PaymentButton>
            <S.PaymentButton
              type="button"
              onClick={() => updatePaymentType('debit-card')}
              className={paymentType === 'debit-card' ? 'active' : ''}
            >
              <Bank size={16} />
              Cartão de débito
            </S.PaymentButton>
            <S.PaymentButton
              type="button"
              onClick={() => updatePaymentType('money')}
              className={paymentType === 'money' ? 'active' : ''}
            >
              <Money size={16} />
              Dinheiro
            </S.PaymentButton>
          </S.PaymentTypes>
        </S.Payment>
      </S.CompleteOrder>
      <S.Order>
        <Title variant="xs">Cafés selecionados</Title>
        <S.OrderItems>
          {cartProducts?.length ? (
            <>
              {cartProducts.map((product) => (
                <S.OrderItem key={product.id}>
                  <div>
                    <img src={product.image_url} alt={product.name} />
                    <div>
                      <Text>{product.name}</Text>
                      <div>
                        <InputNumber
                          value={product.quantity}
                          onMinusClick={() =>
                            updateCartProductQuantity({
                              productId: product.id,
                              quantity: product.quantity - 1,
                            })
                          }
                          onPlusClick={() =>
                            updateCartProductQuantity({
                              productId: product.id,
                              quantity: product.quantity + 1,
                            })
                          }
                        />
                        <S.RemoveButton
                          type="button"
                          onClick={() => removeProductFromCart(product.id)}
                        >
                          <Trash />
                          Remover
                        </S.RemoveButton>
                      </div>
                    </div>
                  </div>
                  <Text variant="md" fontWeight="bold">
                    {priceFormatter.format(product.quantity * product.price)}
                  </Text>
                </S.OrderItem>
              ))}
              <S.Total>
                <div>
                  <Text variant="sm">Total de itens</Text>
                  <Text variant="md">
                    {priceFormatter.format(totalProducts)}
                  </Text>
                </div>
                <div>
                  <Text variant="sm">Entrega</Text>
                  <Text variant="md">{priceFormatter.format(deliveryFee)}</Text>
                </div>
                <div>
                  <Text variant="lg" fontWeight="bold">
                    Total
                  </Text>
                  <Text variant="lg" fontWeight="bold">
                    {priceFormatter.format(totalProducts + deliveryFee)}
                  </Text>
                </div>
              </S.Total>
              <S.ConfirmButton type="button" onClick={() => setIsSuccess(true)}>
                Confirmar Pedido
              </S.ConfirmButton>
            </>
          ) : (
            <Text variant="lg" fontWeight="bold">
              Seu carrinho está vazio...
            </Text>
          )}
        </S.OrderItems>
      </S.Order>
    </S.Container>
  )
}
