import { PaymentType } from '../contexts/CartContext'

export function parsePaymentType(paymentType: PaymentType) {
  switch (paymentType) {
    case 'credit-card':
      return 'Cartão de crédito'
    case 'debit-card':
      return 'Cartão de débito'
    default:
      return 'Dinheiro'
  }
}
