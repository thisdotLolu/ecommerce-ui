import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'



const Products = () => {
  return (
      <div>
          <h1>ITEMS 65% OFF</h1>
          <Container>
        {
            popularProducts.map(products=>{
                return <Product key={products.id} item={products}/>
            })
        }
    </Container>
      </div>
    
  )
}

const Container=styled.div`
display: flex;
flex-wrap: wrap;
padding:20px;
justify-content: center;
`

export default Products