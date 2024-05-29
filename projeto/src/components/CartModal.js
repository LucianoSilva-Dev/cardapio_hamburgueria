import React from 'react'
import Styles from './CartModal.module.css';
import CartItem from './CartItem';

function CartModal({fecharHandler, Itens, CartItens, SetCartItens}){
    function precoTotal() {
        if(CartItens.length > 0)
        {
            let qtds = []
            let precos = []

            CartItens.forEach(item => {
                qtds.push(item.qtd)
                precos.push(item.preco_unitario)
            })
            
            //o método de arrays reduce é util quando você precisa reduzir um array a apenas
            //um elemento. A syntax dele é a seguinte reduce(accumulator, arrayItem, actualIndex)
            //onde accmulator é a variavel qu vai guardar o valor que será retornado, 
            //arrayItem é o valor do item atual do array, e actualIndex é o indice atual do array

            //Caso você não forneça um valor inicial, ele será o indice 0 do array, então,
            //as iterações começaram a partidor do indice 1, o que pode gerar bugs

            let preco = qtds.reduce((acumulador, qtd, index) => acumulador + (qtd * precos[index]), 0) //0 = valor inicial
            return preco
        }

        return 0
        
    }

    return (
        <dialog open className={Styles.dialog}>
            <h2 className={Styles.title}>Seu Carrinho</h2>

            <div className={Styles.cart_itens}>
                {
                    Itens.length > 0 ?
                    (Itens.map((item, index) => (
                        <CartItem 
                            index={index} nome={item.nome} preco_unitario={item.preco_unitario} qtd={item.qtd}
                            SetCartItens={SetCartItens} CartItens={CartItens}
                        />
                    ))) : <p>Não há itens no seu carrinho</p>
                }
            </div>
            
            <h3 className={Styles.total}>Total: {precoTotal()}</h3>

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