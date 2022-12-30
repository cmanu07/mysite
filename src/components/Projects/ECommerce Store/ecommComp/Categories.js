import { React, useContext } from 'react'
import styled from 'styled-components'
import { categories } from '../../../constants'
import { ECommShopContext } from '../../../Contexts/ECommShopContext'

import CategoryItem from './CategoryItem'

const Container = styled.div`
    display: flex;
    background: #E3E4E6;
    padding: 1.5em;
    gap: 2%;
    width: 100%;
    height: 1.8em;
    align-items: center;
    box-shadow: 0px 20px 15px -10px #E3E4E6;
    @media (max-width: 998px) {
        min-width: calc(100% - 0.1em);
      }
`

const Categories = () => {

  const { activeCategoryPage, setActiveCategoryPage } = useContext(ECommShopContext)

  const handleActiveCategory = (categIg) => {
    setActiveCategoryPage(categIg)
  }

  return (
    <Container>
        {
            categories ? categories.map(item => {
                return <CategoryItem key={item.title}
                              item={item}
                              disable={activeCategoryPage}
                              onChange={handleActiveCategory}
                      />
            })          : ''
        }
    </Container>
  )
}

export default Categories