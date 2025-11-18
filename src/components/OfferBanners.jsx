import React from 'react'
import { motion } from 'framer-motion'

export default function OfferBanners() {
  const banners = [
    { title: 'Summer Tech Fest', desc: 'Up to 60% off on gadgets', gradient: 'from-fuchsia-500 via-indigo-500 to-cyan-500' },
    { title: 'Style Weekend', desc: 'Flat 40% off on fashion', gradient: 'from-amber-500 via-pink-500 to-purple-500' },
  ]

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-4">
        {banners.map((b, i) => (
          <motion.div
            key={i}
            className={`relative overflow-hidden rounded-3xl border border-white/10 p-6 bg-gradient-to-r ${b.gradient}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="absolute -inset-1 bg-[radial-gradient(80%_80%_at_0%_0%,white/25,transparent)] opacity-30" />
            <div className="relative">
              <h4 className="text-2xl font-bold text-white drop-shadow">{b.title}</h4>
              <p className="text-white/90">{b.desc}</p>
              <button className="mt-4 inline-flex h-10 items-center justify-center rounded-xl bg-white/20 text-white px-4 hover:bg-white/30">Shop Now</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
