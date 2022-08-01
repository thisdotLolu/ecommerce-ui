import { Add, Announcement, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import { mobile } from '../Responsive'



const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
            <Image src='https://www.stephaniemcbrideblog.com/wp-content/uploads/2022/01/shirts-boohooman-mens-regular-check-shirt-teal_2.jpg' />
            </ImgContainer>
        <InfoContainer>
            <Title>Checkered Shirt</Title>
            <Desc>
            Introduce some subtle dapperness into your day-to-day lineup with a shirt. You'll be surprised at how easy it is to throw together a sophisticated ensemble with a plain shirt from our extensive range. If you want to look sharp by keeping it simple, pair a checked shirt with a blazer and skinny jeans. Finish off with Chelsea boots for an outfit that delivers dapperness from the office to the bar. If you are looking for the ultimate summer outfit, our selection of printed shirts will make sure you'll get noticed. 100% Polyester. Model is 6'1" and wears a UK size M.
            </Desc>
            <Price>20000 naira</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color='black'/>
                    <FilterColor color='darkblue'/>
                    <FilterColor color='grey'/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                        <FilterSizeOption>XXL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>Add To Cart</Button>
            </AddContainer>
        </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}


const Container=styled.div`

`
const Wrapper=styled.div`
padding: 50px;
display: flex;
${mobile({flexDirection:'column'})}
`
const ImgContainer=styled.div`
flex: 1;
`
const Image=styled.img`
width: 100%;
height: 90vh;
object-fit:cover;
`
const InfoContainer=styled.div`
flex: 1;
padding: 0px 50px;

`
const Title=styled.h1`
font-weight: 200;
`
const Desc=styled.p`
margin: 20px 0px;
${mobile({border:'1px solid'})}
`
const Price=styled.span`
font-weight: 700;
font-size: xx-large;
`

const FilterContainer =styled.div`
width: 50%;
margin:30px 0px;
display:flex;
justify-content: space-between;

`
const Filter =styled.div`
display: flex;
align-items: center;
${mobile({marginRight:'20px'})}
`

const FilterTitle =styled.span`
font-size:30px;
font-weight: 200;
${mobile({display:'none'})}
`
const FilterColor =styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;

`
const FilterSize =styled.select`
margin-left: 10px;
${mobile({marginRight:'20px'})}
${mobile({display:'none'})}
`
const FilterSizeOption =styled.option`
${mobile({display:'none'})}
`
const AddContainer =styled.div`
width:50%;
display:flex;
align-items: center;
justify-content: space-between;
${mobile({display:'none'})}
`
const AmountContainer =styled.div`
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
`
const Amount =styled.span`
width: 30px;
height:30px;
border-radius: 10px;
border:1px solid red;
align-items: center;
justify-content: center;

`
const Button =styled.button`
padding: 15px;
border: 1px solid red;
background-color: white;
cursor: pointer;
display: none;

&:hover{
    background-color: red;
    color: white;
}
`
export default Product