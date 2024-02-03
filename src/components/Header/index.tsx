import { MapPin } from 'phosphor-react'
import { CartButton } from '../CartButton'
import logoSvg from '../../assets/coffee-delivery-logo.svg'

import * as S from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <S.Container>
      <NavLink to="/">
        <img src={logoSvg} alt="" />
      </NavLink>

      <S.Actions>
        <S.CityButton>
          <MapPin size={22} weight="fill" />
          Maceió, AL
        </S.CityButton>
        <NavLink to="/cart">
          <CartButton />
        </NavLink>
      </S.Actions>
    </S.Container>
  )
}
