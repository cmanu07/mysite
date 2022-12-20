import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 12em;
    background-color: teal;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.p`
    color: #FFFFFF;
    font-size: 2em;
    font-weight: 500;
    margin-bottom: 0.6em;
`
const Descrip = styled.div`
    color: #FFFFFF;
`
const InputContainer = styled.div`
    width: 50%;
    height: 2em;
    margin-top: 2em;
    @media (max-width: 768px) {
      width: calc(100% - 10%);
    }
    display: flex;
    align-items: center;
`
const Input = styled.input`
    background: transparent;
    width: 85%;
    height: 100%;
    color: #FFFFFF;
    border: none;
    border-bottom: 1px solid #FFFFFF;
    padding-bottom: 0.3em;
    &::placeholder {
      color: #FFFFFF;
      padding-left: 3em
    }
    &:focus {
      outline: none;
      color: #FFFFFF;
    }
`
const Button = styled.button`
    width: 15%;
    height: 100%;
    border: none;
    border-top: 1px solid #FFFFFF;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    transition: .4s ease;
    &:hover {
      cursor: pointer;
      color: teal;
      background: #FFFFFF;
    }
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Descrip>Get timely updates for your favorite products.</Descrip>
        <InputContainer>
            <Input placeholder='Your email' type='email'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter