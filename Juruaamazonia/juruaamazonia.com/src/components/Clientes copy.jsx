import copy from '../content/copy'

export default function Clientes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-max">
        <h2 className="text-2xl font-semibold mb-8">
          Empresas que confiam na Juruá Log
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {copy.clientes.map((cliente, i) => (
            <img
              key={i}
              src={cliente.logo}
              alt={cliente.nome}
              className="h-10 md:h-14 lg:h-16 object-contain mx-auto opacity-60 hover:opacity-100 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}