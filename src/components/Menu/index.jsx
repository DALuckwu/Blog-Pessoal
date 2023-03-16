import { NavLink } from "react-router-dom"
import styles from "./Menu.module.css"

export default function Menu() {
    // const localizacao = useLocation();

    return (
        <header>
            <nav className={styles.navegacao}>
                <NavLink className={({isActive}) => `${styles.link} ${isActive ? styles.linkDestacado : ""}`} to="/">Início</NavLink>
                <NavLink className={({isActive}) => `${styles.link} ${isActive ? styles.linkDestacado : ""}`} to="/sobremim"> Sobre Mim</NavLink>
            </nav>
        </header>
    );
}