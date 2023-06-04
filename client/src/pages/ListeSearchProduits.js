import React from 'react'
import styled from 'styled-components'
import Announcement from '../composants/Announcement'
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


export default function ListeSearchProduits() {
  const Lieu = useLocation();
  const search = Lieu.pathname.split("/")[3];
  const [stateSearch , setStateSearch] = useState();
  const [sort, setSort] = useState("les plus récents");
  const [filtre, setFiltres] = useState({});

  const handleChange = (e) => {
    setStateSearch(e.target.value);
  }

  return (
    <Container>
        <Navbar search={handleChange}/>
        <MenuNavbar/>
        <Header>                          
        <Retour> <Link to="/"><ArrowBackIos style={ {color: "black"}}/></Link> </Retour>
        </Header>
        <FiltreContainer>
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
               <Select name="size" onChange={(e) => setFiltres({...filtre,[e.target.name]: e.target.value})}> 
                  <Option disabled selected> Taille</Option>
                  <Option>XS</Option>
                  <Option>S</Option>
                  <Option>M</Option>
                  <Option>L</Option>
                  <Option>XL</Option>
                  <Option>XXL</Option>
                </Select>
                <Select name="brand" onChange={(e) => setFiltres({...filtre,[e.target.name]: e.target.value})}> 
                <Option disabled selected> Style</Option>
                  <Option>Jellaba</Option>
                  <Option>Caftan</Option>
                  <Option>Takchita</Option>
                  <Option>Jabador</Option>
                  <Option>Gandoura</Option>
                </Select>
            </Filtre>
            <Filtre>
              <Select onChange={(e) => setSort(e.target.value)}> 
              <Option value="plusrecent">Newest</Option>
                  <Option value="Pris bas à élevé">Price, low to high</Option>
                  <Option value="Pris élevé à bas">Price, high to low</Option>
               </Select>
            </Filtre>
        </FiltreContainer>
        <Products search={stateSearch ? stateSearch : search} filtre={filtre} sort={sort}/>
        <Nouveautes/>
        <Footer/>
    </Container>
  )
}
