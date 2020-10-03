import styled, { css } from 'styled-components'
import { ECOLORS } from '../../../pages/product/type'

export const StyledText = styled.span`
  ${(props) =>
    css`
      color: ${props.color === 'danger'
        ? ECOLORS.DANGER
        : props.color === 'default'
        ? ECOLORS.DEFAULT
        : props.color === 'primary'
        ? ECOLORS.PRIMARY
        : props.color === 'dark'
        ? ECOLORS.DARK
        : props.color === 'link'
        ? ECOLORS.LINK
        : ECOLORS.DEFAULT};
    `}

  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
  ${(props) =>
    css`
      font-size: ${props.size === 'small'
        ? '14px'
        : props.size === 'big'
        ? '28px'
        : props.size === 'normal'
        ? '16px'
        : '16px'};
    `}
  ${(props) =>
    props.block &&
    css`
      display: block;
    `}
  
  ${(props) =>
    props.linethrough &&
    css`
      text-decoration: line-through;
    `}

  ${(props) =>
    css`
      margin: ${props.margin || 0};
    `}
`
