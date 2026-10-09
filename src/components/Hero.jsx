import { useRef, useState } from 'react'
import content from '../content.json'
import { asset } from '../asset'

const Hero = () => {
  const { hero, profile } = content
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
    if (videoRef.current.paused) videoRef.current.play()
  }

  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black">
      {hero.video ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={asset(hero.video)}
        />
      ) : (
        <div className="absolute inset-0 hero-fallback z-0">
          <div className="absolute inset-0 hero-grid" />
          <pre
            aria-hidden="true"
            className="hidden md:block absolute right-[6%] bottom-[14%] text-white/25 text-sm leading-6 font-mono select-none"
          >{`@RestController
@RequestMapping("/payments")
public class PaymentController {

  @PostMapping
  @CircuitBreaker(name = "gateway")
  public Receipt pay(@RequestBody Payment p) {
    return orchestrator.route(p);
  }
}`}</pre>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent z-10 pointer-events-none" />

      <div className="absolute inset-0 z-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-start w-full h-full pt-28 md:pt-[12%]">
        <div className="flex flex-col items-start text-left max-w-lg lg:max-w-2xl w-full">
          <p data-aos="fade-up" className="text-white/80 text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-4">
            {profile.name} · {profile.location}
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="50"
            className="text-white text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight leading-[1.05]"
          >
            {hero.greeting} <br />
            {hero.headline}
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/90 text-sm md:text-base lg:text-lg font-medium mb-8 max-w-md leading-relaxed"
          >
            {hero.subheading}
          </p>
          <div data-aos="fade-up" data-aos-delay="400" className="flex flex-wrap items-center gap-4">
            <a
              href={hero.primaryButton.link}
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-white text-black font-bold hover:bg-neutral-100 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              {hero.primaryButton.label}
            </a>
            <a
              href={hero.secondaryButton.link}
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-black/10 border border-white text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5"
            >
              {hero.secondaryButton.label}
            </a>
            {profile.resumeFile && (
              <a
                href={asset(profile.resumeFile)}
                download
                className="text-xs md:text-sm text-white font-bold underline underline-offset-4 hover:opacity-80"
              >
                Download Resume
              </a>
            )}
          </div>
        </div>

        {hero.video && (
          <button
            data-aos="zoom-in"
            data-aos-delay="600"
            onClick={toggleMute}
            className="mt-12 md:mt-2 flex flex-col items-center gap-2 group"
          >
            <span className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:bg-white transition-all duration-300 shadow-xl">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                {isMuted ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l-2.25 2.25M19.5 12l2.25-2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28-.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                )}
              </svg>
            </span>
            <span className="text-white text-[10px] font-extrabold tracking-widest uppercase opacity-60 group-hover:opacity-100">
              {isMuted ? 'Unmute Reel' : 'Mute Sound'}
            </span>
          </button>
        )}
      </div>

      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none animate-bounce">
        <svg className="w-5 h-5 text-white opacity-70" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
