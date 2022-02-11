import CardGame from '../../components/CardGame'
import './style.css'

function CardTable(cardsAmount) {
    const card = CardGame();
    const $htmlBoardGame = card.repeat(cardsAmount);
    return(`
        <section class="board-game">
            ${$htmlBoardGame}
        </section>
    `)
}

export default CardTable;