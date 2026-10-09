import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import content from '../content.json'

const STEP = 340 // vertical spacing between cards on desktop
const START = 380 // first card sits below the heading

const TagCard = ({ number, title, text, style, className, aosType, aosDelay, pathLength, containerRef }) => {
  const ref = useRef(null)
  const [isActive, setIsActive] = useState(false)

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!ref.current || !containerRef.current) return
    const cardTop = ref.current.getBoundingClientRect().top - containerRef.current.getBoundingClientRect().top
    const lineTip = latest * containerRef.current.getBoundingClientRect().height
    const active = lineTip >= cardTop + 50
    if (active !== isActive) setIsActive(active)
  })

  return (
    <div
      ref={ref}
      style={style}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive
          ? 'bg-[var(--accent)] shadow-[0_20px_50px_rgba(0,0,0,0.25)]'
          : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)]'
      }`}
    >
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${isActive ? 'bg-black/20' : 'bg-[#f4f4f4]'}`}>
        <span className={`text-xl font-bold mb-2 font-serif italic transition-colors duration-700 ${isActive ? 'text-white/70' : 'text-gray-400'}`}>{number}</span>
        <h3 className={`text-2xl font-black mb-3 tracking-tight transition-colors duration-700 ${isActive ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
        <p className={`text-sm leading-relaxed font-medium transition-colors duration-700 ${isActive ? 'text-white/90' : 'text-gray-500'}`}>{text}</p>
      </div>
    </div>
  )
}

// Builds a winding path that passes by each card, however many there are.
const buildPath = (count) => {
  let d = 'M 650,200'
  for (let i = 0; i < count; i++) {
    const y = START + i * STEP + 120
    const x = i % 2 === 0 ? 300 : 700
    const prevY = i === 0 ? 200 : START + (i - 1) * STEP + 120
    d += ` C ${x === 300 ? 700 : 300},${prevY + 120} ${x},${y - 120} ${x},${y}`
  }
  return d
}

const Expertise = () => {
  const { expertise } = content
  const items = expertise.items
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start center', 'end center'] })
  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 })

  const height = START + items.length * STEP + 120
  const path = buildPath(items.length)
  const rotations = ['md:rotate-6', 'md:-rotate-6', 'md:rotate-3', 'md:-rotate-3']

  return (
    <section
      id="expertise"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:[height:var(--h)]" style={{ '--h': `${height}px` }}>
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            {expertise.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            {expertise.heading}
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-sm font-medium leading-relaxed">{expertise.description}</p>
        </div>

        <svg
          className="hidden md:block absolute top-0 left-0 w-full pointer-events-none z-0"
          style={{ height }}
          viewBox={`0 0 1000 ${height}`}
          preserveAspectRatio="none"
        >
          <path d={path} fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 10" />
          <mask id="path-mask">
            <motion.path d={path} fill="none" stroke="white" strokeWidth="20" style={{ pathLength }} />
          </mask>
          <path d={path} fill="none" stroke="black" strokeWidth="2" strokeDasharray="8 10" mask="url(#path-mask)" />
        </svg>

        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pb-12 md:pb-0">
          {items.map((item, i) => {
            const right = i % 2 === 0
            return (
              <TagCard
                key={i}
                number={String(i + 1).padStart(2, '0')}
                title={item.title}
                text={item.text}
                style={{ '--top': `${START + i * STEP - 80}px` }}
                className={`md:absolute md:[top:var(--top)] ${right ? 'md:right-[8%]' : 'md:left-[8%]'} ${rotations[i % rotations.length]}`}
                aosType={right ? 'fade-left' : 'fade-right'}
                aosDelay={100 + i * 100}
                pathLength={pathLength}
                containerRef={containerRef}
              />
            )
          })}

          {expertise.closingNote && (
            <div
              data-aos="fade-in"
              data-aos-delay="600"
              className="hidden md:block absolute left-[55%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6"
              style={{ top: height - 60 }}
            >
              {expertise.closingNote}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Expertise
