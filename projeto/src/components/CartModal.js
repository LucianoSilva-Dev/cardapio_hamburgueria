import React from 'react'
import Styles from './CartModal.module.css';
import CartItem from './CartItem';

function CartModal({fecharHandler, Itens, CartItens, SetCartItens}){
    let [inptBorderColor, SetInptBorderColor] = React.useState('black');
    let [inptError, SetInptError] = React.useState(false);
    let [end, SetEnd] = React.useState("")

    function montarPedidoWhats(){
        let pedido = CartItens.reduce((accumulator, item) => {
            const total_por_item = (item.qtd * item.preco_unitario).toFixed(2).toString().replace(".", ",");

            return accumulator + `Nome: ${item.nome}, Qtd: ${item.qtd}, Total: R$ ${total_por_item}\n`;
        }, "Pedido Novo!\n")
        
        //total de todos os itens
        pedido += `\nPreço total do pedido: R$ ${precoTotal().toString().replace(".", ",")}`

        //atribui o endereço
        pedido += `\nEndereço: ${end}`

        //envia para o zapzap
        fetch(`wa.me/send?phone=11969438021&text=${pedido}`)
        .then(result => {return result})
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    function finalizar_pedido(e) {
        e.preventDefault();

        const hour = new Date().getHours()

        if(CartItens.length > 0){
            if(end.length > 0){
                SetInptBorderColor("black");
                SetInptError(false)
                
                if(hour >= 18 && hour < 22){
                    montarPedidoWhats()
                }
                else{
                    alert("restaurante fechado!");
                }
            }
            else {
                SetInptBorderColor("red");
                SetInptError(true)
            }
        }
        else{
            alert("Carrinho vazio!!!")
        }
    }

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
            return preco.toFixed(2)
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
            
            <h3 className={Styles.total}>Total: {precoTotal().toString().replace(".",",")}</h3>

            <form className={Styles.bottom}>
                <h3>Endereço de entrega</h3>

                <div>
                    <input onChange={(e) => SetEnd(e.target.value)} style={{borderColor: inptBorderColor}} className={Styles.inpt_end} type="text" placeholder="Digite seu endereço completo..." />
                    {   //é mostrado apenas se houver um erro no input edereço
                        inptError && 
                        <div className={Styles.inpt_error}>Preencha o endereço completo</div>
                    }
                </div>
                

                <div className={Styles.actions}>
                    <button onClick={() => fecharHandler(false)} className={Styles.btn_fechar}>Fechar</button>
                    <button  onClick={finalizar_pedido} className={Styles.btn_finalizar}>Finalizar pedido</button>
                </div>
            </form>
        </dialog>
    )
}

export default CartModal