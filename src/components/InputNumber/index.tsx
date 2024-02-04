import { Minus, Plus } from 'phosphor-react'
import * as S from './styles'

export function InputNumber() {
  return (
    <S.Container>
      <S.Button>
        <Minus size={14} />
      </S.Button>
      <S.Input />
      <S.Button>
        <Plus size={14} />
      </S.Button>
    </S.Container>
  )
}
