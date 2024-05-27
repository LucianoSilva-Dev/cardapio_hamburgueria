import './App.css';

import Header from './components/Header';
import Menu from './components/Menu';
import CartFooter from './components/CartFooter';
import CartModal from './components/CartModal';
import { useState } from 'react';

function App() {
  let [modal, SetModal] = useState(false);

  return (
    <div className="App">
      <Header />
      <Menu />
      <CartFooter clickHandler={SetModal}/>
      { modal && <CartModal fecharHandler={SetModal}/>}
    </div>
  );
}

export default App;
