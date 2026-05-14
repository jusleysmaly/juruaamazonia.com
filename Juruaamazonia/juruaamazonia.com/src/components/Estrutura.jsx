import { copy } from '../content/copy'
import estruturaImg    from '../../assets/images/jurua-log-instalacoes-manaus-00002.jpeg'
import warehouseIcon   from '../../assets/graphics/icons/warehouse.svg'
import productIcon     from '../../assets/graphics/icons/product-management.svg'
import deliveryIcon    from '../../assets/graphics/icons/delivery.svg'
import trackingIcon    from '../../assets/graphics/icons/tracking.svg'

const iconMap = {
  'cd':           warehouseIcon,
  'temperatura':  productIcon,
  'frota':        deliveryIcon,
  'monitoramento':trackingIcon,
}

export default function Estrutura() {
  return (
    <section id="estrutura" className="section-padding bg-brand-bg">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Conteúdo */}
          <div>
            <div className="w-10 h-1 bg-brand-green mb-8 rounded-full" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-5">
              {copy.estrutura.title}
            </h2>
            <p className="text-text-main text-lg leading-relaxed mb-12">
              {copy.estrutura.text}
            </p>

            {/* Blocos */}
            <div className="grid sm:grid-cols-2 gap-6">
              {copy.estrutura.items.map(item => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-6 border border-border-light hover:shadow-sm transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-md bg-brand-bg flex items-center justify-center mb-4">
                    <img
                      src={iconMap[item.id]}
                      alt=""
                      aria-hidden="true"
                      className="w-6 h-6"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-main leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Foto */}
          <div className="relative lg:sticky lg:top-28">
            <img
              src={estruturaImg}
              alt="Estrutura da Juruá Log em Manaus"
              className="w-full h-72 lg:h-[580px] object-cover rounded-lg"
            />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-brand-green/20 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
