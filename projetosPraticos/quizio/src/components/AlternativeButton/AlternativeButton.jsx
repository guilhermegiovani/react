

function AlternativeButton({ alternative, className, handleClick, disable }) {

    return (
        <>
            <button disabled={disable} onClick={handleClick} className={className}>{alternative}</button>
        </>
    )
}

export default AlternativeButton