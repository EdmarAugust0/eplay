import { useGetFeatureGameQuery } from '../../services/api'
import { formataPreco } from '../../utils'

import Button from '../Button'
import Loader from '../Loader'
import Tag from '../Tag'

import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeatureGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Titulo>{game.name}</S.Titulo>
          <S.Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </S.Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar a promo"
        >
          Aproveitar
        </Button>
      </div>
    </S.Imagem>
  )
}

export default Banner
