import Tag from '../Tag'
import { Banner, InfoBox } from './styles'

import bannerImg from '../../assets/images/fundoHogwarts.svg'
import Button from '../Button'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <InfoBox>
        <h2>Hogwarts Legacy</h2>
        <p>
          De <s>R$ 290,90</s> <br />
          Por R$ 190,90
        </p>
        <Button variant="primary" type="button" title="Adicionar ao carrinho">
          Adicionar ao carrinho
        </Button>
      </InfoBox>
    </div>
  </Banner>
)

export default Hero
