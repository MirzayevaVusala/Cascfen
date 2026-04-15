import React, { useState } from 'react'
import "./NavbarStyles.css"
import { Link, useLocation } from "react-router-dom"
import { MenuItems } from './MenuItems'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className='NavbarItems'>
      {/* Logo */}
      <h1 className='navbar-logo'>Cas<span>cfen</span></h1>

      {/* Google Translate Seçim Düyməsi */}
      <div id="google_translate_element"></div>

      {/* Hamburger Menu Button */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Menyunu aç/bağla"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Nav Links */}
      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.url}
              className={`${item.cName} ${location.pathname === item.url ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar