import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>myShop</Logo>
            <Desc>Please read these terms and conditions carefully before ordering any Products from our site. Using our site indicates that you accept these terms and conditions together with our Privacy Notice here and Terms of Use here, regardless of whether or not you choose to register with us. If you do not accept these terms and conditions, our Privacy Notice here or our Terms of Use here, do not use our site.</Desc>
            <SocialContainer>
                <SocialIcon>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon>
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Footwears</ListItem>
                <ListItem>Jackets</ListItem>
                <ListItem>Shorts</ListItem>
                <ListItem>Shirts</ListItem>
                <ListItem>T-Shirts</ListItem>
                <ListItem>Jeans</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                788, Prince Street, North Carolina 7889
            </ContactItem>
            <ContactItem>
                +23456785032
            </ContactItem>
            <ContactItem>
                info@myshop.com
            </ContactItem>
        </Right>
    </Container>
  )
}


const Container=styled.div`
display: flex;
${mobile({flexDirection:'column'})}
`
const Left=styled.div`
flex: 1;
display:flex;
flex-direction: column;

`
const Right=styled.div`
flex:1;
padding: 20px;
`
const Center=styled.div`
flex:1;
padding: 20px;
${mobile({display:'none'})}
`
const Logo=styled.h1`
`
const Desc=styled.p`
margin:20px 0px;
`
const SocialContainer=styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const SocialIcon=styled.div`
width:40px;
height: 40px;
border-radius: 50%;
`
const ListItem=styled.li`

`
const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-direction: column;
flex-wrap: wrap;
`
const Title=styled.h3`
margin-bottom: 30px;
`
const ContactItem=styled.div`
margin-bottom:20px;
display: flex;
align-items: center;
`


export default Footer