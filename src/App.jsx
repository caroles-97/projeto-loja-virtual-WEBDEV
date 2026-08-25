import './App.css'

import Benefits from './components/Benefits'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Products from './components/Products'

const App = () => {
  return (
    <div className="app">

      <Header />
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
      <Footer />  

    </div>
  )
}

export default App
