import { copy } from '../content/copy'

export default function Segmentos() {
  return (
    <section id="segmentos" className="section-padding bg-brand-bg">
      <div className="container-max">

        {/* Cabeçalho */}
        <div className="max-w-2xl mb-12">
          <div className="w-10 h-1 bg-brand-green mb-8 rounded-full" />
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-5">
            {copy.segmentos.title}
          </h2>
          <p className="text-text-main text-lg leading-relaxed">
            {copy.segmentos.text}
          </p>
        </div>

        {/* Tags de segmentos */}
        <div className="flex flex-wrap gap-3">
          {copy.segmentos.items.map((item, i) => (
            <span
              key={i}
              className="inline-block bg-white border border-border-light text-gray-900 text-sm font-medium px-5 py-2.5 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
