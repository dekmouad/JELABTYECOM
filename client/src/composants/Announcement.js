import React from 'react'
import styled from 'styled-components'
import mobile from '../responsive'

const Container = styled.div`
    background-color: darkred;
    color: white;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight:500;
    font-family: cursive;
    letter-spacing: 2px;
    ${mobile({ fontSize: "9px", fontWeight:"200", height: "20px" })}
`


function Announcement() {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over $50!!  
    </Container>
  )
}

export default Announcement