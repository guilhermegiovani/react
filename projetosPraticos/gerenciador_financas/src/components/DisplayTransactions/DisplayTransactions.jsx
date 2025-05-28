import { clsx } from "clsx"
import Button from "../Button/Button"

function DisplayTransactions() {

    const nameTransaction = ["Salário", "Aluguel", "Mercado"]
    const valueTransaction = ["6.700,00", "1.500,00", "850,00",]

    return (
        <section
            className={clsx(
                "bg-white",
                "p-3",
                "rounded-xl",
                "shadow-md",
                "max-w-xl",
                "mx-auto",
                "mt-2"
            )}
        >

            <div
                className={clsx(
                    "flex justify-evenly text-center text-lg mb-4"
                )}
            >
                <div
                    className={clsx(
                        "bg-green-300",
                        "p-3",
                        "rounded-xl",
                        "text-lg"
                    )}
                >
                    <p>Receitas</p>
                    <p>R$ 9.000,00</p>
                </div>

                <div
                    className={clsx(
                        "bg-red-300",
                        "p-3",
                        "rounded-xl"
                    )}
                >
                    <p>Despesas</p>
                    <p>R$ 6.200,00</p>
                </div>

                <div
                    className={clsx(
                        "bg-blue-300",
                        "p-3",
                        "rounded-xl"
                    )}
                >
                    <p>Saldo</p>
                    <p>R$ 2.800,00</p>
                </div>
            </div>

            <div>
                <nav className="flex gap-10 text-lg border-b">
                    <Button text="Todas" />

                    <Button text="Receitas" />

                    <Button text="Despesas" />
                </nav>

                {nameTransaction.map((name, index) => (
                    <div className="border-b p-4 flex justify-between">
                        <p>{name}</p>
                        <p>R$ {valueTransaction[index]}</p>
                    </div>
                ))

                }

            </div>

        </section>
    )
}

export default DisplayTransactions