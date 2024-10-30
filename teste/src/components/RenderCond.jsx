const RenderCond = ({x, y}) => {

    return (
        <div>
            {x > 5 && <p>x é maior que 5</p>}

            {x > 5 ? <p>X é um número alto</p> : <p>X é um número baixo</p>}

            <p>O valor de Y é {y}</p>
        </div>
    )
}

export default RenderCond