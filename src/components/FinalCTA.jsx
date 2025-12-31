import React from 'react'
import './FinalCTA.css'

function FinalCTA() {
  const handleCTAClick = () => {
    window.open('https://wa.me/5491112345678?text=Hola, quiero empezar hoy con CocinaEnApp', '_blank')
  }

  return (
    <section className="final-cta section">
      <div className="container">
        <div className="cta-box">
          <h2 className="cta-title">Empieza hoy mismo</h2>
          <p className="cta-subtitle">
            No pierdas más tiempo. Configura tu restaurante profesionalmente y empieza a vender.
          </p>
          <button className="btn btn-cta-large" onClick={handleCTAClick}>
            Quiero vender en apps
          </button>
          <div className="cta-features">
            <span><i className="fas fa-check"></i> Sin letra chica</span>
            <span><i className="fas fa-check"></i> Respuesta rápida</span>
            <span><i className="fas fa-check"></i> Soporte incluido</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
