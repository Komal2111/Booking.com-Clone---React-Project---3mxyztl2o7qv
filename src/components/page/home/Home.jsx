import React from 'react'
import List from '../list/List'
import Header from '../../header/Header'
import Navbar from '../../navbar/Navbar'
import Featured from '../../featured/Featured'
import './home.css'
import Property from '../../proterty/Property'
import FeaturedProperty from '../../feautredproperty/FeaturedProperty'
import MailList from '../../maillist/MailList'
import Footer from '../../footer/Footer'


export default function Home() {
  return (
    <div>
    {/* <Navbar/>
    <Header/> */}
    <div className='homeContainer'>
      <Featured/>
      <h1 className='homeTitle'>Browse by property type</h1>
      <Property/>
      <h1 className='homeTitle'> Home Guests Love</h1>
      <FeaturedProperty/>
      <MailList/>
      
      
      <Footer/>
      </div>
    
    </div>
  )
}

