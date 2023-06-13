import {
   Facebook,
   Instagram,
   MailOutline,
   Phone,
   Pinterest,
   Room,
   Twitter,
 } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import mobile from '../responsive';

// Styled component
const Container = styled.div`
    display: flex;
    ${mobile({flexDirection:"column"})}
`
const Left = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   padding: 20px;
   padding-left: 60px;
   margin-right: 200px;
   ${mobile({paddingLeft:"10px"})}
`
const Logo = styled.h1`
`
const Description = styled.p`
   margin: 20px 0px;  
   text-align: justify;
`
const Title = styled.h3`
   margin-bottom: 50px;
   padding-top: 10px;
`
const List = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   flex-wrap: wrap;
   padding-top: 20px;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`
const Right = styled.div`
   flex: 1;
   padding-top: 20px;
   ${mobile({paddingLeft:"10px", backgroundColor:"#F8F8F8"})}   
`
const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center;
   cursor: pointer;
`
const Payment = styled.img`
   padding-top: 80px;   
   margin-left: 37%;
   ${mobile({paddingLeft:"10px", paddingTop: "10px"})}
`
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export default function Footer() {
  return (
     // Container for the footer section
    <Container>
      {/* Left section */}
      <Left>
          <Logo>JELABTY</Logo>
          <Description> jelabty is an online store specializing in Moroccan traditional clothing and accessories. We bring together 
            renowned brands and designers to offer a premium consumer experience. Our carefully curated selection includes a 
            variety of authentic Moroccan garments, such as caftans, djellabas, takchitas, and babouches, crafted with high-quality 
            fabrics and adorned with traditional embroideries and patterns. At Jellabty, we are dedicated to preserving and celebrating 
            Morocco's cultural heritage through our collection of traditional clothing, 
            providing customers with an opportunity to connect with the craftsmanship and richness of Moroccan tradition. 
        </Description>    
        {/* Social media icons */}
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>    
      </Left>
      {/* Right section */}
      <Right>
          <Title> CONTACT US </Title>
          <ContactItem>
             <MailOutline style={{marginRight: "10px"}}/> contact@Jellabty.ma
          </ContactItem>
          <ContactItem>
          <Room style={{ marginRight: '10px' }} /> 622 dar nour , RABAT 98336 ,
          MOROCCO
        </ContactItem>
          <ContactItem>
             <Phone style={{marginRight: "10px"}}/> +212 650 734 04
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}
