import Button from './evento/Button.jsx'

function Evento() {

    function meuEvento() {
        console.log(`Ativando primerio evento!`)
    }

    function segundoEvento() {
        console.log("Ativando segundo evento!")
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro evento" />
            <Button event={segundoEvento} text="Segundo evento" />
            {/* <button className="btn" onClick={meuEvento}>Ativar!</button> */}
        </div>
    )
}

export default Evento