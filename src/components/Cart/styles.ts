import styled from 'styled-components'

import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

import fechar from '../../assets/images/close.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.isOpen {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${cores.cinza};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    width: 100%;
  }

  .emptyText {
    font-size: 14px;
    line-height: 22px;
    color: ${cores.branca};
    text-align: center;
  }
`
export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin: 32px 0 16px 0;
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${cores.cinzaClaro};
  }
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${cores.cinzaClaro};
  padding: 8px 0;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    font-weight: bold;
    font-size: 16px;
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  span {
    display: block;
    font-weight: bold;
    font-size: 14px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8px;
    right: 0;
  }
`
