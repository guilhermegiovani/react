
function Card({title, value, icon, className, colorFont}) {



    return (
        <section className={className}>
            {icon}
            <p>{title}</p>
            <p className={colorFont}>{value}</p>
        </section>
    )
}

export default Card