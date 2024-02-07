import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { Router } from './Router'
import { CartContextProvider } from './contexts/CartContext'
import { ProductsContextProvider } from './contexts/ProductsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProductsContextProvider>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </ProductsContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}
