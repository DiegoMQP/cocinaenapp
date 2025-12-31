import {json, type LoaderFunction} from '@shopify/remix-oxygen';
import {useLoaderData, Link} from '@remix-run/react';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import ForWho from '../src/components/ForWho';
import WhatWeDo from '../src/components/WhatWeDo';
import Benefits from '../src/components/Benefits';
import CoverageChecker from '../src/components/CoverageChecker';
import HowItWorks from '../src/components/HowItWorks';
import FinalCTA from '../src/components/FinalCTA';
import Footer from '../src/components/Footer';
import WhatsAppButton from '../src/components/WhatsAppButton';
import '../src/App.css';

export const loader: LoaderFunction = async () => {
  return json({
    shop: {
      name: 'CocinaEnApp',
      description: 'Tu restaurante listo en apps de delivery'
    }
  });
};

export default function Index() {
  const {shop} = useLoaderData();

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
  );
}
