import Styles from './MenuItem.module.css';
import {FaCartPlus} from 'react-icons/fa';

function MenuItem() {
    return(
        <div className={Styles.menu_item}>
            <img className={Styles.img} src="./assets/hamb-2.png" />

            <div className={Styles.infos}>
                <div>
                    <p className={Styles.name}>Cheese Burger Duplo</p>
                    <p className={Styles.dsc}>Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa</p>
                </div>
                

                <div className={Styles.bottom}>
                    <p className={Styles.price}>R$ 35,00</p>
                    <button className={Styles.add_to_cart}><FaCartPlus size={20} color='white'/></button>
                </div>
                
            </div>
        </div>
    )
}

export default MenuItem