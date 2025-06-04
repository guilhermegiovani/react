import { Ban, X } from "lucide-react"
import { clsx } from "clsx"
import Button from "../Button/Button"

function DeleteModal({ isOpen, onClose, onConfirm, transaction }) {
    if (!isOpen) return null

    return (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md transition">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Confirmar Exclusão</h2>

                    <Button
                        text={
                            <X className="w-5 h-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" />
                        }
                        handleClick={onClose}
                    />
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Você está prestes a excluir a transação <strong>{transaction.descricao}</strong> no valor de <strong>{transaction.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>. <br />
                    Isso irá <span className="text-red-500 font-medium">afetar o saldo</span>. Deseja continuar?
                </p>

                <div className="flex justify-end gap-4">
                    <Button
                        text="Cancelar"
                        handleClick={onClose}
                        className={clsx(
                            "px-4 py-2 rounded",
                            "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
                            "hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                        )}
                    />

                    <Button
                        text="Deletar"
                        handleClick={() => {
                            onConfirm(transaction.id)
                            onClose()
                        }}
                        className={clsx(
                            "px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition"
                        )}
                    />
                </div>

            </div>
        </section>
    )
}

export default DeleteModal