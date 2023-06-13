import React from 'react'
import styled from 'styled-components'
import mobile from '../responsive';
import { Link } from "react-router-dom";

// Styled component for the container
const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 70vh;
    position: relative;
`
// Styled component for the image
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height:"60vh"})}
`
// Styled component for the info section
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
// Styled component for the title
const Title = styled.h2`
    color: black;
    font-size:40px;
    background-color: white;
    margin-bottom: 20px;
    opacity: 0.8;
    border-radius: 25%;
    transition: all 0.5s ease; 
    &:hover{
      background-color: #C8C0C0;
      transform: scale(1.1); 
      opacity: 0.6;
`

// Styled component for the button
const Button = styled.button`
   border: none;
   padding: 10px;
   background-color: white;
   color: gray;
   cursor: pointer;
   font-weight: 700;
   transition: all 0.5s ease;  
   &:hover{
    background-color: #C8C8C8;
    transform: scale(1.1);
    }

`

function CategoriesITem({items}) {
  return (
     // Container for each category item
    <Container>
      {/* Link to the specified category */}
      <Link to={`./produits/${items.categorie}`}>
        {/* Image for the category */}
      <Image src={items.img}/>
      {/* Info section */}
      <Info>
        {/* Title of the category */}

        <Title>{items.title}</Title>
         {/* Button for shopping */}
        <Button> SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  )
}

export default CategoriesITem