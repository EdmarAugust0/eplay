import styled from 'styled-components'

import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 480px;
  padding-top: 16px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${cores.preta};
    width: 100%;
    height: 100%;
    content: '';
    opacity: 0.56;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    font-weight: bold;

    h2 {
      font-size: 32px;
    }

    p {
      margin: 16px 0px;
    }
  }
`

export const InfoBox = styled.div`
  padding: 16px;
  background-color: ${cores.preta};
  max-width: 290px;
`
