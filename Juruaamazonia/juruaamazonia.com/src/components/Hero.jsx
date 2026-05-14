import { copy } from '../content/copy'
import heroImg from '../../assets/images/jurua-log-instalacoes-manaus-00003.jpeg'
import shape from '../../assets/graphics/shapes/shapes_1.svg'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">

      {/* Background image com overlay escuro */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImg}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/40" />
      </div>

      {/* Marca decorativa — canto inferior direito, baixa opacidade */}
      <img
        src={shape}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-72 lg:w-96 opacity-10 pointer-events-none select-none"
      />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
        <div className="max-w-2xl">

          <p className="text-brand-green font-semibold text-xs uppercase tracking-widest mb-6">
            Manaus · Amazonas · Região Norte
          </p>

          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {copy.hero.headline}
          </h1>

          <p className="text-xl text-white/80 font-medium leading-relaxed mb-4">
            {copy.hero.subheadline}
          </p>

          <p className="text-base text-white/60 leading-relaxed mb-10 max-w-lg">
            {copy.hero.text}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center bg-brand-green text-white font-semibold px-8 py-4 rounded-md hover:bg-brand-green-dark transition-colors duration-200"
            >
              {copy.hero.ctaPrimary}
            </a>
            <a
              href="#estrutura"
              className="inline-flex items-center justify-center border border-white/40 text-white font-semibold px-8 py-4 rounded-md hover:border-white/80 hover:bg-white/10 transition-colors duration-200"
            >
              {copy.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-xs tracking-widest uppercase">Saiba mais xxx</span>
        <svg className="w-4 h-4 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
