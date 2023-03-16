import styles from './Botao.module.css'

export default function Botao({tamanho, children}) {
    return(
        <button className={`${styles.botao} ${styles[tamanho]}`}>{children}</button>
    )
}