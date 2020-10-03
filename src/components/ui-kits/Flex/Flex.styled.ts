import styled, { css } from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}

  ${(props) =>
    props.align === 'center' &&
    css`
      align-items: center;
    `}
  ${(props) =>
    props.align === 'start' &&
    css`
      align-items: flex-start;
    `}
  ${(props) =>
    props.align === 'end' &&
    css`
      align-items: flex-end;
    `}

  ${(props) =>
    props.justify === 'center' &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.justify === 'start' &&
    css`
      justify-content: flex-start;
    `}
  ${(props) =>
    props.justify === 'end' &&
    css`
      align-content: flex-end;
    `}
`

export default StyledFlex
