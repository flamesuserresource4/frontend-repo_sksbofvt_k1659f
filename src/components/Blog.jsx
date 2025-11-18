import React from 'react'
import { motion } from 'framer-motion'

const posts = [
  { title: 'How AI is changing inventory planning', excerpt: 'Predict, replenish, and reduce stockouts with machine learning.', image: '/placeholder.svg' },
  { title: 'Scaling payments globally', excerpt: 'Lessons from processing millions of transactions.', image: '/placeholder.svg' },
  { title: 'Designing performant storefronts', excerpt: 'UX patterns that convert without sacrificing speed.', image: '/placeholder.svg' },
]

function Blog() {
  return (
    <section id="blog" className="relative py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Latest from the catalog</h2>
          <p className="mt-3 text-slate-300">Insights and stories from the StoreFlow team.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
              <div className="h-40 w-full bg-gradient-to-br from-slate-700 to-slate-800" />
              <div className="p-6">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="mt-2 text-slate-300 text-sm">{p.excerpt}</p>
                <a href="#" className="mt-4 inline-flex items-center text-indigo-300 hover:text-indigo-200">Read more →</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
