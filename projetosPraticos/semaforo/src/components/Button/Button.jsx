import styles from "./Button.module.css"

function Button({ text, handleClick }) {

    return (
        
        <div className={styles.button}>
            <button onClick={handleClick}>{text}</button>
        </div>

    )
}

export default Button