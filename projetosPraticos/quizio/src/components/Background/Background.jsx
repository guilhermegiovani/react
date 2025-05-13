import styles from "./Background.module.css"

function Background({ tema }) {

    return (
        <div className={`${styles.background} ${styles[tema]}`}>
            <div className={`${styles.littleBall} ${styles[tema]} ${styles.littleBall1}`}></div>
            <div className={`${styles.littleBall} ${styles[tema]} ${styles.littleBall2}`}></div>
            <div className={`${styles.littleBall} ${styles[tema]} ${styles.littleBall3}`}></div>
            <div className={`${styles.littleBall} ${styles[tema]} ${styles.littleBall4}`}></div>
            <div className={`${styles.littleBall} ${styles[tema]} ${styles.littleBall5}`}></div>
            <div className={`${styles.littleBall} ${styles[tema]} ${styles.littleBall6}`}></div>
            <div className={`${styles.littleBall} ${styles[tema]} ${styles.littleBall7}`}></div>
            <div className={`${styles.littleBall} ${styles[tema]} ${styles.littleBall8}`}></div>
        </div>
    )
}

export default Background