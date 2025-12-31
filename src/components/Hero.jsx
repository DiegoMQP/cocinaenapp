import React from 'react'
import './Hero.css'

function Hero() {
  const handleCTAClick = () => {
    window.open('https://wa.me/5491112345678?text=Hola, quiero vender en apps de delivery', '_blank')
  }

  return (
    <section className="hero section" id="inicio">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Tu restaurante listo en Uber Eats, Rappi y Didi
          </h1>
          <p className="hero-subtitle">
            Nosotros abrimos y configuramos tu restaurante para que empieces a vender
          </p>
          <button className="btn btn-hero" onClick={handleCTAClick}>
            Quiero vender en apps
          </button>
          <div className="hero-trust">
            <div className="trust-badge">
              <span className="trust-icon">
                <i className="fas fa-check"></i>
              </span>
              <span>Configuración rápida</span>
            </div>
            <div className="trust-badge">
              <span className="trust-icon">
                <i className="fas fa-check"></i>
              </span>
              <span>Sin errores</span>
            </div>
            <div className="trust-badge">
              <span className="trust-icon">
                <i className="fas fa-check"></i>
              </span>
              <span>Soporte incluido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
