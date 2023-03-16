import PostModelo from "components/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './AboutMe.module.css'
import fotoSobreMim from "assets/minha_foto.png"

export default function AboutMe() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>Olá, eu sou Dara!</h3>
            <img
                className={styles.fotoSobreMim}
                src={fotoSobreMim}
                alt="Foto pessoal"
            />
            <p className={styles.paragrafo}>
                espaço para colocar paragrafos.
            </p>
            <p className={styles.paragrafo}>
                eu sou ruim nisso.
            </p>
            <p className={styles.paragrafo}>
                aaaaaaahhhhh
            </p>
            <p className={styles.paragrafo}>
                buh
            </p>
            <p className={styles.paragrafo}>
                aksdoasndcoqdin coincksc
            </p>
        </PostModelo>
    )
}