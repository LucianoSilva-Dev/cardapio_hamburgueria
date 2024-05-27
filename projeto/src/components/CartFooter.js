import {FaShoppingCart} from 'react-icons/fa'
import Styles from './CartFooter.module.css';

function CartFooter({clickHandler}){
    return (
        <div className={Styles.box}>
            <button onClick={() => clickHandler(true)} className={Styles.text}>(1) veja seu carrinho <FaShoppingCart size={20} color='white'/></button>
        </div>
    )
}

export default CartFooter