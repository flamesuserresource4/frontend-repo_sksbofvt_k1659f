import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    highlight: false,
    features: [
      'Basic analytics',
      '100 orders / month',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$29',
    highlight: true,
    features: [
      'Advanced analytics',
      'Unlimited orders',
      'Priority support',
      'API access',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    highlight: false,
    features: [
      'SLA & SSO',
      'Dedicated manager',
      'Custom integrations',
    ],
  },
]

function Toggle() {
  const [yearly, setYearly] = React.useState(true)
  return (
    <div className="flex items-center justify-center gap-3">
      <span className={`text-sm ${yearly ? 'text-slate-400' : 'text-white'}`}>Monthly</span>
      <button onClick={() => setYearly(!yearly)} className="relative h-8 w-14 rounded-full bg-white/10 ring-1 ring-white/20">
        <span className={`absolute top-1 h-6 w-6 rounded-full bg-white transition-all ${yearly ? 'left-7' : 'left-1'}`} />
      </button>
      <span className={`text-sm ${yearly ? 'text-white' : 'text-slate-400'}`}>Yearly</span>
    </div>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300">Choose a plan that fits your growth stage.</p>
          <div className="mt-6">
            <Toggle />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className={`relative rounded-2xl border p-6 backdrop-blur bg-white/5 border-white/10 ${plan.highlight ? 'ring-2 ring-indigo-400/60 shadow-2xl shadow-indigo-500/20 scale-[1.02]' : ''}`}>
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">Best value</span>
              )}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <div className="text-2xl font-bold text-white">{plan.price}<span className="text-sm font-normal text-slate-300">{plan.price !== 'Custom' && '/mo'}</span></div>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-slate-200">
                    <span className="rounded-md bg-emerald-500/15 p-1.5 ring-1 ring-emerald-500/30">
                      <Check className="h-4 w-4 text-emerald-400" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 ${plan.highlight ? 'bg-gradient-to-tr from-indigo-600 to-blue-500 text-white' : 'border border-white/15 text-white/90 hover:bg-white/10'}`}>Choose {plan.name}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
