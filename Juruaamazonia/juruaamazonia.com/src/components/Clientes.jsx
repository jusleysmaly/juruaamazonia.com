import React from "react";

const clientes = [
  { nome: "Giraffas", logo: "/assets/clientes/giraffas.png" },
  { nome: "Pizza Hut", logo: "/assets/clientes/pizza-hut.png" },
  { nome: "Subway", logo: "/assets/clientes/subway.png" },
  { nome: "Bob's", logo: "/assets/clientes/bobs.png" },
  { nome: "Burger King", logo: "/assets/clientes/burger-king.png" },
  { nome: "Cervejaria Panaí", logo: "/assets/clientes/cerveja-panai.png" },
  { nome: "Cinépolis", logo: "/assets/clientes/cinepolis.png" },
  { nome: "Juruá Pescados", logo: "/assets/clientes/jurua-pescados.png" },
  { nome: "McDonald's", logo: "/assets/clientes/mcdonalds.png" },
  { nome: "Uatumã", logo: "/assets/clientes/uatuma.png" },
  { nome: "Cinemark", logo: "/assets/clientes/cinemark.png" },
];

export default function Clientes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">
          Empresas que confiam na Juruá Log
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
          {clientes.map((cliente, i) => (
            <div key={i} className="flex justify-center">
              
              {/* CÍRCULO BRANCO */}
              <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition">
                
                {/* LOGO */}
                <img
                  src={cliente.logo}
                  alt={cliente.nome}
                  className="max-h-14 md:max-h-28 max-w-[160px] md:max-w-[100px] object-contain opacity-80 hover:opacity-100 transition"
                />

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}