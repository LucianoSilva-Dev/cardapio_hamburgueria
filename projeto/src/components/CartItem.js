import Styles from './CartItem.module.css'

function CartItem({nome, qtd, preco_unitario, SetCartItens, CartItens}){
    let total = (preco_unitario * qtd).toString().replace(".",",")

    function excluir(){
        SetCartItens(CartItens.filter(item => item.nome != nome))
    }

    return(
        <div className={Styles.box}>
            <h3>{nome}</h3>

            <div className={Styles.middle}>
                <span>(Quantidade: {qtd})</span>
                <button onClick={excluir} className={Styles.btn_remover}>Remover</button>
            </div>

            <p>R$ {total}</p>
        </div>
    )
}

export default CartItem