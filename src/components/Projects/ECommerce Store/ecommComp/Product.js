import { ShoppingCartOutlined } from '@mui/icons-material'
import { React, useContext } from 'react'
import styled from 'styled-components'
import { ECommShopContext } from '../../../Contexts/ECommShopContext'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 13em;
    height: 20em;
    margin: 0 1.6%;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.4);
    @media (max-width: 998px) {
        max-width: calc(50% - 3%);
        margin: 0;
      }
`

const Product = ({item}) => {
  const { addToCart, cartItems } = useContext(ECommShopContext)
  const itemsNr = cartItems[item.id]

  return (
    <Container>
        <img src={item.img} alt='product figure...' className='e-comm-product-image'/>
        <h6 className='e-comm-product-title'>{item.brand} {item.model}</h6>
        <p className='e-comm-product-description'>{item.description}</p>
        <p className='e-comm-product-price'>{item.price} EUR</p>
        <div className='e-comm-product-buy-button'>
          <button><a href='/projects/e_commerce_store/product_page'>BUY NOW</a></button>
          <span onClick={() => addToCart(item.id)}><ShoppingCartOutlined/>{itemsNr > 0 ? <>({itemsNr})</> : ''}</span>
        </div>
    </Container>
  )
}

export default Product