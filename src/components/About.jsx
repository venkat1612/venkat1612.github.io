import content from '../content.json'
import { asset, initials } from '../asset'

const About = () => {
  const { about, profile } = content

  return (
    <section id="about" className="bg-[var(--accent)] pt-28 pb-40 px-6 md:px-12 w-full relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* ID badge on a lanyard */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black -translate-x-1/2 z-0"></div>
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full"></div>
              </div>
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 relative">
                {profile.photo ? (
                  <img src={asset(profile.photo)} alt={profile.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-black">
                    <span className="text-7xl font-black text-white tracking-tighter">{initials(profile.name)}</span>
                    <span className="mt-2 text-[10px] tracking-[0.3em] uppercase text-white/50">Add your photo</span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 pt-10">
                  <p className="text-white font-black text-lg leading-tight">{profile.name}</p>
                  <p className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mt-1">{profile.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white relative z-20">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{about.heading}</h2>
          <p className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-white/95">
            Hi, my name is{' '}
            <span className="text-black text-xl font-black mx-1 tracking-wide uppercase">{profile.name}</span>, {about.intro}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {about.stats.map((stat, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={300 + i * 150}
                className="border-l-4 border-black pl-4"
              >
                <p className="text-4xl md:text-5xl font-black text-black leading-none">{stat.value}</p>
                <p className="text-sm font-bold text-white/90 mt-2 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Torn paper divider */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="absolute top-24 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
      </div>
      <div className="hidden md:block absolute bottom-32 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
      </div>
    </section>
  )
}

export default About
