import React from 'react'
import { Menu, LogIn, ArrowRight } from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            {/* Brand */}
            <a href="#" className="group inline-flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-emerald-400 ring-1 ring-white/20 shadow-lg shadow-indigo-500/30" />
              <span className="text-white font-semibold tracking-tight text-lg">StoreFlow</span>
            </a>

            {/* Center nav */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { href: '#features', label: 'Features' },
                { href: '#pricing', label: 'Pricing' },
                { href: '#blog', label: 'Blog' },
              ].map((item) => (
                <a key={item.href} href={item.href} className="text-slate-300/90 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-slate-200 hover:bg-white/5 transition-colors">
                <LogIn className="h-4 w-4" />
                <span>Sign in</span>
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 px-4 py-2 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 transition-transform hover:scale-[1.02]">
                <span>Get started</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-slate-200 hover:bg-white/5">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
