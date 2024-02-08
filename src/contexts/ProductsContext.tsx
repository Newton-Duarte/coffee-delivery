import { PropsWithChildren, createContext, useState } from 'react'
import { coffees } from '../data/products'

export type Product = {
  id: number
  name: string
  description: string
  categories: string[]
  price: number
  image_url: string
  quantity: number
}

export type UpdateProductQuantityData = {
  productId: number
  quantity: number
}

type ProductsContextData = {
  products: Product[]
  updateProductQuantity: (data: UpdateProductQuantityData) => void
}

export const ProductsContext = createContext({} as ProductsContextData)

export function ProductsContextProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<Product[]>(coffees)

  function updateProductQuantity(data: UpdateProductQuantityData) {
    setProducts((state) =>
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

  return (
    <ProductsContext.Provider value={{ products, updateProductQuantity }}>
      {children}
    </ProductsContext.Provider>
  )
}
