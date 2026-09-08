import './App.css'

import Benefits from './components/Benefits'
import Categories from './components/Categories'
// import Footer from './components/Footer'    - tirei pq estou reutilizando o cod do layout 
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Products from './components/Products'


import { useState } from "react"


const App = () => {

  const [cart, setCart ] = useState(0)
      // nome do nosso estado, método que atualiza ele = nome do hook (que vai niciar com 0)
  
  return (
    <div className="app">
      {/* // COMPONENTES  */}
      {/* <Header /> - tirei pq estou reutilizando o cod do layout  */}


      <Header produtosCarrinhos={cart}/>

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
      <Products setCart={setCart} />
      <Benefits />
      {/* <Footer />  - tirei pq estou reutilizando o cod do layout  */}


    </div>
  )
}

export default App
