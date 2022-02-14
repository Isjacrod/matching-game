import './style.css'
import PlayerName from "../../components/PlayerName";
import ScoreIndicator from '../../components/ScoreIndicator/ScoreIndicator';

function ScoreBoard(gameRounds) {
    return (`
        <header class="score-board">
            ${PlayerName("Player1")}
            ${ScoreIndicator(gameRounds)}
            <span class="vs"> VS </span> 
            ${ScoreIndicator(gameRounds)}
            ${PlayerName("Player2")}
        </header>
    `)
}

export default ScoreBoard;