import { Routes, Route } from 'react-router-dom'
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
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artadranq" element={<ProductsPage />} />
        <Route path="/artadranq/:slug" element={<ProductDetailPage />} />
        <Route path="/naxagdzer" element={<ProjectsPage />} />
        <Route path="/naxagdzer/:slug" element={<ProjectDetailPage />} />
        <Route path="/carayutyunner" element={<ServicesPage />} />
        <Route path="/carayutyunner/:slug" element={<ServiceDetailPage />} />
        <Route path="/mer-masin" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
