import React, { useEffect, useMemo } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const products = [
  { id: 1, title: 'Noise Cancelling Headphones', price: '$299', img: 'https://images.unsplash.com/photo-1518449079141-42f1a8d0f1f4?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, title: 'Smartphone Pro X', price: '$999', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, title: 'Mirrorless Camera', price: '$1299', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop' },
]

export default function Hero3D() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-200, 200], [12, -12])
  const rotateY = useTransform(x, [-200, 200], [-12, 12])
  const backgroundShift = useTransform(x, [-200, 200], ['-10%', '10%'])

  useEffect(() => {
    const handler = (e) => {
      const { innerWidth, innerHeight } = window
      const offsetX = e.clientX - innerWidth / 2
      const offsetY = e.clientY - innerHeight / 2
      x.set(offsetX)
      y.set(offsetY)
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [x, y])

  return (
    <section className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ backgroundPositionX: backgroundShift }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(99,102,241,0.20),transparent),radial-gradient(60%_40%_at_80%_10%,rgba(59,130,246,0.15),transparent)]" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-indigo-300">
              Flipkart-style Prime Deals
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Everything you love. Faster, smoother, more 3D.
            </h1>
            <p className="mt-4 text-slate-300 max-w-xl">
              Discover premium electronics, fashion, and lifestyle products with ultra-smooth interactions, glassmorphism, and delightful motion.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#deals" className="rounded-xl bg-indigo-500 text-white px-5 h-11 inline-flex items-center shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40">Shop Deals</a>
              <a href="#categories" className="rounded-xl bg-white/5 border border-white/10 px-5 h-11 inline-flex items-center hover:bg-white/10">Browse Categories</a>
            </div>
          </div>

          <motion.div
            className="relative h-[420px] lg:h-[520px]"
            style={{ perspective: 1200 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            >
              {products.map((p, i) => (
                <motion.div
                  key={p.id}
                  className="absolute w-56 sm:w-64 h-72 sm:h-80 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/40"
                  style={{
                    transform: `translateZ(${(i + 1) * 80}px)`,
                    top: `${10 + i * 30}%`,
                    left: `${i * 10}%`,
                  }}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: 'easeOut' }}
                >
                  <div className="relative h-2/3">
                    <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-slate-300">{p.title}</div>
                    <div className="mt-1 font-semibold text-white">{p.price}</div>
                    <button className="mt-3 inline-flex items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-200 hover:bg-indigo-500/30 w-full h-10 border border-indigo-400/30">Add to Cart</button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
