import CardFrontBack from '../../components/CardFrontBack';
import './style.css'

function BoardGame(images, pairsAmount) {
    let temporaryCards = [];
    const back = images.back;

    for (let i = 0; i < pairsAmount; i++) {
        const $singleCard = CardFrontBack(back, images.front[i]);
        temporaryCards.push($singleCard, $singleCard);
    }
    const $htmlBoardGame = temporaryCards.join('');

    return(`
        <section class="board-game">
            ${$htmlBoardGame}
        </section>
    `)
}

export default BoardGame;