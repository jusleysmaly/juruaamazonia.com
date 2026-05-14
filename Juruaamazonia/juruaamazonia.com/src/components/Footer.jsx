import { copy } from '../content/copy'
import logoMark from '../../assets/brand/jurua-logo.svg'

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-14">
      <div className="container-max">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">

          {/* Marca */}
          <div>
            <img
              src={logoMark}
              alt="Juruá Log"
              className="w-16 h-16 rounded-lg mb-4"
            />
            <p className="text-white font-bold text-lg leading-tight">{copy.footer.company}</p>
            <p className="text-white/50 text-sm mt-1">{copy.footer.location}</p>
          </div>

          {/* Navegação */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-5">
              Navegação
            </p>
            <ul className="space-y-3">
              {[
                { label: 'Serviços',      href: '#servicos' },
                { label: 'Como funciona', href: '#como-funciona' },
                { label: 'Estrutura',     href: '#estrutura' },
                { label: 'Diferenciais',  href: '#diferenciais' },
                { label: 'Contato',       href: '#contato' },
              ].map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-5">
              Contato
            </p>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href={`https://${copy.footer.website}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {copy.footer.website}
                </a>
              </li>
              <li>{copy.footer.phone}</li>
              <li>{copy.footer.email}</li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} {copy.footer.company}. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">
            {copy.footer.location}
          </p>
        </div>
      </div>
    </footer>
  )
}
