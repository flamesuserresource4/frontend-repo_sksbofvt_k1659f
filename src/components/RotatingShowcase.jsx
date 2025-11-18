import React from 'react'
import { motion } from 'framer-motion'

const showcase = [
  'https://images.unsplash.com/photo-1606813907291-76a5a4a0d1a0?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1400&auto=format&fit=crop',
]

export default function RotatingShowcase() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-lg font-semibold mb-2">3D Rotating Product Showcase</h3>
            <p className="text-slate-300 max-w-xl">Hover the gallery to rotate. Smooth perspective, subtle parallax, and micro-interactions deliver a premium feel.</p>
          </div>
          <div className="relative h-[380px] md:h-[440px]" style={{ perspective: 1200 }}>
            <motion.div className="absolute inset-0" whileHover={{ rotateY: 18 }} transition={{ type: 'spring', stiffness: 100, damping: 15 }} style={{ transformStyle: 'preserve-3d' }}>
              {showcase.map((src, i) => (
                <motion.img
                  key={src}
                  src={src}
                  className="absolute inset-0 m-auto h-64 w-64 object-cover rounded-3xl border border-white/10 shadow-2xl"
                  style={{ transform: `rotateY(${i * 12}deg) translateZ(${220 - i * 40}px)` }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
