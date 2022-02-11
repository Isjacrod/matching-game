import CardFrontBack from '../../components/CardFrontBack';
import './style.css'

function CardTable(cardsAmount) {
    const $htmlCardFrontBack = CardFrontBack();
    const $htmlBoardGame = $htmlCardFrontBack.repeat(cardsAmount);
    return(`
        <section class="board-game">
            ${$htmlBoardGame}
        </section>
    `)
}

export default CardTable;