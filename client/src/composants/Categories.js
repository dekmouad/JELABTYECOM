import React from 'react'
import styled from 'styled-components'
import {categories} from "../data"
import CategoriesITem from './CotegoriesITem'
import mobile from '../responsive';
// Styled component for the container

const Container = styled.div`
   display: flex;
   padding: 20px;
   ${mobile({ padding: "0px", flexDirection:"column"})}

`
function Categories() {
  return (
        // Container for displaying categories

    <Container>
      {/* Iterate through the categories array */}
      {categories.map(items=>(
         <CategoriesITem  items={items} key={items.id}/>
      ))}
    </Container>
  )
}

export default Categories