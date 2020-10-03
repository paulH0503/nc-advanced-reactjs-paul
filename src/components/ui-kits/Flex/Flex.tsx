import React from 'react'
import StyledFlex from './Flex.styled'

interface IFlexProps {
  align?: 'center' | 'start' | 'end'
  justify?: 'center' | 'start' | 'end'
  column?: boolean
  ref?: any
}

const Flex: React.FC<IFlexProps> = ({ children, ...others }) => {
  return <StyledFlex {...others}>{children}</StyledFlex>
}

export default Flex
