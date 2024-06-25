import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil',
    system: 'Windows',
    infos: ['R$ 250,00', '-10%'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil',
    system: 'Windows',
    infos: ['R$ 250,00', '-10%'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil',
    system: 'PS5',
    infos: ['R$ 300,00', '-5%'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil',
    system: 'Xbox',
    infos: ['R$ 250,00', '-10%'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment',
    title: 'Diablo IV',
    infos: ['17/05'],
    system: 'Windows',
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Star Wars é um RPG de ação em desenvolvimento pela Blizzard Entertainment',
    title: 'Star Wars',
    infos: ['17/05'],
    system: 'Windows',
    image: starWars
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Zelda é um RPG de ação em desenvolvimento pela Blizzard Entertainment',
    title: 'Zelda',
    infos: ['17/05'],
    system: 'Windows',
    image: zelda
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment',
    title: 'Diablo IV',
    infos: ['17/05'],
    system: 'Windows',
    image: diablo
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
