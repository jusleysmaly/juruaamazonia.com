import { copy } from '../content/copy'

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="section-padding bg-white">
      <div className="container-max">

        {/* Cabeçalho */}
        <div className="max-w-2xl mb-16">
          <div className="w-10 h-1 bg-brand-green mb-8 rounded-full" />
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-5">
            {copy.comoFunciona.title}
          </h2>
          <p className="text-text-main text-lg leading-relaxed">
            {copy.comoFunciona.description}
          </p>
        </div>

        {/* Fluxo de etapas */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
          {copy.comoFunciona.steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-4">

              {/* Número */}
              <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-brand-green text-white font-bold text-lg flex-shrink-0">
                {index + 1}
                {/* Linha conectora (não na última) */}
                {index < copy.comoFunciona.steps.length - 1 && (
                  <div className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 w-full h-px bg-border-light ml-2" />
                )}
              </div>

              <p className="text-sm font-semibold text-gray-900 leading-snug max-w-[120px]">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
