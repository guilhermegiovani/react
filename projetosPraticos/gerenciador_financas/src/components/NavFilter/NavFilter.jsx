import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button"


function NavFilter({ filterActive }) {

    const todasRef = useRef(null)
    const receitasRef = useRef(null)
    const despesasRef = useRef(null)

    const getButtonClasses = () => {
        return clsx(
            "cursor-pointer transition-colors duration-300",
            "px-3 pb-1"
        )
    }

    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const [displayTransaction, setDisplayTransaction] = useState("Todas")

    useEffect(() => {

        const refs = {
            Todas: todasRef,
            Receitas: receitasRef,
            Despesas: despesasRef
        }

        const activeRef = refs[displayTransaction]
        if (activeRef?.current) {
            const { offsetLeft, offsetWidth } = activeRef.current
            setIndicatorStyle({ left: offsetLeft, width: offsetWidth })
        }

    }, [displayTransaction])


    return (
        <nav className={clsx(
            "relative flex gap-3 font-semibold text-gray-500 dark:text-gray-300",
            "border-b border-gray-300 dark:border-gray-600 mb-4" // border-b border-gray-300 pl-2 mb-4
        )}>
            <Button
                text="Todas"
                ref={todasRef}
                className={getButtonClasses("Todas")}
                handleClick={() => {
                    filterActive("Todas")
                    setDisplayTransaction("Todas")
                }}
            />

            <Button
                text="Receitas"
                ref={receitasRef}
                className={getButtonClasses("Receitas")}
                handleClick={() => {
                    filterActive("Receitas")
                    setDisplayTransaction("Receitas")
                }}
            />

            <Button
                text="Despesas"
                ref={despesasRef}
                className={getButtonClasses("Despesas")}
                handleClick={() => {
                    filterActive("Despesas")
                    setDisplayTransaction("Despesas")
                }}
            />

            <span
                className="absolute bottom-[-1px] h-[1px] bg-purple-700 dark:bg-purple-500 transition-all duration-300"
                style={{
                    left: indicatorStyle.left,
                    width: indicatorStyle.width,
                }}
            />
        </nav>
    )
}

export default NavFilter