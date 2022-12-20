import React from 'react'
import styled from 'styled-components'

import { TVProductsList } from '../../../constants'
import Product from './Product'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5em;
    width: 100%;
    padding: 2% 4%;
    @media (max-width: 998px) {
        gap: 1.3em;
      }
`

const ProductsList = () => {
  return (
    <Container>
        {
            TVProductsList ? TVProductsList.map(tvProduct => {
                return <Product key={tvProduct.model} item={tvProduct}/>
            })              : ''
        }
    </Container>
  )
}

export default ProductsList