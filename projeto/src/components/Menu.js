import Styles from './Menu.module.css'
import MenuItem from './MenuItem'

function Menu({Itens, cartItens, SetCartItens}){
    return (
        <section className={Styles.menu}>
            <div className={Styles.title}><h3>Conheça nosso menu</h3></div>

            <div className={Styles.menu_box}>
                {   
                    //renderiza varios <MenuItem /> com base na lista de objetos "Itens"
                    //definida no App.jsx

                    Itens.map(item => (
                        <MenuItem nome={item.nome} dsc={item.dsc} img_path={item.img_path} 
                                  preco_unitario={item.preco} cartItens={cartItens} 
                                  SetCartItens={SetCartItens}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Menu