import { useGetFeatureGameQuery } from '../../services/api'
import { formataPreco } from '../ProductsList'

import Button from '../Button'
import Tag from '../Tag'

import { Imagem, Precos, Titulo } from './styles'

const Banner = () => {
  const { data: game } = useGetFeatureGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <s>{formataPreco(game.prices.old)}</s> <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar a promo"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
