import React, { useState } from 'react'
import styled from 'styled-components'
import { ArrowLeft, ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { sliderItems } from '../data'
import { Link } from 'react-router-dom'
import { mobile } from '../Responsive'


const Slider = () => {
    //setting the slideindex to handle slide state
    const[slideIndex,setSlideIndex]=useState(0)



    const handleClick=(direction)=>{
        if(direction==='left'){
            setSlideIndex(slideIndex > 0? slideIndex-1:2)
        }else{
            setSlideIndex(slideIndex < 2? slideIndex+1:0)
        }
    }
  return (
    <Container>
        <Arrow direction='left' onClick={()=>handleClick('left')}>
            <ArrowLeftOutlined
            sx={{ fontSize: 70 }}
            />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {/* slide items pulled from data.js */}
            {sliderItems.map((item)=>{
                return(
                <Slide key={item.id}>            
                <ImageContainer>
                <Image src={item.img}/>
            </ImageContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Link to='/products'><Button>SHOP NOW</Button></Link>
            </InfoContainer>
            </Slide>
                )
            })}
        </Wrapper>
        <Arrow direction='right' onClick={()=>handleClick('right')}>
            <ArrowRightOutlined
            sx={{ fontSize: 70 }}
            />
        </Arrow>
    </Container>
  )
}

const Wrapper =styled.div`
height:100%;
display: flex;
transform: translateX(${props=>props.slideIndex *-100}vw);
transition: all 1.5s ease;
`
const Slide= styled.div`
display: flex;
align-items: center;
height: 100vh;
width: 100vw;
`
const ImageContainer= styled.div`
height:100%;
flex:1
`
const Image=styled.img`
height: 80%;
`
const InfoContainer= styled.div`
flex:1;
padding:50px
${mobile({display:'none'})}
`
const Title=styled.h1`
font-size: 70px;
${mobile({display:'none'})}
`
const Desc=styled.p`
margin:50px 0;
font-size:20px;
letter-spacing: 3px;
${mobile({display:'none'})}
`
const Button=styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
${mobile({display:'none'})}

&:hover{
    background-color: red;
    color: white;
}
`


const Container=styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color: white;
position: relative;
overflow: hidden;
`

const Arrow = styled.div`
width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top:0;
bottom: 0;
margin:auto;
left:${props=>props.direction==='left'&&'10px'};
right:${props=>props.direction==='right'&&'10px'};
border:1px dashed blue;
cursor:pointer;
z-index: 2;
`


export default Slider