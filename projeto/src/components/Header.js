import Styles from './Header.module.css'
import React from 'react'
function Header(){
    //começa fechado
    let [isOpen, SetIsOpen] = React.useState({backgroundColor: "#ff3131", color: "black"})

    function VerifyRestaurantOpen(){
        const hour = new Date().getHours()
        if (hour >= 18 && hour < 22){
            SetIsOpen({backgroundColor: "#54CC0A", color: "white"})
        }
    }

    React.useEffect(() => {
        VerifyRestaurantOpen(); // Chama a função para verificar o horário de funcionamento
      }, []); // [] == executa a função apenas um vez no inicio do app
              // nada == executa sempre que algo mudar
              // [item1, item2] == executa sempre que um dos itens mudar

    return(
        <header className={Styles.header}>
            <img className={Styles.logo} src="./assets/hamb-1.png" alt="" />
            <h1 className={Styles.title}>Red Burguer</h1>
            <p className={Styles.end}>Rua dev sucesso, 12, Campo Grande, MS</p>
            <div style={isOpen} className={Styles.div}>Seg á Dom - 18:00 as 22:00</div>
        </header>
    )
}

export default Header