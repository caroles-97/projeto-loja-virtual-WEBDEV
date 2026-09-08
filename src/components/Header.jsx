// todo component é uma função de retorna HTML

import { FaMagnifyingGlass } from "react-icons/fa6";

// IMPORTANDO A BIBLIOTECA DE ICONES: 'CORAÇÃO' DO HEADER
import { FaHeart } from "react-icons/fa";

// IMPORTANDO A BIBLIOTECA DO REACT-ROUTER
import { Link } from "react-router";
// import { useState } from "react";

const Header = ({produtosCarrinhos}) =>{

    // const [cart, setCart ] = useState(0)
    // // nome do nosso estado, método que atualiza ele = nome do hook (que vai niciar com 0)


    // criado função addCarrinho. Chamo setCart e coloco o que eu quero atualizar (set (0) + 1 )
    // const adicionarCarrinho = () => {
    //     // setCart (cart+1)
    //     // // setCart - atualizar o estado
    //     // // todo o Header é reenderizado
    //     // console.log (cart)
    //     // // console log está sempre 1 número a menos do carrinho. 

    //     setCart(prev => prev +1)
    //     // pegar estado anterior e some +1. O recomendado é usar dessa forma. 
    // }

    
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
                {/* <button onClick={adicionarCarrinho}> Add to cart </button> */}
                {/* Criado botão para adicionar ao carrinho */}
                {/* Criada função addCarrinho. Para chamar a função no momento em que o evento click acontecer é somente {}. */}

                <span className="icon-button cart">
                    🛒
                    <span className="badge">{produtosCarrinhos}</span>
                    {/* escrevendo JS no HTML  - colocar o nome do estado. Vai aparecer o nº 0 */}
                </span>
            </div>
        </header>

    )
}

// vamos exportar Header, para conseguirmos importar de outros lugares
export default Header