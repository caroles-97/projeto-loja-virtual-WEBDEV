import './App.css'

import Benefits from './components/Benefits'
import Categories from './components/Categories'
// import Footer from './components/Footer'    - tirei pq estou reutilizando o cod do layout 
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Products from './components/Products'

const App = () => {
  return (
    <div className="app">
      {/* // COMPONENTES  */}
      {/* <Header /> - tirei pq estou reutilizando o cod do layout  */}
      <HeroSection
        titulo = "Ofertas imperdíveis para você"
        subtitulo="Até 30% de desconto em produtos selecionados. Aproveite!"
        textoBotao="Ver ofertas" 
        />
      <HeroSection
        titulo = "Aproveite, meu caro aluno"
        subtitulo="Até 30% de desconto em produtos selecionados. Aproveite!"
        textoBotao="Ver ofertas" 
        />
      <Categories />
      <Products />
      <Benefits />
      {/* <Footer />  - tirei pq estou reutilizando o cod do layout  */}


    </div>
  )
}

export default App
