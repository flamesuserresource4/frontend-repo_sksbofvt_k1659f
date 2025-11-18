import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Globe2, Code2 } from 'lucide-react'

const cards = [
  {
    title: 'Analytics',
    icon: BarChart3,
    desc: 'Real-time dashboards to track revenue, conversion, and customer cohorts.'
  },
  {
    title: 'Global Payments',
    icon: Globe2,
    desc: 'Accept cards and wallets in 135+ currencies with built-in fraud protection.'
  },
  {
    title: 'API Access',
    icon: Code2,
    desc: 'A modern REST API and webhooks to integrate StoreFlow into your stack.'
  },
]

function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Everything you need to scale</h2>
          <p className="mt-3 text-slate-300">All the tools required to launch, optimize, and grow your commerce engine.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 p-2 ring-1 ring-white/20">
                  {React.createElement(card.icon, { className: 'h-6 w-6 text-indigo-300' })}
                </div>
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              </div>
              <p className="mt-3 text-slate-300">{card.desc}</p>
              <div className="mt-6 h-40 rounded-xl border border-white/10 bg-slate-900/40 group-hover:scale-[1.01] transition-transform" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
