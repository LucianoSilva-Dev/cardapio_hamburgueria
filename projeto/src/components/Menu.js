import Styles from './Menu.module.css'
import MenuItem from './MenuItem'

function Menu(){
    return (
        <section className={Styles.menu}>
            <div className={Styles.title}><h3>Conheça nosso menu</h3></div>

            <div className={Styles.menu_box}>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
            
        </section>
    )
}

export default Menu