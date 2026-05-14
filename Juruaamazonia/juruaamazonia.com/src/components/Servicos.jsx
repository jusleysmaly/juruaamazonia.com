import { copy } from '../content/copy'
import warehouseIcon from '../../assets/graphics/icons/warehouse.svg'
import timeTrackingIcon from '../../assets/graphics/icons/time-tracking.svg'
import containerIcon from '../../assets/graphics/icons/container-loading.svg'
import distributionIcon from '../../assets/graphics/icons/distribuition.svg'

const iconMap = {
  armazenagem: warehouseIcon,
  'cadeia-frios': timeTrackingIcon,
  'cross-docking': containerIcon,
  distribuicao: distributionIcon,
}

export default function Servicos() {
  return (
    <section id="servicos" className="section-padding bg-brand-bg">
      <div className="container-max">

        <div className="max-w-xl mb-14">
          <div className="w-10 h-1 bg-brand-green mb-8 rounded-full" />
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {copy.servicos.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.servicos.items.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-lg p-8 flex flex-col items-center text-center gap-5 border border-border-light hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <img
                  src={iconMap[item.id]}
                  alt=""
                  aria-hidden="true"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>

              <div>
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-text-main leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}