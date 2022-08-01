import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { Announcement } from '@mui/icons-material'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'



const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText>
            <Select>
                <Option disabled selected>
                    By item
                </Option>
                <Option>Shirt</Option>
                <Option>Jacket</Option>
                <Option>Short</Option>
                <Option>Shoe</Option>
                <Option>Jeans</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}


const Container =styled.div``
const Filter =styled.h1`
margin:20px`
const Title =styled.div`
margin: 20px;
`
const FilterContainer =styled.div`
display: flex;
justify-content: space-between;
`
const FilterText =styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`
const Select =styled.select `
padding: 10px;
margin-right: 20px;
` 
const Option =styled.option `` 

export default ProductList;