import { useDispatch } from 'react-redux'

import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'
import { formataPreco } from '../../utils'
import { add, open } from '../../store/reducers/cart'

import { Banner, InfoBox } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <InfoBox>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <p>
                De <s>{formataPreco(game.prices.old)}</s> <br />
              </p>
            )}
            {game.prices.current && (
              <>Por {formataPreco(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              variant="primary"
              type="button"
              title="Adicionar ao carrinho"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </InfoBox>
      </div>
    </Banner>
  )
}

export default Hero
