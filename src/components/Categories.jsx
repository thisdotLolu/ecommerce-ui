import React from 'react'
import { categories } from '../data'
import styled from 'styled-components'
import CategorItem from './CategorItem'
import { mobile } from '../Responsive'



const Categories = () => {
  return (
    <div>
      <h1>POPULAR CATEGORIES</h1>
      <Container>
      
      {
          categories.map(item=>{
             return <CategorItem item={item} key={item.id}/>
          })
      }
  </Container>
    </div>
    
  )
}

const Container=styled.div`
display:flex;
padding: 20px;
justify-content: space-between;
${mobile({padding:'0px',flexDirection:'column'})}
`
export default Categories;