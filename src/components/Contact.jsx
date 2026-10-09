import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import content from '../content.json'

const emptyForm = { name: '', email: '', message: '' }

const Contact = () => {
  const { contact, profile } = content
  const ref = useRef(null)
  const [form, setForm] = useState(emptyForm)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }))

  // No backend needed: the message opens in the visitor's email app, addressed to you.
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setForm(emptyForm)
  }

  const socials = (profile.socials || []).filter((s) => s.url)
  const inputClass =
    'w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none'

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900">
      <motion.div style={{ y }} className="absolute inset-0 flex justify-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12">
        <h2
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          {contact.bigText}
        </h2>
      </motion.div>

      <div className="relative z-10 w-full flex justify-end items-end">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-[var(--accent)] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white"
        >
          <div className="text-xs font-bold tracking-[0.2em] mb-6 uppercase opacity-90">{contact.label}</div>
          <p className="text-white/90 font-medium max-w-xl mb-12">{contact.intro}</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-12 w-full">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              <div className="flex-1 flex flex-col gap-10">
                <input type="text" id="name" value={form.name} onChange={handleChange} placeholder="Your Name" required className={inputClass} />
                <input type="email" id="email" value={form.email} onChange={handleChange} placeholder="Your Email" required className={inputClass} />
              </div>
              <div className="flex-1 flex flex-col">
                <textarea
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Type your message here"
                  required
                  className={`${inputClass} h-full min-h-[120px] resize-none`}
                ></textarea>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8">
              <div className="flex flex-col gap-2 text-sm font-semibold">
                <a href={`mailto:${profile.email}`} className="underline underline-offset-4 hover:opacity-80">{profile.email}</a>
                {profile.phone && (
                  <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="hover:opacity-80">{profile.phone}</a>
                )}
                {socials.length > 0 && (
                  <div className="flex gap-4 mt-1">
                    {socials.map((s) => (
                      <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:opacity-80">
                        {s.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[var(--accent)] transition-all duration-300 group self-start md:self-auto"
              >
                Send
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
