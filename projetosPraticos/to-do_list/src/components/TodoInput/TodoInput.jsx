import Button from "../Button/Button"
import clsx from 'clsx'

function TodoInput({ type, id, placeholder }) {

    return (
        <div>
            <input type={type} id={id} placeholder={placeholder} />
            <Button text="Adicionar" />
        </div>
    )
}

export default TodoInput