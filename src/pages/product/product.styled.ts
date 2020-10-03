import styled, { css } from 'styled-components'
import { MANIFIER, ECOLORS } from './type'

const Thumbnail = styled.img`
  color: #fff;
  width: 100%;
  text-align: center;
  border-color: #a2a6ac;
  ${(props) =>
    props.active &&
    props.activeColor &&
    css`
      box-shadow: 0 0 3px 2px ${props.activeColor};
      border-radius: 5px;
    `}
  ${(props) =>
    props.activeColor &&
    css`
      &:hover {
        box-shadow: 0 0 3px 2px ${props.activeColor};
        border-radius: 5px;
      }
    `}
  ${(props) =>
    props.maxWidth &&
    css`
      max-width: ${props.maxWidth}px;
    `}
  margin: 5px 0;
`

export const PriceProduct = styled.p`
  margin: 0px;
  padding: 8px 0px 0px;
  align-self: stretch;
  color: rgb(36, 36, 36);
  font-size: 16px;
  line-height: 1.6;
  display: inline-block;
  .highlight {
    color: #b12704;
  }
  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
  ${(props) =>
    props.original &&
    css`
      margin-left: 0px;
      color: rgb(120, 120, 120);
      font-size: 13px;
      font-weight: 300;
      text-decoration: line-through;
      display: inline-block;
      margin-left: 8px;
    `}
`

export const Name = styled.h1`
  color: #000;
`

export const Note = styled.h3`
  color: #565959;
  font-size: 14px;
  font-weight: normal;
  ${(props) =>
    props.highlight &&
    css`
      color: #0066c0;
    `}
`

export const ManifierLens = styled.div`
  position: absolute;
  background-image: url(https://images-na.ssl-images-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif);
  cursor: pointer;
  width: ${MANIFIER.WIDTH}px;
  height: ${MANIFIER.HEIGHT}px;
  left: 0;
  top: 0;
`

export default Thumbnail
