import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import withApollo from '../../utils/withApollo'
import { useQuery } from '@apollo/react-hooks'
import { GET_PRODUCTS_DETAIL } from '../../graphql/product/product.query'
import Thumbnail, { PriceProduct, Name, Note, ManifierLens } from './product.styled'
import { Row, Col } from 'antd'
import { Text } from '../../components/ui-kits/Text'
import { Flex } from '../../components/ui-kits/Flex'
// import { MANIFIER } from './type'

function ProductDetail(props) {
  const router = useRouter()
  const { id } = router.query
  const { loading, error, data } = useQuery(GET_PRODUCTS_DETAIL, {
    variables: {
      input: {
        id: id,
      },
    },
  })

  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading...</h1>

  const products = data?.getProductDetail
  if (!(products && products.id)) {
    return <p>Not found</p>
  }

  const parseInnerHTML = () => {
    return { __html: products.description }
  }
  // const manifier = useRef<any>('')
  const thumbnailRef = useRef<any>('')
  const [preview, setPreview] = useState<number>(0)
  // const [activeManifier, setActiveManifier] = useState<boolean>(false)
  console.log(products, props)

  // useEffect(() => {
  //   if (thumbnailRef.current) {
  //     console.log('>=========', thumbnailRef.current)
  //     thumbnailRef.current.addEventListener('mousemove', function (e) {
  //       try {
  //         e && (manifier.current.style.top = e.offsetY - MANIFIER.HEIGHT / 2 + 'px')
  //         e && (manifier.current.style.left = e.offsetX - MANIFIER.WIDTH / 2 + 'px')
  //       } catch (err) {
  //         console.log(e, err)
  //       }
  //     })
  //     thumbnailRef.current.addEventListener('mouseleave', function (e) {
  //       console.log('mouseleave')
  //     })
  //   }
  // }, [thumbnailRef.current])

  return (
    <section>
      <header>
        <title>Product detail</title>
        <link rel="icon" href="/favicon.ico" />
      </header>
      <main>
        <Row>
          <Col span="3">
            <Flex column align="end">
              {products.images &&
                products.images.map((img: string, i: number) => {
                  return (
                    <Thumbnail
                      onClick={() => setPreview(i)}
                      active={i === preview}
                      activeColor={'rgba(228, 121, 17, 0.5)'}
                      key={img}
                      src={`https://media3.scdn.vn/${img}`}
                      maxWidth={77}
                    />
                  )
                })}
            </Flex>
          </Col>
          <Col offset={1} span="9">
            <Flex justify="center" align="center">
              <Thumbnail
                ref={thumbnailRef}
                src={`https://media3.scdn.vn/${products.images[preview]}`}
              />
              {/* <ManifierLens ref={manifier}></ManifierLens> */}
            </Flex>
          </Col>
          <Col offset={1} span="10">
            {/* Title */}
            <Text size="big" color="dark" bold block>
              {products.name}
            </Text>
            {/* Price */}
            <Text color="dark" bold>
              Price:
            </Text>{' '}
            <Text margin="0 5px" color="danger" bold>
              ${products.finalPrice}
            </Text>
            <Text linethrough size="small">
              ${products.price}
            </Text>
            {/* Note */}
            <Text block size="small">
              No Import Fees Deposit & $3.48 Shipping to Singapore
            </Text>
            <Text color="link" size="small" block>
              Returnable within 30 days of receipt{' '}
            </Text>
          </Col>
        </Row>
        <Row>
          <Col offset={1} span={22}>
            <Text dangerouslySetInnerHTML={parseInnerHTML()}></Text>
          </Col>
        </Row>
      </main>
    </section>
  )
}

export default withApollo({ ssr: true })(ProductDetail)
