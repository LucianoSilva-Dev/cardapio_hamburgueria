import Styles from './CartItem.module.css'

function CartItem({nome, qtd, preco_unitario, SetCartItens, CartItens}){
    function excluir(){
        //ao clicar em 'remover' retira uma quantidade do carrinho
        if(qtd > 1){
            const itemIndex = CartItens.findIndex(item => item.nome === nome)
            //cópia profunda do array
            const novoCartItens = JSON.parse(JSON.stringify(CartItens))
            novoCartItens[itemIndex].qtd -= 1
            SetCartItens(novoCartItens)
            return
        }

        SetCartItens(CartItens.filter(item => item.nome !== nome))
        
    }

    return(
        <div className={Styles.box}>
            <h3>{nome}</h3>

            <div className={Styles.middle}>
                <span>(Quantidade: {qtd})</span>
                <button onClick={excluir} className={Styles.btn_remover}>Remover</button>
            </div>

            <p>R$ {preco_unitario.toFixed(2).toString().replace(".", ",")}</p>
        </div>
    )
}

export default CartItem