import { React, useContext } from 'react'
import { Badge } from '@mui/material';
import { ECommShopContext } from '../../../Contexts/ECommShopContext'

import styled from 'styled-components'

// import ECommPopup from './ECommPopup/ECommPopup'

import companyLogo from '../Media/ecomm_company_logo.webp';
import searchIcon from '../../../Media/icons8-search-50.png';
import shopCart from '../Media/icons8-basket-64.png';

import Categories from './Categories';

const Container = styled.section`
    width: 100%;
    height: 4.5em;
    background: #E3E4E6;
    position: sticky;
    top: 4em;
`
    
const Wrapper = styled.div`
    padding: 2%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.a`
    flex: 1;
    display: flex;
    align-items: center;
    color: #2E424E;
    transition: .3s;
    &:hover {
        leter-spacing: 1px;
        color: teal;
    }
`
const Logo = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
`
const CompanyName = styled.h1`
    font-weight: bold;
    margin-left: 1em;
    font-size: calc(16px + 0.390625vw);
`


const Center = styled.div`
    flex: 1.7;
    gap: 0.2em;
    display: flex;
    align-items: center;
    justify-content: center;
`
const SearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    width: 80%;
    padding: 0.5em;
    border-radius: 20px;
`

const Right = styled.div`
    flex: 0.3;
    width: 90%;
    max-width: calc(100% - 1em);
    display: flex;
    align-items: center;
    justify-content: center;
`

const Header = () => {
    const { cartItems, setSearchQuery } = useContext(ECommShopContext)
    const items = Object.values(cartItems).reduce((a,b) => a + b)

  return (
      <Container>
        <Wrapper>
            {/* <ECommPopup trigger = {cartPopupButton}
            time={30000}
            setPopup={setCartPopupButton}
            popupText={'cart'}
            /> */}
            <Left href='/projects/e_commerce_store'>
                <Logo>
                    <img src={companyLogo} alt='company logo...' height={55} width={55} style={{borderRadius:'50%'}}/>
                    <CompanyName>E-Comm Company</CompanyName>
                </Logo>
            </Left>
            <Center>
                <SearchContainer>
                    <input type='search' placeholder='Search products...'
                        className='e-comm-search-input'
                        onChange={e => setSearchQuery(e.target.value.toLowerCase())}
                    />
                    <img src={searchIcon} alt='search icon...' height={25}/>
                </SearchContainer>
            </Center>
            <Right onClick={() => console.log('tare')}>
                <Badge badgeContent = {items} color = {items > 0 ? 'secondary' : 'primary'} style={{zIndex: '0', cursor: 'pointer'}}>
                    <img src={shopCart} alt='shopCart icon...' height={25}/>
                </Badge>
            </Right>
        </Wrapper>
        <Categories/>
    </Container>
  )
}

export default Header