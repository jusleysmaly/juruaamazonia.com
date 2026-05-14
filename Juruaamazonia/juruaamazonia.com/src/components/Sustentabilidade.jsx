import { copy } from '../content/copy'
import amazonImg from '../../assets/images/freepik__aerial-view-of-sustainable-logistics-in-the-amazon__88989.jpeg'

export default function Sustentabilidade() {
  return (
    <section id="sustentabilidade" className="relative section-padding overflow-hidden">

      {/* Background image com overlay escuro-verde */}
      <div className="absolute inset-0">
        <img
          src={amazonImg}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/70 to-brand-green-dark/60" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 container-max">
        <div className="max-w-xl">
          <div className="w-10 h-1 bg-brand-green mb-8 rounded-full" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-8">
            {copy.sustentabilidade.title}
          </h2>
          <div className="space-y-4">
            {copy.sustentabilidade.paragraphs.map((p, i) => (
              <p key={i} className="text-white/75 text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
