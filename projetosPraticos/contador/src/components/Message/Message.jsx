import styles from "./Message.module.css"

function Message({ text }) {

    return (
        <div className={styles.message}>
            <p>{text}</p>
        </div>
    )
}

export default Message