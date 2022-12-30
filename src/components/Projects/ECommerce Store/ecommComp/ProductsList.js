import { React, useContext} from 'react'
import styled from 'styled-components'

import { ListOfProducts} from '../../../constants'
import { ECommShopContext } from '../../../Contexts/ECommShopContext'

import Product from './Product'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5em;
    width: 100%;
    padding: 4%;
    @media (max-width: 998px) {
        gap: 0.8em;
      }
`

const ProductsList = () => {
  const { searchQuery } = useContext(ECommShopContext)

  return (
    <Container>
        {
            ListOfProducts ? ListOfProducts.filter(
              product => product.brand.toLowerCase().includes(searchQuery) ||
                        product.model.toLowerCase().includes(searchQuery)  ||
                        product.category.toLowerCase().includes(searchQuery)
            )
            .map(product => {
                return <Product key={product.model} item={product}/>
            })              : <h5>There are no such products...:</h5>
        }
    </Container>
  )
}

export default ProductsList