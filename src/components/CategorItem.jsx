import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { mobile } from '../Responsive'


const CategorItem = ({item}) => {
  return (
    <Container>
        <Link to='/product'><Image src={item.img}/></Link>
        <Info>
            <Title>{item.title}</Title>
            <Link to='/products'><Button>SHOP NOW</Button></Link>
        </Info>
    </Container>
  )
}


const Container=styled.div`
flex: 1;
margin: 3px;
height:70vh;
position:relative;
`
const Image=styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({height:'50vh'})}
`
const Info=styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left:0;
flex-direction: column;
align-items: center;
justify-content: center;
display: flex;
`
const Title=styled.h1`
color: black;
margin-bottom:20px;
background-color: white;
`
const Button=styled.button`
border: none;
padding: 10px;
background-color: white;
cursor: pointer;
font-weight: 600;

&:hover{
  background-color: red;
  color: white;
}
`

export default CategorItem