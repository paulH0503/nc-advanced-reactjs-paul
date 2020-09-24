import React from 'react'
import { Carousel } from 'antd'

function NCSlider({ children, style }: { children: React.ReactNode; style: any }) {
  return <Carousel style={style}>{children}</Carousel>
}

export default NCSlider
