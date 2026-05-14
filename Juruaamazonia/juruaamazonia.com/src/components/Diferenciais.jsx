import { copy } from '../content/copy'

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Cabeçalho */}
          <div>
            <div className="w-10 h-1 bg-brand-green mb-8 rounded-full" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {copy.diferenciais.title}
            </h2>
          </div>

          {/* Lista em 2 colunas */}
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {copy.diferenciais.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-text-main text-sm font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
