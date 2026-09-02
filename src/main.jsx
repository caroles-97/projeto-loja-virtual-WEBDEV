import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// importando rotas
import { createBrowserRouter } from "react-router"; 
import { RouterProvider } from "react-router/dom";

import './index.css'
import App from './App.jsx'
import ProductsPage from './pages/ProductsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { MdContactPage } from 'react-icons/md';
import Layout from './pages/Layout.jsx';

// const da rota - função: guardar o que o BrowserRoute cria dentro da variável 'router'
// função que recebe array de objetos 
const router = createBrowserRouter([
  {
    // toda vez que acessar a barra / . Aqui vamos reutilizar o elemento (header e footer)
    path: "/",
    element: <Layout/>,
    // o elemento / abre o Layout . Children é filho do Layout
    children: [
      // abriu o Layout, o primeiro elemento vai que vai abrir é o index
      {index: true, element: <App/>}, 
      {path: "/produtos", element: <ProductsPage/>},
      {path: "/contato", element: <ContactPage/>}
    ]
  },
  // SUBSTITUI /produtos + /contato SEGUINDO A ROTA DO LAYOUT
  // {
  //   // toda vez que acessar a barra /produtos 
  //   path: "/produtos",
  //   element: <ProductsPage />,
  // },

  // {
  //   // toda vez que acessar a barra /contato, vai abrir o elemento
  //   path: "/contato",
  //   element: <ContactPage/>,
  // },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* //StrictMode é um modelo de segurança do React */}
    {/* <App /> */}
    
    <RouterProvider router={router} />

  </StrictMode>,
)


