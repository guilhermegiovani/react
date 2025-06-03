import { useEffect, useState } from "react"
import Button from "../Button/Button"
import { Sun, Moon } from "lucide-react"
import clsx from "clsx"

function ThemeToggle() {

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === 'dark'
    })

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }

    }, [darkMode])

    return (
        <Button
            handleClick={() => setDarkMode(!darkMode)}
            className={clsx(
                "fixed top-0 right-0 sm:absolute sm:top-2 sm:right-8 p-2",
                "rounded bg-gray-300 dark:bg-gray-800",
                "text-base cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-600"
            )}
            text={darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
                <Moon className="w-5 h-5 text-white" />
            )}
        />
    )

}

export default ThemeToggle