import Button from "../Button/Button"

function TodoInput({ type, id, placeholder }) {

    return (
        <>
            <input type={type} id={id} placeholder={placeholder} />
            <Button text="Adicionar" />
        </>
    )
}

export default TodoInput