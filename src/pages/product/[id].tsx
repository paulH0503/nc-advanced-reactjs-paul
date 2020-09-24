import React from 'react'
import Head from 'next/head'
import { Layout } from '../../components/Layout'
import { Html, Main } from 'next/document'
import { useRouter } from 'next/router'
import withApollo from '../../utils/withApollo'
import { useQuery } from '@apollo/react-hooks'
import { GET_PRODUCTS, GET_PRODUCTS_DETAIL } from '../../graphql/product/product.query'
import { GetStaticProps } from 'next'
import { Button, Card } from 'antd'
import NCSlider from './slides'
import { ImgProduct, PriceProduct } from './slides.styled'

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
  console.log(error, loading, data)
  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading...</h1>

  const products = data?.getProductDetail
  if (!(products && products.id)) {
    return <p>Not found</p>
  }

  console.log(products)

  return (
    <section>
      <header>
        <title>Product detail</title>
        <link rel="icon" href="/favicon.ico" />
      </header>
      <main>
        <NCSlider
          style={{
            margin: '0 20px',
            width: '200px',
            padding: '5px 5px 50px 5px',
            minHeight: '200px',
            background: '#c9c9c9',
          }}
        >
          {products.images &&
            products.images.map((img: string, i: number) => (
              <div key={i}>
                <ImgProduct src={`https://media3.scdn.vn/${img}`} />
                <p>{products.name}</p>
                <PriceProduct>{products.finalPrice}</PriceProduct>
                <PriceProduct original>{products.price}</PriceProduct>
              </div>
            ))}
        </NCSlider>
      </main>
    </section>
  )
}

export default withApollo({ ssr: true })(ProductDetail)
