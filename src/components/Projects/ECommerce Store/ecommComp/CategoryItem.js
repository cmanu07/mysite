import { React } from 'react'
import styled from 'styled-components'

// import { ListOfProducts, categories } from '../../../constants'

// import { ECommShopContext } from '../../../Contexts/ECommShopContext'

const Container = styled.button`
    border: none;
    background: transparent;
    border-bottom: 1px solid #8957FF;
    border-right: 1px solid #8957FF;
    box-shadow: ${props => props.activePage === 'active' ? 'inset 3px 3px 30px #8957FF' : 'none'};
    border-radius: 0 0 20px 0;
    padding-buttom: 1.5%;
    width: 12em;
    height: 2.6em;
    text-align: center;
    transition: 0.4s ease;
    &:hover {
        cursor: pointer;
        background-color: #8957FF;
        color: #FFFFFF;
    }
`

const CategoryItem = ({item, disable, onChange}) => {

  // const { filterCategory } = useContext(ECommShopContext)
  const handleClick = (keyId) => {
    onChange(keyId)
  }

  return (
    <Container activePage={disable === item.id ? 'active' : ''} 
              onClick={() => handleClick(item.id)}>
        {item.title}
    </Container>
  )
}

export default CategoryItem