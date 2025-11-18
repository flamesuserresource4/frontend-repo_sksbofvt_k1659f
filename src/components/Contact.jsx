import React from 'react'

function Contact() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-white">Get in touch</h3>
            <p className="mt-3 text-slate-300">Have questions about StoreFlow? We’d love to chat.</p>
            <div className="mt-6 space-y-2 text-slate-300">
              <p>Email: hello@storeflow.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p className="text-sm text-slate-400">Trusted by 500+ stores</p>
            </div>
          </div>

          {/* Right form */}
          <div className="md:col-span-3">
            <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-300">Name</label>
                  <input className="mt-1 w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500/60" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="text-sm text-slate-300">Email</label>
                  <input type="email" className="mt-1 w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500/60" placeholder="jane@company.com" />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-300">Subject</label>
                <input className="mt-1 w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500/60" placeholder="Partnership inquiry" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Message</label>
                <textarea rows={5} className="mt-1 w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-indigo-500/60" placeholder="Tell us a bit about your needs..." />
              </div>
              <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 px-5 py-3 text-white shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/40 transition-transform hover:scale-[1.01]">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
