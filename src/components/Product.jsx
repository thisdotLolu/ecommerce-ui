import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'



const Product = ({item}) => {
    const {id}=useParams()
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Text>{item.product}</Text>
        <Info>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
        <Link to='/product'><Button>View</Button></Link>
    </Container>
  )
}


const Container=styled.div`
flex:1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
`
const Circle=styled.div`

`
const Image=styled.img`
height: 85%;
`
const Info=styled.div`
display: flex;

`
const Text=styled.p`
width: 190px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
color: rgba(225,225,225,0);

&:hover{
    background-color: rgba(225,225,225,0.9);
    color:black;
    transition: all 0.5s ease;
}
`

const Button=styled.button`
    padding:2px;
    color: white;
    cursor: pointer;
    background-color: black;
`
const Icon=styled.div`
margin-left:10px;
margin-right:10px;
cursor:pointer;
display: flex;
align-items: center;
justify-content: center;

&:hover{
    background-color: black;
    border-radius: 50%;
    color:white;
    transform: scale(1.2);
    transition: all 0.5s ease
}
`
export default Product