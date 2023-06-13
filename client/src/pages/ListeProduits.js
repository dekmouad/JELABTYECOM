import React from 'react'
import styled from 'styled-components'
import Footer from '../composants/Footer'
import Navbar from '../composants/Navbar'
import Nouveautes from '../composants/Nouveautes'
import Products from '../composants/Products'
import { useLocation } from "react-router";
import { useState } from "react";
import mobile from '../responsive';
import {ArrowBackIos} from "@material-ui/icons";
import { Link } from "react-router-dom";
import MenuNavbar from '../composants/Menu'
const Container = styled.div`
  
`
const Header = styled.div`
  display: flex;
  font-family:cursive;
`
const Title = styled.h2`
   margin: 20px;
   text-transform: uppercase;
   font-size: 20px;   
   font-weight: 600;
   flex: 1;
   letter-spacing: 3px;
   margin-right: 200px ;
`
const Retour = styled.h2`
 margin: 20px;
 font-size: 20px;
 text-transform: uppercase;
 font-weight: 600;
 flex: 1;
 margin-left: 30px ;
 color: black;
`
const FiltreContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filtre = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 10px", display:"flex",flexDirection:"column" })}
`
const FiltreText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px", fontSize: "15px"})}
`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px"})}  
`
const Option = styled.option`
`
const Input= styled.button`
 color: black;
 font-weight: 700;
 border: none;
 font-size: 20px;
 background-color: white;
 cursor: pointer;
`

export default function ListeProduits() {
    // Get the current location

  const Lieu = useLocation();
    // Extract the category from the pathname

  const categorie = Lieu.pathname.split("/")[2];
    // Initialize state variables

  const [sort, setSort] = useState("les plus récents");
  const [filtre, setFiltres] = useState({});
 console.log(filtre, categorie);
  return (
    <Container>
              {/* Navbar component */}

        <Navbar/>
                {/* MenuNavbar component */}

        <MenuNavbar/>
        <Header>            
                    {/* Go back button */}
              
        <Retour> <Link to="/"><ArrowBackIos style={ {color: "black"}}/></Link> </Retour>
                  {/* Category title */}

        <Title>{categorie}</Title>
        </Header>
                {/* Filter container */}

        <FiltreContainer>
                         {/* Color filter */}

            <Filtre>
               <Select name="color" onChange={(e) => setFiltres({...filtre,[e.target.name]: e.target.value})}> 
                  <Option disabled selected> Color </Option>
                  <Option value="white">White</Option>
                  <Option value="black">Black</Option>                  
                  <Option value="yellow">Yellow</Option>
                  <Option value="green">Green</Option>
                  <Option value="purple">Purple</Option>
                  <Option value="red">Red</Option>
                  <Option value="blue">Blue</Option>
                  <Option value="pink">Pink</Option>
                  <Option value="skyblue">Skyblue</Option>
                  <Option value="gray">Gray</Option>
                  <Option value="broown">Brown</Option>
                </Select>
                               {/* Size filter */}

               <Select name="size" onChange={(e) => setFiltres({...filtre,[e.target.name]: e.target.value})}> 
                  <Option disabled selected> Size</Option>
                  <Option>XXS</Option>
                  <Option>XS</Option>
                  <Option>S</Option>
                  <Option>M</Option>
                  <Option>L</Option>
                  <Option>XL</Option>
                  <Option>XXL</Option>
                </Select>
                                {/* style filter */}

                <Select name="style" onChange={(e) => setFiltres({...filtre,[e.target.name]: e.target.value})}> 
                  <Option disabled selected> Style</Option>
                  <Option>Jellaba</Option>
                  <Option>Caftan</Option>
                  <Option>Takchita</Option>
                  <Option>Jabador</Option>
                  <Option>Gandoura</Option>
               
                </Select>
                                {/* Type filter */}

                <Select name="type" onChange={(e) => setFiltres({...filtre,[e.target.name]: e.target.value})}> 
                  <Option disabled selected> Type</Option>
                  <Option>Trousers</Option>
                  <Option>T-Shirt</Option>
                  <Option>Tracksuit</Option>
                  <Option>shoes</Option>
                  <Option>Sweatshirt</Option>
                </Select>
                                {/* Reset filters button */}

                <Input onClick={(e) => setFiltres({})}> X </Input>
            </Filtre>
                          {/* Sort by filter */}

            <Filtre>
              <Select onChange={(e) => setSort(e.target.value)}> 
                  <Option value="most new">Newest</Option>
                  <Option value="Price high to low">Price, low to high</Option>
                  <Option value="price low to high">Price, high to low</Option>
               </Select>
           </Filtre>            
        </FiltreContainer>
                      {/* Sort by filter */}

        <Products categorie={categorie} filtre={filtre} sort={sort}/>
                {/* newsletter component */}

        <Nouveautes/>
                {/* Footer component */}

        <Footer/>
    </Container>
  )
}
