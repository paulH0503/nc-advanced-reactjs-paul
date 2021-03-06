import { gql } from 'apollo-boost'

export const GET_PRODUCTS = gql`
  query getAllProduct($input: GetAllProductInput!) {
    getAllProduct(input: $input) {
      data {
        id
        sku
        name
        price
        finalPrice
        promotionPercent
        namePath
        image
        imgUrl
      }
    }
  }
`

export const GET_PRODUCTS_DETAIL = gql`
  query getProductDetail($input: GetProductDetailInput!) {
    getProductDetail(input: $input) {
      id
      name
      sku
      price
      finalPrice
      promotionPercent
      description
      namePath
      imgUrl
      imgUrlMob
      image
      images
    }
  }
`
