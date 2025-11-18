import React from 'react'
import { motion } from 'framer-motion'

const products = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  title: `Best Seller ${i + 1}`,
  price: `$${(i + 4) * 50}`,
  img: `https://picsum.photos/seed/best${i}/600/600`,
}))

export default function BestGrid() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-lg font-semibold mb-6">Best Sellers</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative">
                <img src={p.img} alt={p.title} className="w-full h-48 object-cover transition duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="p-3">
                <div className="truncate text-sm">{p.title}</div>
                <div className="font-semibold">{p.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
