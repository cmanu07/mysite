import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border-bottom: 1px solid #8957FF;
    border-right: 1px solid #8957FF;
    border-radius: 0 0 20px 0;
    padding: 1% 5%;
    width: 10em;
    text-align: center;
    transition: 0.4s ease;
    &:hover {
        cursor: pointer;
        background-color: #8957FF;
        color: #FFFFFF;
    }
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        {item.title}
    </Container>
  )
}

export default CategoryItem