// todo component é uma função de retorna HTML

import { FaMagnifyingGlass } from "react-icons/fa6";

// IMPORTANDO A BIBLIOTECA DE ICONES: 'CORAÇÃO' DO HEADER
import { FaHeart } from "react-icons/fa";

// IMPORTANDO A BIBLIOTECA DO REACT-ROUTER
import { Link } from "react-router";
import { useState } from "react";

const Header = () =>{

    const [cart, setCart ] = useState(0)
    // nome do nosso estado, método que atualiza ele = nome do hook (que vai niciar com 0)

    
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
                    <span className="badge">{cart}</span>
                    {/* escrevendo JS no HTML  - colocar o nome do estado. Vai aparecer o nº 0 */}
                </span>
            </div>
        </header>

    )
}

// vamos exportar Header, para conseguirmos importar de outros lugares
export default Header