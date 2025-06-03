import clsx from "clsx"

function Card({ title, value, icon, className, colorFont }) {



    return (
        <section className={clsx(
            className,
            "transation-colors duration-300"
        )}>
            {icon}
            <p className="text-gray-800 dark:text-gray-200">{title}</p>
            <p className={colorFont}>{value}</p>
        </section>
    )
}

export default Card