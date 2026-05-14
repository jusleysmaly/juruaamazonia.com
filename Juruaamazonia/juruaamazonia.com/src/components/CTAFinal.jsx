import { copy } from '../content/copy'

export default function CTAFinal() {
  return (
    <section id="contato" className="section-padding bg-brand-green">
      <div className="container-max text-center">

        <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-5 max-w-2xl mx-auto">
          {copy.ctaFinal.title}
        </h2>

        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          {copy.ctaFinal.text}
        </p>

        <a
          href="mailto:contato@juruaamazonia.com"
          className="inline-flex items-center justify-center bg-white text-brand-green font-bold px-10 py-4 rounded-md hover:bg-gray-50 transition-colors duration-200 text-base"
        >
          {copy.ctaFinal.button}
        </a>
      </div>
    </section>
  )
}
