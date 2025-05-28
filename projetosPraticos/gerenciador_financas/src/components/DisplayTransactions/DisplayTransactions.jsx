import { clsx } from "clsx"
import Button from "../Button/Button"

function DisplayTransactions() {

    const nameTransaction = ["Salário", "Aluguel", "Mercado"]
    const valueTransaction = ["6.700,00", "1.500,00", "850,00",]

    return (
        <section>

            <div>
                <div>
                    <p>Receitas</p>
                    <p>R$ 9.000,00</p>
                </div>

                <div>
                    <p>Despesas</p>
                    <p>R$ 6.200,00</p>
                </div>

                <div>
                    <p>Saldo</p>
                    <p>R$ 2.800,00</p>
                </div>
            </div>

            <div>
                <nav>
                    <Button text="Todas" />

                    <Button text="Receitas" />

                    <Button text="Despesas" />
                </nav>

                {nameTransaction.map((name, index) => (
                    <div>
                        <p>{name}</p>
                        <p>{valueTransaction[index]}</p>
                    </div>
                ))

                }

            </div>

        </section>
    )
}

export default DisplayTransactions