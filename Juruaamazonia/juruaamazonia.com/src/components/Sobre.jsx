import { copy } from '../content/copy'
import sobreImg from '../../assets/images/jurua-log-instalacoes-manaus-00001.jpeg'

export default function Sobre() {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Texto */}
          <div>
            <div className="w-10 h-1 bg-brand-green mb-8 rounded-full" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8">
              {copy.sobre.title}
            </h2>
            <div className="space-y-5">
              {copy.sobre.paragraphs.map((p, i) => (
                <p key={i} className="text-text-main text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Foto */}
          <div className="relative">
            <img
              src={sobreImg}
              alt="Instalações da Juruá Log em Manaus"
              className="w-full h-80 lg:h-[480px] object-cover rounded-lg"
            />
            {/* Detalhe decorativo */}
            <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-brand-green/15 rounded-lg -z-10" />
            <div className="absolute -top-5 -right-5 w-32 h-32 bg-brand-bg rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
