import content from '../content.json'

const Certifications = () => {
  const { certifications } = content

  return (
    <section id="certifications" className="bg-[#f4f4f4] py-20 md:py-28 px-6 md:px-12 w-full">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-12">
          <span className="inline-block text-xs font-semibold text-black/50 uppercase tracking-widest px-3 py-1.5 border border-black/10 rounded-full mb-3">
            {certifications.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">{certifications.heading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.items.map((item, i) => {
            const Card = item.link ? 'a' : 'div'
            return (
              <Card
                key={i}
                href={item.link || undefined}
                target={item.link ? '_blank' : undefined}
                rel={item.link ? 'noreferrer' : undefined}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className="group bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 flex gap-6 items-start"
              >
                <span className="shrink-0 w-14 h-14 rounded-2xl bg-[var(--accent)] text-white flex items-center justify-center text-2xl font-black">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl font-black text-black tracking-tight">{item.title}</h3>
                  <p className="text-sm text-black/60 font-medium mt-1">
                    {item.issuer}
                    {item.year && ` · ${item.year}`}
                  </p>
                  {item.link && (
                    <span className="inline-block mt-3 text-xs font-bold text-[var(--accent)] underline underline-offset-4">View credential</span>
                  )}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Certifications
