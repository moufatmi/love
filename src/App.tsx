import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Quotes from './components/Quotes';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <Header />
      <Hero />
      <AboutUs />
      <Timeline />
      <Gallery />
      <Quotes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;