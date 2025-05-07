import styles from "./Button.module.css"

function Button({ text, onHandle }) {

    return (
        <>
            <button className={styles.button} onClick={onHandle}>{text}</button>
        </>
    )
}

export default Button