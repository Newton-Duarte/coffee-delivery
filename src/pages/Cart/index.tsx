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
import * as zod from 'zod'
import * as S from './styles'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const cartFormSchema = zod.object({
  cep: zod.string().min(8, 'CEP Inválido'),
  rua: zod.string().min(1, 'Campo obrigatório'),
  numero: zod.string().min(1, 'Campo obrigatório'),
  complemento: zod.string(),
  bairro: zod.string().min(1, 'Campo obrigatório'),
  cidade: zod.string().min(1, 'Campo obrigatório'),
  uf: zod.string().min(1, 'Campo obrigatório'),
  pagamento: zod.enum(['credit-card', 'debit-card', 'money']),
})

type CartFormData = zod.infer<typeof cartFormSchema>

export function Cart() {
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CartFormData>({
    resolver: zodResolver(cartFormSchema),
  })

  const {
    totalProducts,
    deliveryFee,
    cartProducts,
    updateCartProductQuantity,
    removeProductFromCart,
  } = useCart()

  const createOrder = (data: CartFormData) => {
    setIsSuccess(true)
  }

  return isSuccess ? (
    <Success />
  ) : (
    <S.Container onSubmit={handleSubmit(createOrder)}>
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
          <section>
            <input
              type="text"
              placeholder="CEP"
              required
              {...register('cep')}
            />
            {!!errors.cep && (
              <S.FormHelperText>{errors.cep.message}</S.FormHelperText>
            )}
            <input
              type="text"
              placeholder="Rua"
              className="form-control"
              required
              {...register('rua')}
            />
            <S.FormRow>
              <input
                type="text"
                placeholder="Número"
                required
                {...register('numero')}
              />
              <input
                type="text"
                placeholder="Complemento"
                className="form-control"
                {...register('complemento')}
              />
            </S.FormRow>
            <S.FormRow>
              <input
                type="text"
                placeholder="Bairro"
                required
                {...register('bairro')}
              />
              <input
                type="text"
                placeholder="Cidade"
                className="form-control"
                required
                {...register('cidade')}
              />
              <input
                type="text"
                placeholder="UF"
                className="uf"
                required
                {...register('uf')}
              />
            </S.FormRow>
          </section>
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
          <Controller
            control={control}
            name="pagamento"
            render={({ field }) => (
              <S.PaymentTypes
                value={field.value}
                onValueChange={field.onChange}
              >
                <S.PaymentButton value="credit-card">
                  <CreditCard size={16} />
                  Cartão de crédito
                </S.PaymentButton>
                <S.PaymentButton value="debit-card">
                  <Bank size={16} />
                  Cartão de débito
                </S.PaymentButton>
                <S.PaymentButton value="money">
                  <Money size={16} />
                  Dinheiro
                </S.PaymentButton>
              </S.PaymentTypes>
            )}
          />
          {!!errors.pagamento && (
            <S.FormHelperText>Informe o tipo de pagamento</S.FormHelperText>
          )}
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
              <S.ConfirmButton type="submit" disabled={isSubmitting}>
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
