import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'


const NewsLetter = () => {
  return (
    <Container>
        <Title>SUBSCRIBE! GET AN EXTRA 10% OFF & INSIDE INFO!*</Title>   
     <InputContainer>
        <Input placeholder='Enter Your Email'/>
        <Button>
            SUBSCRIBE
        </Button>
        </InputContainer>
        <Description>*Extra 10% discount sent via email to new subscribers only. By subscribing, you agree to receive marketing communications from boohoo by email. You can unsubscribe at any point.</Description>
    </Container>
  )
}

const Container=styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title=styled.h1`
font-size:30px;
text-align: center;
${mobile({fontSize:'24px'})}
`
const Description=styled.div`
font-style: 24px;
font-weight: 300;
margin-bottom: 20px;
text-align: center;
`
const InputContainer=styled.div`
width:50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${mobile({width:'80%'})}
`
const Input=styled.input`
border: none;
flex:8;
padding-left: 20px;
`
const Button=styled.button`
flex: 1;

&:hover{
    background-color: black;
    color: white;
}
`


export default NewsLetter