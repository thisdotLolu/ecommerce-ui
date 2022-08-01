import React, { useState } from 'react'
import styled from 'styled-components'
import './Announcements.css'


const Announcements = () => {
    const[show,setShow]=useState(false)

    const handleShow=()=> setShow(!show)
  return (
    <Container className={show? '':'container'}>
        SALES ONGOING!!! 65% off all items
        <div onClick={handleShow} style={{cursor:'pointer'}}>X</div> 
    </Container>
  )
}

const Container =styled.div`
height: 30px;
background-color: red;
color:white;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 14px;
font-weight: 500;
`



export default Announcements