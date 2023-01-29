import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <span className='logo'>gargbooking </span>
            <div className='navItems'>
                <button className='navButton'>Register</button>
                <button className='navButton'>Log In</button>
                 
            </div>

        </div>
    </div>
  )
}