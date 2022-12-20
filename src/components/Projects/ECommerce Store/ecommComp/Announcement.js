import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    height: 2em;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .85em;
`

const Announcement = () => {
  return (
    <Container>SUPER DEAL! * Free shipping on orders over 50 Euros!</Container>
  )
}

export default Announcement