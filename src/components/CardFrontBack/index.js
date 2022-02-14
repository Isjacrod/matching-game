import CardGame from "../CardGame";
import './style.css'

window.cardFrontBack = {};

window.cardFrontBack.handleClick = (event) => {
    const $target = event.target;
    const $targetToggle = $target.closest(".card-front-back");
    $targetToggle.classList.toggle("-rotate");
}

function CardFrontBack(backObj, frontObj) {
    return (`
        <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
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