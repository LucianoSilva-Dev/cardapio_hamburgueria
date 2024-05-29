import Styles from './MenuItem.module.css';
import {FaCartPlus} from 'react-icons/fa';

function MenuItem({nome, img_path, dsc, preco_unitario, cartItens, SetCartItens}) {
    function isRepeated(){
       let index_repetido = -1

        cartItens.map((item, index) => {
            if(item.nome == nome){
                index_repetido = index
            }
        })

        return index_repetido

    }
    
    function addToCart(){
        //verifica se já tem o mesmo item no carrinho
        const repetido = isRepeated();
        if(repetido == -1){
            SetCartItens(cartItens.concat([{nome: nome, preco_unitario: preco_unitario, qtd: 1}]))
        }

        else{
            //cópia profunda de arrays
            let novoCartItens = JSON.parse(JSON.stringify(cartItens))
            novoCartItens[repetido].qtd += 1
            SetCartItens(novoCartItens)
        }
    }

    return(
        <div className={Styles.menu_item}>
            <img className={Styles.img} src={img_path} />

            <div className={Styles.infos}>
                <div>
                    <p className={Styles.name}>{nome}</p>
                    <p className={Styles.dsc}>{dsc}</p>
                </div>
                

                <div className={Styles.bottom}>
                    <p className={Styles.price}>R$ {preco_unitario.toString().replace(".", ",")}</p>
                    <button onClick={addToCart} className={Styles.add_to_cart}><FaCartPlus size={20} color='white'/></button>
                </div>
                
            </div>
        </div>
    )
}

export default MenuItem