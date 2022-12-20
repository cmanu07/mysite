import React from 'react'
import styled from 'styled-components'
import { categories } from '../../../constants'
import CategoryItem from './CategoryItem'

const Container = styled.div`
    display: flex;
    padding: 1.5em;
    width: 50%;
    justify-content: space-around;
    @media (max-width: 998px) {
        min-width: calc(100% - 0.1em);
      }
`

const Categories = () => {
  return (
    <Container>
        {
            categories ? categories.map(item => {
                return <CategoryItem key={item.title} item={item}/>
            })          : ''
        }
    </Container>
  )
}

export default Categories