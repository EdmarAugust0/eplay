import { useState } from 'react'

import { GalleryItem } from '../../pages/Home'

import * as S from './styles'

import zoom from '../../assets/images/mais-zoom 1.svg'
import play from '../../assets/images/botao-play 1.svg'
import close from '../../assets/images/close.svg'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <S.Items>
        {items.map((media, index) => (
          <S.Item
            key={media.url}
            onClick={() => {
              setModal({
                isVisible: true,
                type: media.type,
                url: media.url
              })
            }}
          >
            <img
              src={getMediaCover(media)}
              alt={`Midia ${index + 1} de ${name}`}
            />
            <S.Action>
              <img
                src={getMediaIcon(media)}
                alt="Clique para maximizar a mídia"
              />
            </S.Action>
          </S.Item>
        ))}
      </S.Items>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Clique para fechar" onClick={closeModal} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}

export default Gallery
