import React from 'react'
import Testimonials from '../components/Testimonials'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import NewsBanner from '../components/NewsBanner'
import Accreditations from '../components/Accreditations'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import AccreditationInfo from '@/components/AccreditationInfo'
import FaqAccordion from '@/components/FaqAccordion'
import '../app/globals.css' // Corrected path to import global styles
export default function Home() {
  return (
    <div>
      <Navbar />
      <NewsBanner />
      <Hero />
      
      <Welcome />
      <Accreditations />
      <FaqAccordion />
      <Contact />
      <AccreditationInfo />
      <Footer />
    </div>
  )
}
