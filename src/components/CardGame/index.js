import './style.css'

function CardGame(icon, alt) {
    return (`
        <article class="card-game">
            <img src="images/${icon}" alt="${alt}" />
        </article>
    `)
}

export default CardGame;