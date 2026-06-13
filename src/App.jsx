import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import AboutPage from './pages/AboutPage'
import PastatxterPage from './pages/PastatxterPage'
import KapPage from './pages/KapPage'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artadranq" element={<ProductsPage />} />
        <Route path="/artadranq/:slug" element={<ProductDetailPage />} />
        <Route path="/naxagdzer" element={<ProjectsPage />} />
        <Route path="/naxagdzer/:slug" element={<ProjectDetailPage />} />
        <Route path="/carayutyunner" element={<ServicesPage />} />
        <Route path="/carayutyunner/:slug" element={<ServiceDetailPage />} />
        <Route path="/mer-masin" element={<AboutPage />} />
        <Route path="/pastatxter" element={<PastatxterPage />} />
        <Route path="/kap" element={<KapPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
