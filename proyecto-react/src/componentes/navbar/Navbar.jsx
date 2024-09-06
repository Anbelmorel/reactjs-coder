import React from 'react'
import CardWidget from '../cardwidget/CardWidget'
import './Navbar.css'


function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <div className='logo'>
            <h2>EleganciaEnCasa</h2>
        </div>
        <ul className='navbar-links'>
            <li className='navbar-items'>
                <a href="">Inicio</a>
            </li>
            <li className='navbar-items'>
                <a href="">Decoraciones</a>
            </li>
            <li className='navbar-items'>
                <a href="">Muebles</a>
            </li>
            <li className='navbar-items'>
                <a href="">Jardin</a>
            </li>
            <li className='navbar-items'>
                <a href="">Baños</a>
            </li>
        </ul>
        <CardWidget   className ='carrito'    />
    </nav>
    </>

  )
}

export default Navbar
