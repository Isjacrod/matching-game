import CardFrontBack from '../../components/CardFrontBack';
import './style.css'

function BoardGame(images, pairsAmount) {
    let temporaryCards = [];
    const back = images.back;

    for (let i = 0; i < pairsAmount; i++) {
        temporaryCards.push( CardFrontBack(back, images.front[i]) );
    }
    const $htmlBoardGame = temporaryCards.join('');

    return(`
        <section class="board-game">
            ${$htmlBoardGame}
        </section>
    `)
}

export default BoardGame;