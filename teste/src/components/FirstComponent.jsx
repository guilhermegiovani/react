import AnotherComponent from "./AnotherComponent"


function FirstComponent() {

    const name = 'Guilherme'

    return (
        <div>
            <p>Primeito Componente</p>
            {2 + 2}
            <p>Nome: {name}</p>
            <AnotherComponent />
        </div>
    )
}

export default FirstComponent