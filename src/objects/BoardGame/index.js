import CardGame from '../../components/CardGame'
import './style.css'

function CardTable(cardsAmount) {
    const card = CardGame();
    const $htmlBoardGame = card.repeat(cardsAmount);
    return(`
        <article class="card-table">
            ${$htmlBoardGame}
        </article>
    `)
}

export default CardTable;