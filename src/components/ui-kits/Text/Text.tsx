import React from 'react'
import { StyledText } from './Text.styled'

interface TextProps {
  color?: 'danger' | 'default' | 'primary' | 'dark' | 'link'
  size?: 'small' | 'big' | 'normal'
  bold?: boolean
  children?: any
  block?: boolean
  linethrough?: boolean
  margin?: string
  dangerouslySetInnerHTML?: { __html: any }
}

const Text: React.FC<TextProps> = ({ children, ...others }) => {
  return <StyledText {...others}>{children}</StyledText>
}

export default Text
