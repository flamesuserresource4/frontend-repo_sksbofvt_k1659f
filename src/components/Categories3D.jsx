import React from 'react'
import { motion } from 'framer-motion'
import { Laptop, Headphones, Watch, Shirt, Camera, Gamepad2 } from 'lucide-react'

const cats = [
  { icon: Laptop, label: 'Laptops' },
  { icon: Headphones, label: 'Audio' },
  { icon: Watch, label: 'Wearables' },
  { icon: Shirt, label: 'Fashion' },
  { icon: Camera, label: 'Cameras' },
  { icon: Gamepad2, label: 'Gaming' },
]

export default function Categories3D() {
  return (
    <section id="categories" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold tracking-tight mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {cats.map((c, i) => (
            <motion.a
              key={c.label}
              href="#"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-indigo-500/20 blur-2xl" />
              <c.icon className="h-6 w-6 text-indigo-300" />
              <div className="mt-3 text-sm font-medium">{c.label}</div>
              <div className="text-xs text-slate-400">Explore</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
