import { motion } from 'framer-motion'
import content from '../content.json'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } },
}

const Skills = () => {
  const { skills } = content

  return (
    <section id="skills" className="relative w-full bg-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,transparent_24%,rgba(0,0,0,.05)_25%,rgba(0,0,0,.05)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.05)_75%,rgba(0,0,0,.05)_76%,transparent_77%,transparent),linear-gradient(0deg,transparent_24%,rgba(0,0,0,.05)_25%,rgba(0,0,0,.05)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.05)_75%,rgba(0,0,0,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12"
        >
          <span className="inline-block text-xs font-semibold text-black/50 uppercase tracking-widest px-3 py-1.5 border border-black/5 rounded-full mb-3">
            {skills.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-2 tracking-tight">{skills.heading}</h2>
          <p className="text-sm text-black/60">{skills.description}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {skills.categories.map((item) => (
            <motion.div
              key={item.category}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white border border-black/5 rounded-3xl p-6 h-fit shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <h3 className="text-sm font-semibold text-black mb-4 tracking-tight">{item.category}</h3>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.08 }}
                    className="px-3 py-1.5 text-xs font-medium text-black bg-black/[0.03] border border-black/5 rounded-full transition-colors duration-300 select-none hover:text-[var(--accent)] hover:border-[var(--accent)]/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
