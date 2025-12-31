import React from 'react'
import './Benefits.css'

function Benefits() {
  const benefits = [
    {
      icon: 'fa-clock',
      title: 'Ahorra tiempo',
      description: 'No pierdas horas intentando configurar las apps tú solo'
    },
    {
      icon: 'fa-bullseye',
      title: 'Evita errores',
      description: 'Configuración correcta desde el inicio, sin equivocaciones costosas'
    },
    {
      icon: 'fa-mobile-screen',
      title: 'Empieza a recibir pedidos',
      description: 'Tu restaurante activo y generando ventas en pocos días'
    }
  ]

  return (
    <section className="benefits section" id="beneficios">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">¿Por qué elegirnos?</h2>
          <p className="section-subtitle">Te hacemos la vida más fácil</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-icon">
                <i className={`fas ${benefit.icon}`}></i>
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="benefits-cta">
          <p className="cta-text">
            Deja que expertos configuren tu restaurante mientras tú te enfocas en cocinar
          </p>
        </div>
      </div>
    </section>
  )
}

export default Benefits
