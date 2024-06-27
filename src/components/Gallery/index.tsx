import zelda from '../../assets/images/banner-homem-aranha.png'
import { Item, Items } from './styles'

const Gallery = () => {
  return (
    <Items>
      <Item>
        <img src={zelda} alt="imagem link" />
      </Item>
      <Item>
        <img src={zelda} alt="imagem link" />
      </Item>
      <Item>
        <img src={zelda} alt="imagem link" />
      </Item>
      <Item>
        <img src={zelda} alt="imagem link" />
      </Item>
    </Items>
  )
}

export default Gallery
