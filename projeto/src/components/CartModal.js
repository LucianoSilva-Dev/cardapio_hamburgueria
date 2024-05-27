import React from 'react'
import Styles from './CartModal.module.css';
import CartItem from './CartItem';

function CartModal({fecharHandler}){

    return (
        <dialog open className={Styles.dialog}>
            <h2 className={Styles.title}>Seu Carrinho</h2>

            <div className={Styles.cart_itens}>
                <CartItem />
                <CartItem />
            </div>

            <form action="" className={Styles.bottom}>
                <h3>Endereço de entrega</h3>
                <input className={Styles.inpt_end} type="text" placeholder="Digite seu endereço completo..." />

                <div className={Styles.actions}>
                    <button onClick={() => fecharHandler(false)} className={Styles.btn_fechar}>Fechar</button>
                    <button onClick={() => fecharHandler(false)} className={Styles.btn_finalizar}>Finalizar pedido</button>
                </div>
                
            </form>
        </dialog>
    )
}

export default CartModal