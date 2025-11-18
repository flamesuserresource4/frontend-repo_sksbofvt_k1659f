import React from 'react'
import EcomNavbar from './components/EcomNavbar'
import Hero3D from './components/Hero3D'
import Categories3D from './components/Categories3D'
import DealsRow from './components/DealsRow'
import BestGrid from './components/BestGrid'
import RotatingShowcase from './components/RotatingShowcase'
import OfferBanners from './components/OfferBanners'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_35%)]" />
      <EcomNavbar />
      <Hero3D />
      <Categories3D />
      <DealsRow />
      <OfferBanners />
      <BestGrid />
      <RotatingShowcase />
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-400">
          © {new Date().getFullYear()} ShopSphere. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
