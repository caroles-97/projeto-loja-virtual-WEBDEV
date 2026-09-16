// Baixar extensão ES7 REACT/ Redux ..

// rafce
// criou estrutura da funçao do componente


import { use, useEffect, useState } from "react"
// import do UseEffect

const ProductsPage = () => {

  const API_URL = import.meta.env.VITE_API_URL
  // guardamos o .env VITEAPI URL dentro da variável para não precisar chamar esse nome extenso

  const[products, setProducts] = useState ([])
// como produto é dinâmico, precisamos guardar o produto na tela como ESTADO. 
// useState (varíavel), array de objetos vazios

  useEffect (() => {
    // const loadProducts = async () => {
    //   const results = await fetch ("")
    //   // para rodar informaçoes assíncronas - async await fetch
    // }
    
    fetch(`${API_URL}products/category/electronics`)  //fetch (pega a rota / produtos/ categorias/ eletronicos) -> link/produtos/eletronics -> transforma em json e guarda
    // para não ficar repetindo o URL, salvamos o VITE API URL. Importamos essa variável chamando com o API_URL e para utilizar ela usamos o fetch aqui. 


    // AO INVÊS DE USAR O async await, vamos usar o .then
    .then((results)=>results.json()) //fetch guardou em results e transformamos aqui em json
    // pega a promesa do fetch e guarda na variável (inventamos o nome results) transformando em json 

    .then((data) => setProducts(data))
    // guarda os dados

  }, [])

// TIVE QUE COMENTAR NO DIA 15/9, MAS PODE USAR ESSE EM OUTRA PAGE
  // return (
  //   // como não pode ter + de 1 elemento-pai dentro do return, criamos uma tag vazia antes: TEMOS 1 CX QUE INICIA E ACABA
  //   // <>
  //   // <h1></h1>
  //   // </>
  //   // OU COLOCAMOS O H1 DENTRO DA DIV *
    
  //   <div>
  //       <h1>Bem-vindos a página da loja</h1>

  //   </div>
  // )

  return (
    <section>
      <h1>Bem-vindos a página da loja</h1>

      <h2>Eletronics</h2>
      {products.map(produtoAtual => ( //para cada produto do prdutoAtual, faça o que está dentro do parêntese.

      //produtos.map -> percorre o array de produtos e para cada produto atual, vamos renderizar um elemento na tela.
      // products -> lista de produtos que vem do servidor. "Cesta c vários cartões de produtos" e vamos percorrer cada produto do array.
      //.map -> pega cada produto do array ("cesta") e renderiza na tela. Para cada produto do array, vamos renderizar um elemento na tela. Ex: para cada produto, criamos um cartão com o título e a imagem do produto.
      // produtoAtual -> nome que inventamos para cada produto do array.
        <div> 
          <h3>{produtoAtual.title}</h3> 
          {/* //renderiza o título do produto atual */}
          <img src={produtoAtual.image}/> 
          {/* //renderiza a imagem do produto atual */}
        </div>

      ))}
    </section>
  )
}

export default ProductsPage

