import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-28 pb-12 sm:pt-32 sm:pb-24">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
              </span>
              New: AI Inventory Management
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl">
            The Commerce Platform for High-Growth Brands
          </motion.h1>

          {/* Subtext */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-5 max-w-2xl text-base sm:text-lg text-slate-200/90">
            StoreFlow combines analytics, global payments, and a powerful API to help you launch, scale, and optimize your e-commerce operations with ease.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 px-5 py-3 text-white shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/40 transition-transform hover:scale-[1.02]">
              Get Started
            </a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur hover:bg-white/15">
              View Demo
            </a>
          </motion.div>

          {/* 3D tilted mockup */}
          <div className="mt-12">
            <motion.div initial={{ opacity: 0, y: 40, rotateX: 8 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8 }} className="relative mx-auto max-w-5xl">
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-blue-500/10 to-transparent blur-2xl" />
              <div className="relative rounded-2xl border border-white/15 bg-slate-900/50 p-3 backdrop-blur-xl shadow-2xl">
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="aspect-[16/9] w-full overflow-hidden rounded-xl ring-1 ring-white/10">
                  {/* Placeholder dashboard mockup */}
                  <div className="h-full w-full bg-gradient-to-b from-slate-800 to-slate-900">
                    <div className="grid h-full grid-cols-12 gap-4 p-6">
                      <div className="col-span-8 rounded-xl border border-white/10 bg-slate-950/40" />
                      <div className="col-span-4 space-y-4">
                        <div className="h-24 rounded-xl border border-white/10 bg-slate-950/40" />
                        <div className="h-24 rounded-xl border border-white/10 bg-slate-950/40" />
                        <div className="h-24 rounded-xl border border-white/10 bg-slate-950/40" />
                      </div>
                      <div className="col-span-12 h-40 rounded-xl border border-white/10 bg-slate-950/40" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
