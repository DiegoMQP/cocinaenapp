import React from 'react'
import './WhatWeDo.css'

function WhatWeDo() {
  const services = [
    {
      number: '1',
      title: 'Abrimos tu cuenta',
      description: 'Nos encargamos de todo el registro en Uber Eats, Rappi y Didi Food',
      icon: 'fa-rocket'
    },
    {
      number: '2',
      title: 'Subimos tu menú',
      description: 'Organizamos tus platillos, agregamos descripciones atractivas',
      icon: 'fa-clipboard-list'
    },
    {
      number: '3',
      title: 'Configuramos precios',
      description: 'Ajustamos precios y descripciones para maximizar ventas',
      icon: 'fa-dollar-sign'
    },
    {
      number: '4',
      title: 'Todo listo para vender',
      description: 'Tu restaurante queda activo y listo para recibir pedidos',
      icon: 'fa-circle-check'
    }
  ]

  return (
    <section className="what-we-do section" id="que-hacemos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">¿Qué hacemos por ti?</h2>
          <p className="section-subtitle">Nos encargamos de todo el proceso</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-number">{service.number}</div>
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
