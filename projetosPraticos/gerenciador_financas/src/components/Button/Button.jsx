import { forwardRef } from "react"

const Button = forwardRef(function Button({ text, className, handleClick }, ref) {
    return (
        <button
            ref={ref}
            onClick={handleClick}
            className={className}
        >
            {text}
        </button>
    )
})

export default Button