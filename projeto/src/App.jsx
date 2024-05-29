import './App.css';

import Header from './components/Header';
import Menu from './components/Menu';
import CartFooter from './components/CartFooter';
import CartModal from './components/CartModal';
import { useState } from 'react';

function App() {
  let [modal, SetModal] = useState(false);
  let [cartItens, SetCartItens] = useState([])

  const menu_itens = [
    {nome: 'burguer1', dsc: 'hamburguer do tipo 1', img_path: './assets/hamb-1.png', preco: 35.50}, 
    {nome: 'burguer2', dsc: 'hamburguer do tipo 2', img_path: './assets/hamb-2.png', preco: 25.50}, 
    {nome: 'burguer3', dsc: 'hamburguer do tipo 3', img_path: './assets/hamb-3.png', preco: 31.50}, 
    {nome: 'burguer4', dsc: 'hamburguer do tipo 4', img_path: './assets/hamb-4.png', preco: 45.50},
]

  return (
    <div className="App">
      <Header />
      <Menu Itens={menu_itens} cartItens={cartItens} SetCartItens={SetCartItens}/>
      <CartFooter clickHandler={SetModal}/>

      { modal && <CartModal fecharHandler={SetModal} Itens={cartItens} 
                            CartItens={cartItens} SetCartItens={SetCartItens}
                  />
      }
    </div>
  );
}

export default App;
