import styled, { css } from 'styled-components'

const ImgProduct = styled.img`
  color: #fff;
  width: 100%;
  text-align: center;
`
export const PriceProduct = styled.p`
  margin: 0px;
  padding: 8px 0px 0px;
  align-self: stretch;
  color: rgb(36, 36, 36);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  display: inline-block;
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

export default ImgProduct
