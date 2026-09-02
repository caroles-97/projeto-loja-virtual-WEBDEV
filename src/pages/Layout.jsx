import { Outlet } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Layout = () => {
  return (
    <div className="app">
        <Header />
        <Outlet />
        {/* Outlet é um espaço vazio que pode ser preenchido pelos filhos */}
        <Footer/>      
    </div>
  )
}

export default Layout
