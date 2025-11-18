import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const items = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  title: `Deal ${i + 1}`,
  price: `$${(Math.random() * 100 + 10).toFixed(0)}`,
  img: `https://images.unsplash.com/photo-15${Math.floor(Math.random() * 99)}?q=80&w=1600&auto=format&fit=crop`,
}))

export default function DealsRow() {
  const containerRef = useRef(null)

  return (
    <section id="deals" className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Top Deals for You</h3>
          <a className="text-sm text-indigo-300">View all</a>
        </div>
        <div ref={containerRef} className="relative overflow-x-auto scrollbar-none">
          <div className="flex gap-4 min-w-max pr-4">
            {items.map((it, i) => (
              <motion.div
                key={it.id}
                className="group w-56 shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={`https://picsum.photos/seed/${i}/400/300`} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                  <div className="absolute left-2 top-2 rounded-full bg-emerald-500/90 text-white text-xs px-2 py-1 shadow-lg">
                    Save {(10 + (i % 5) * 5)}%
                  </div>
                </div>
                <div className="p-3">
                  <div className="truncate text-sm">{it.title}</div>
                  <div className="mt-1 font-semibold">{it.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
