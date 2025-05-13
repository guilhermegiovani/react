// import styles from "./Buton.module.css"
import "./Button.css"

function Button({ text, handleClick }) {

    return (
        <>
            <button className='btn' onClick={handleClick}>{text}</button>
        </>
    )
}

export default Button