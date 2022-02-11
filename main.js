import './src/styles/settings/colors.css';
import './src/styles/generics/reset.css';
import './src/styles/elements/base.css';
import BoardGame from './src/objects/BoardGame';
import PlayerName from './src/components/PlayerName'

const $root = document.querySelector('#root');
const $htmlBoardGame = BoardGame(6);
const $playerName = PlayerName("Player 1");



$root.insertAdjacentHTML('beforeend', $playerName + $htmlBoardGame);