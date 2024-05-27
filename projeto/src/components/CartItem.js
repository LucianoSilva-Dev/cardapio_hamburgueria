import Styles from './CartItem.module.css'

function CartItem(){
    return(
        <div className={Styles.box}>
            <h3>Cheese Burguer</h3>

            <div className={Styles.middle}>
                <span>Quantidade: 10</span>
                <button className={Styles.btn_remover}>Remover</button>
            </div>

            <p>R$ 32,50</p>
        </div>
    )
}

export default CartItem