import React from 'react'
import Announcements from '../components/Announcements'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'

function Home() {
  return (
    <div>
        <Announcements/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Home