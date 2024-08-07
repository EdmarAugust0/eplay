import Tag from '../Tag'
import { Card, Descricao, TagsEncima, Titulo } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  category,
  description,
  image,
  infos,
  system,
  title,
  id
}: Props) => {
  const getDescricao = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 92) + '...'
    }
    return text
  }

  return (
    <Card
      title={`Clique aqui para ver mais detalhes sobre o ${title}`}
      to={`/product/${id}`}
    >
      <img src={image} alt={title} />
      <TagsEncima>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </TagsEncima>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{getDescricao(description)}</Descricao>
    </Card>
  )
}

export default Product
