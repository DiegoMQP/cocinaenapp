import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">CocinaEnApp</div>
            <p className="footer-tagline">
              Tu restaurante listo en apps de delivery
            </p>
          </div>
          <div className="footer-contact">
            <h4>Plataformas</h4>
            <p>Uber Eats</p>
            <p>Rappi</p>
            <p>Didi Food</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CocinaEnApp. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
