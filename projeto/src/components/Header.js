import Styles from './Header.module.css'

function Header(){
    return(
        <header className={Styles.header}>
            <img className={Styles.logo} src="./assets/hamb-1.png" alt="" />
            <h1 className={Styles.title}>Red Burguer</h1>
            <p className={Styles.end}>Rua dev sucesso, 12, Campo Grande, MS</p>
            <div className={Styles.div}>Seg á Dom - 18:00 as 22:00</div>
        </header>
    )
}

export default Header