import styles from './Frase.module.css'
function Frase() {
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é umcomponente de uma frase</p>
        </div>
    )
}
export default Frase