import React from 'react'
import './ForWho.css'

function ForWho() {
  const targets = [
    {
      icon: 'fa-utensils',
      title: 'Restaurantes nuevos',
      description: 'Estás empezando y quieres vender en apps desde el día uno'
    },
    {
      icon: 'fa-chart-line-down',
      title: 'Restaurantes que no venden',
      description: 'Ya estás en apps pero los pedidos no llegan como esperabas'
    },
    {
      icon: 'fa-kitchen-set',
      title: 'Cocinas fantasma',
      description: 'Quieres crear una marca nueva solo para delivery'
    }
  ]

  return (
    <section className="for-who section" id="para-quien">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">¿Para quién es CocinaEnApp?</h2>
          <p className="section-subtitle">Ayudamos a todo tipo de restaurantes</p>
        </div>
        <div className="targets-grid">
          {targets.map((target, index) => (
            <div className="target-card" key={index}>
              <div className="target-icon">
                <i className={`fas ${target.icon}`}></i>
              </div>
              <h3 className="target-title">{target.title}</h3>
              <p className="target-description">{target.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ForWho
