import React from 'react'
import './HowItWorks.css'

function HowItWorks() {
  const steps = [
    {
      step: 'Paso 1',
      title: 'Nos contactas',
      description: 'Envíanos un mensaje por WhatsApp y cuéntanos sobre tu restaurante',
      icon: 'fa-comments'
    },
    {
      step: 'Paso 2',
      title: 'Configuramos todo',
      description: 'Nos encargamos de abrir cuentas, subir menú y ajustar todo',
      icon: 'fa-gears'
    },
    {
      step: 'Paso 3',
      title: 'Empiezas a vender',
      description: 'Tu restaurante queda activo y comienza a recibir pedidos',
      icon: 'fa-party-horn'
    }
  ]

  return (
    <section className="how-it-works section" id="como-funciona">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">¿Cómo funciona?</h2>
          <p className="section-subtitle">Es muy sencillo</p>
        </div>
        <div className="steps-container">
          {steps.map((item, index) => (
            <div className="step-item" key={index}>
              <div className="step-icon-wrapper">
                <div className="step-icon">
                  <i className={`fas ${item.icon}`}></i>
                </div>
              </div>
              <div className="step-content">
                <div className="step-label">{item.step}</div>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-description">{item.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-arrow">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
