import CardGame from "../CardGame";
import './style.css'

function CardFrontBack(backObj, frontObj) {
    return (`
        <article class="card-front-back"">
            <div class="cardface -back">
                ${CardGame(backObj.image, backObj.alt)}
            </div>
            <div class="cardface -front">
                ${CardGame(frontObj.image, frontObj.alt)}
            </div>
        </article>
    `)
}

export default CardFrontBack;