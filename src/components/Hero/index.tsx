import Tag from '../Tag'
import { Banner, InfoBox } from './styles'
import Button from '../Button'
import { Game } from '../../pages/Home'
import { formataPreco } from '../ProductsList'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
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
          {game.prices.current && <>Por {formataPreco(game.prices.current)}</>}
        </p>
        {game.prices.current && (
          <Button variant="primary" type="button" title="Adicionar ao carrinho">
            Adicionar ao carrinho
          </Button>
        )}
      </InfoBox>
    </div>
  </Banner>
)

export default Hero
