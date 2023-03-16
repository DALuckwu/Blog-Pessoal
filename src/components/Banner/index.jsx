import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1>Olá!</h1>
                <p>Sejam todas(os) bem vindas(os) ao meu pequeno espaço pessoal.</p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido} 
                    aria-hidden={true}
                    alt="Círculo colorido"
                />

                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto de perfil"
                />
            </div> 
        </div>
    )
}