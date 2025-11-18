import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Search, ShoppingCart, User, ChevronDown, Store, Menu } from 'lucide-react'

export default function EcomNavbar() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const inputRef = useRef(null)

  const suggestions = useMemo(() => {
    if (!query) return []
    const base = ['iPhone 15 Pro', 'Samsung Galaxy S24', 'Sony WH-1000XM5', 'MacBook Air M3', 'Nike Air Max', 'Fujifilm X100VI', 'Dyson V15 Detect']
    return base.filter((s) => s.toLowerCase().includes(query.toLowerCase())).slice(0, 5)
  }, [query])

  useEffect(() => {
    setOpen(suggestions.length > 0)
  }, [suggestions])

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-3">
            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10" onClick={() => setMobileOpen((v) => !v)}>
              <Menu className="h-5 w-5 text-slate-100" />
            </button>
            <a href="#" className="inline-flex items-center gap-2">
              <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg shadow-indigo-500/30" />
              <span className="text-lg font-semibold tracking-tight">ShopSphere</span>
            </a>
          </div>

          {/* Search */}
          <div className="relative hidden md:block md:min-w-[520px] lg:min-w-[640px]">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setOpen(suggestions.length > 0)}
                onBlur={() => setTimeout(() => setOpen(false), 100)}
                placeholder="Search for products, brands and more"
                className="w-full pl-10 pr-4 h-11 rounded-2xl bg-white/5 border border-white/10 text-slate-100 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/40 transition"
              />
            </div>
            {open && (
              <div className="absolute mt-2 w-full rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden">
                {suggestions.map((s, i) => (
                  <button key={i} onMouseDown={() => { setQuery(s); setOpen(false) }} className="w-full text-left px-4 py-3 hover:bg-white/5 flex items-center gap-3">
                    <Search className="h-4 w-4 text-slate-400" />
                    <span className="text-sm text-slate-200">{s}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right */}
          <nav className="flex items-center gap-2">
            <button className="hidden md:inline-flex items-center gap-1 px-3 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm">
              Become a seller <ChevronDown className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 px-3 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10">
              <User className="h-5 w-5" />
              <span className="hidden sm:inline">Login</span>
            </button>
            <button className="relative inline-flex items-center gap-2 px-3 h-10 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-400/30">
              <ShoppingCart className="h-5 w-5 text-indigo-300" />
              <span className="hidden sm:inline">Cart</span>
              <span className="absolute -right-2 -top-2 h-5 min-w-[20px] text-xs px-1 rounded-full bg-indigo-500 text-white grid place-items-center shadow-lg">3</span>
            </button>
          </nav>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products"
              className="w-full pl-10 pr-4 h-11 rounded-2xl bg-white/5 border border-white/10 text-slate-100 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-500/60"
            />
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#" className="flex items-center gap-2 px-3 h-10 rounded-xl bg-white/5 border border-white/10"><Store className="h-4 w-4"/>Become a seller</a>
            <a href="#" className="flex items-center gap-2 px-3 h-10 rounded-xl bg-white/5 border border-white/10"><User className="h-4 w-4"/>Login</a>
          </div>
        )}
      </div>
    </header>
  )
}
