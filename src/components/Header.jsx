// todo component é uma função de retorna HTML

import { FaMagnifyingGlass } from "react-icons/fa6";

// IMPORTANDO A BIBLIOTECA DE ICONES: 'CORAÇÃO' DO HEADER
import { FaHeart } from "react-icons/fa";

// IMPORTANDO A BIBLIOTECA DO REACT-ROUTER
import { Link } from "react-router";

const Header = () =>{
    return (
        <header className="header">
            <div className="logo">🛍️ ReactShop</div>

            <ul className="nav">
                {/* SUBSTITUIREMOS O 'a href' pelo 'link to' para criar link */}
                <li><Link to="/">Início</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>

            <div className="header-actions">
                <span className="icon-button">
                    <FaMagnifyingGlass/>
                    
                </span>
                <span className="icon-button">
                    <FaHeart/>
                </span>
                <span className="icon-button cart">
                    🛒
                    <span className="badge">3</span>
                </span>
            </div>
        </header>

    )
}

// vamos exportar Header, para conseguirmos importar de outros lugares
export default Header