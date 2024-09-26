import React from 'react'
import CardWidget from '../cardwidget/CardWidget'
import './Navbar.css'
import { Link, Outlet } from 'react-router-dom'


function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <div className='logo'>
            <h2>EleganciaEnCasa</h2>
        </div>
        <ul className='navbar-links'>
            <li className='navbar-items'>
                <Link to="/category/muebles">Muebles</Link>
            </li>
            <li className='navbar-items'>
                <Link to="/category/jardin">Jardin</Link>
            </li>
            <li className='navbar-items'>
                <Link to="/category/decoraciones">Decoraciones</Link>
            </li>
            <li className='navbar-items'>
                <Link to="/category/baños">Baños</Link>
                
            </li>
        </ul>
        <CardWidget   className ='carrito' />
        
        <Outlet/>

    </nav>
    
    </>

  )
}

export default Navbar
