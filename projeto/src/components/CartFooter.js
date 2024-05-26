import {FaShoppingCart} from 'react-icons/fa'
import Styles from './CartFooter.module.css';

function CartFooter(){
    return (
        <div className={Styles.box}>
            <p className={Styles.text}>(1) veja seu carrinho </p>
            <FaShoppingCart size={20} color='white'/>
        </div>
    )
}

export default CartFooter