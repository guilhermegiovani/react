

function AlternativeButton({ alternative, className, handleClick }) {

    return (
        <>
            <button onClick={handleClick} className={className}>{alternative}</button>
        </>
    )
}

export default AlternativeButton