import { React, useContext} from 'react'
import styled from 'styled-components'

import { TVProductsList } from '../../../constants'
import { ECommShopContext } from '../../../Contexts/ECommShopContext'

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
  const { searchQuery } = useContext(ECommShopContext)

  return (
    <Container>
        {
            TVProductsList ? TVProductsList.filter(
              tvProduct => tvProduct.brand.toLowerCase().includes(searchQuery) ||
                            tvProduct.model.toLowerCase().includes(searchQuery)
            )
            .map(tvProduct => {
                return <Product key={tvProduct.model} item={tvProduct}/>
            })              : ''
        }
    </Container>
  )
}

export default ProductsList