import React from 'react'
import './CoverageChecker.css'

// Ciudades principales donde iniciamos operaciones
const FEATURED_CITIES = [
  { name: 'Ciudad de México', icon: 'fa-building' },
  { name: 'Guadalajara', icon: 'fa-city' },
  { name: 'Monterrey', icon: 'fa-industry' },
  { name: 'Puebla', icon: 'fa-church' },
  { name: 'Querétaro', icon: 'fa-landmark' },
  { name: 'León', icon: 'fa-store' },
  { name: 'Tijuana', icon: 'fa-bridge' },
  { name: 'Mexicali', icon: 'fa-sun' },
  { name: 'Cancún', icon: 'fa-umbrella-beach' },
  { name: 'Mérida', icon: 'fa-tree' },
  { name: 'Toluca', icon: 'fa-mountain' },
  { name: 'Morelia', icon: 'fa-monument' },
]

function CoverageChecker() {
  const handleCTAClick = () => {
    window.open('https://wa.me/5491112345678?text=Hola, quiero vender en apps de delivery', '_blank')
  }

  return (
    <section className="coverage-checker section" id="cobertura">
      <div className="container">
        <div className="coverage-header">
          <h2 className="coverage-title">Ciudades disponibles</h2>
          <p className="coverage-subtitle">Estamos en las principales ciudades de México</p>
        </div>
        
        <div className="cities-grid">
          {FEATURED_CITIES.map((city, index) => (
            <div className="city-card" key={index}>
              <i className={`fas ${city.icon} city-icon`}></i>
              <h3 className="city-name">{city.name}</h3>
            </div>
          ))}
        </div>

        <div className="coverage-cta">
          <p className="coverage-note">¿Tu ciudad no aparece?</p>
          <button className="btn btn-coverage" onClick={handleCTAClick}>
            Pregúntanos
          </button>
        </div>
      </div>
    </section>
  )
}

export default CoverageChecker
