import { motion } from 'framer-motion'
import content from '../content.json'

const Experience = () => {
  const { experience } = content

  return (
    <section id="experience" className="bg-[#0a0a0a] text-white py-24 md:py-32 px-6 md:px-12 w-full relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div data-aos="fade-up" className="mb-16">
          <span className="inline-block text-xs font-semibold text-white/60 uppercase tracking-widest px-3 py-1.5 border border-white/15 rounded-full mb-4">
            {experience.badge}
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">{experience.heading}</h2>
        </div>

        <ol className="relative border-l-2 border-white/10 ml-2 md:ml-4">
          {experience.jobs.map((job, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-16 last:mb-0 pl-8 md:pl-12 relative"
            >
              <span className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-[var(--accent)] ring-8 ring-[#0a0a0a]" />
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
                <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                  {job.role} <span className="text-[var(--accent)]">@</span> {job.company}
                </h3>
                <span className="text-sm font-mono text-white/60 whitespace-nowrap">{job.period}</span>
              </div>
              <p className="text-sm text-white/50 font-semibold mb-4">
                {job.location}
                {job.project && <> · Project: <span className="text-white/80">{job.project}</span></>}
              </p>
              {job.summary && <p className="text-white/75 leading-relaxed mb-5 max-w-3xl">{job.summary}</p>}
              {job.highlights?.length > 0 && (
                <ul className="space-y-2.5 mb-6 max-w-3xl">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-sm md:text-base text-white/85 leading-relaxed">
                      <span className="text-[var(--accent)] font-black mt-0.5">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
              {job.tech?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
