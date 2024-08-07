import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import { formataPreco, getTotalPrice } from '../../utils'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    if (items.length === 0) {
      dispatch(close())
      alert('Nenhum item no carrinho')
    } else {
      navigate('/checkout')
      dispatch(close())
    }
  }

  return (
    <S.CartContainer className={isOpen ? 'isOpen' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formataPreco(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          Total de {formataPreco(getTotalPrice(items))}{' '}
          <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button
          title="Clique para seguir com a compra"
          type="button"
          onClick={goToCheckout}
        >
          Continuar com a compra
        </Button>
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
