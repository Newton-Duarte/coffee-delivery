import { Minus, Plus } from 'phosphor-react'
import * as S from './styles'

type InputNumberProps = {
  onMinusClick: () => void
  onPlusClick: () => void
  value: number
}

export function InputNumber({
  onMinusClick,
  onPlusClick,
  value,
}: InputNumberProps) {
  return (
    <S.Container>
      <S.Button type="button" onClick={onMinusClick}>
        <Minus size={14} />
      </S.Button>
      <S.Input value={value} />
      <S.Button type="button" onClick={onPlusClick}>
        <Plus size={14} />
      </S.Button>
    </S.Container>
  )
}
