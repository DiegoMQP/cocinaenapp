import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ForWho from './components/ForWho'
import WhatWeDo from './components/WhatWeDo'
import Benefits from './components/Benefits'
import CoverageChecker from './components/CoverageChecker'
import HowItWorks from './components/HowItWorks'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ForWho />
        <WhatWeDo />
        <Benefits />
        <CoverageChecker />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
