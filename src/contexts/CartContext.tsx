import { PropsWithChildren, createContext, useState } from 'react'
import { Product, UpdateProductQuantityData } from './ProductsContext'

export type PaymentType = 'credit-card' | 'debit-card' | 'money'

type DeliveryAddress = {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
}

type CartContextData = {
  cartProducts: Product[]
  paymentType: PaymentType
  totalProducts: number
  totalProductsQuantity: number
  deliveryFee: number
  deliveryAddress: DeliveryAddress
  addProductToCart: (product: Product) => void
  updateCartProductQuantity: (data: UpdateProductQuantityData) => void
  removeProductFromCart: (productId: number) => void
  updatePaymentType: (paymentType: PaymentType) => void
  updateDeliveryAddress: (deliveryAddress: DeliveryAddress) => void
  resetCartProducts: () => void
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: PropsWithChildren) {
  const [paymentType, setPaymentType] = useState<PaymentType>('credit-card')
  const [cartProducts, setCartProducts] = useState<Product[]>([])
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddress>(
    {} as DeliveryAddress,
  )

  const totalProducts = cartProducts.reduce((total, product) => {
    return total + product.quantity * product.price
  }, 0)

  const totalProductsQuantity = cartProducts.reduce((total, product) => {
    return total + product.quantity
  }, 0)

  const deliveryFee = 5

  function addProductToCart(product: Product) {
    setCartProducts((state) => [...state, product])
  }

  function updateCartProductQuantity(data: UpdateProductQuantityData) {
    setCartProducts((state) =>
      state.map((product) => {
        if (product.id === data.productId) {
          return {
            ...product,
            quantity: data.quantity > 0 ? data.quantity : 1,
          }
        }

        return product
      }),
    )
  }

  function removeProductFromCart(productId: number) {
    setCartProducts((state) => [
      ...state.filter((product) => product.id !== productId),
    ])
  }

  function updatePaymentType(paymentType: PaymentType) {
    setPaymentType(paymentType)
  }

  function updateDeliveryAddress(deliveryAddress: DeliveryAddress) {
    setDeliveryAddress({ ...deliveryAddress })
  }

  function resetCartProducts() {
    setCartProducts([])
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        totalProducts,
        totalProductsQuantity,
        deliveryFee,
        deliveryAddress,
        paymentType,
        addProductToCart,
        updateCartProductQuantity,
        removeProductFromCart,
        updatePaymentType,
        updateDeliveryAddress,
        resetCartProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
