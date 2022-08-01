import React from 'react'
import styled from 'styled-components'
// import {FaShoppingBag} from 'react-icons/fa'
import { Badge, Search, ShoppingCartOutlined } from '@mui/icons-material' 
import { Link } from 'react-router-dom'
import { mobile } from '../Responsive'



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
            <Language>
            EN
            </Language>
            <SearchContainer>
            <Input/>
            <Search style={{color:'gray',fontSize:'16px'}}/>
            </SearchContainer>
            </Left>
            <Center>
            <Link to='/' style={{textDecoration:'none', color:'black'}}><Logo>myShop</Logo></Link>
            </Center>
            <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
            <Badge badgecontent={4} color='primary'>
                <ShoppingCartOutlined/>
            </Badge>
            </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}
const Container = styled.div`
    height: 60px;
    ${mobile({height:'50px'})}
`

const Wrapper= styled.div`
    padding: 0px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({padding:'-10px 0px'})}
` 
const Language=styled.span`
        font-size:14px;
        cursor:pointer;
        ${mobile({display:'none'})}
`
const Left =styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center =styled.div`
flex:1;
text-align: center;
`
const Right =styled.div`
flex:1;
display:flex;
align-items: center;
justify-content: flex-end;
${mobile({justifyContent:'center', flex:2})}
`
const SearchContainer=styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Logo=styled.h1`
font-weight: bold;
${mobile({fontSize:'24px'})}
`
const Input=styled.input`
border: none;
${mobile({width:'50px'})}
`
const MenuItem =styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:'12px',marginLeft:'10px'})}
`


export default Navbar