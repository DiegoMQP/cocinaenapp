import React from 'react'
import './Header.css'
import logo from '../assets/logo.png'

function Header() {
  const handleCTAClick = () => {
    window.open('https://wa.me/5491112345678?text=Hola, quiero vender en apps de delivery', '_blank')
  }

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <img src={logo} alt="CocinaEnApp" className="logo-img" />
        </div>
        <button className="btn btn-primary" onClick={handleCTAClick}>
          Quiero vender en apps
        </button>
      </div>
    </header>
  )
}

export default Header
