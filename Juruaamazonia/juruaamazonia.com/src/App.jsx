import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import Sobre           from './components/Sobre'
import Servicos        from './components/Servicos'
import ComoFunciona    from './components/ComoFunciona'
import Estrutura       from './components/Estrutura'
import Diferenciais    from './components/Diferenciais'
import Segmentos       from './components/Segmentos'
import Sustentabilidade from './components/Sustentabilidade'
import CTAFinal        from './components/CTAFinal'
import Footer          from './components/Footer'
import Clientes       from './components/Clientes'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <ComoFunciona />
        <Estrutura />
        <Diferenciais />
        <Clientes />
        <Segmentos />
        <Sustentabilidade />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
