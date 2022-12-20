import { React } from 'react'
import { Badge } from '@mui/material';

import styled from 'styled-components'

import companyLogo from '../Media/ecomm_company_logo.webp';
import searchIcon from '../../../Media/icons8-search-50.png';
import shopCart from '../Media/icons8-basket-64.png';

const Container = styled.section`
    width: 100%;
    height: 4.5em;
`
    
const Wrapper = styled.div`
    padding: 2%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
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
    // const [query, setQuery] = useState('')

  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>
                    <img src={companyLogo} alt='company logo...' height={55} width={55} style={{borderRadius:'50%'}}/>
                    <CompanyName>E-Comm Company</CompanyName>
                </Logo>
            </Left>
            <Center>
                <SearchContainer>
                    <input type='search' placeholder='Search products...'
                        className='e-comm-search-input'
                        // onChange={e => setQuery(e.target.value.toLowerCase())}
                    />
                    <img src={searchIcon} alt='search icon...' height={25}/>
                </SearchContainer>
            </Center>
            <Right>
                <Badge badgeContent={4} color = 'secondary' style={{zIndex: '0', cursor: 'pointer'}}>
                    <img src={shopCart} alt='shopCart icon...' height={25}/>
                </Badge>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Header