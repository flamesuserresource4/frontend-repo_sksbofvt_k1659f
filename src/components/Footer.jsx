import React from 'react'
import { Github, Twitter, Linkedin } from 'lucide-react'

function Footer() {
  const columns = {
    Brand: ['Overview', 'Guidelines', 'Press'],
    Product: ['Features', 'Pricing', 'Changelog'],
    Company: ['About', 'Careers', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Security']
  }

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {Object.entries(columns).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white">{title}</h4>
              <ul className="mt-4 space-y-2">
                {links.map((l) => (
                  <li key={l}><a href="#" className="hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-indigo-500 via-blue-500 to-emerald-400 ring-1 ring-white/20" />
            <span className="text-sm">© {new Date().getFullYear()} StoreFlow. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-3">
            {[Github, Twitter, Linkedin].map((Icon) => (
              <a key={Icon.displayName} href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 hover:bg-white/10">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
