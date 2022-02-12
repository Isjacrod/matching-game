import './src/styles/settings/colors.css';
import './src/styles/generics/reset.css';
import './src/styles/elements/base.css';
import BoardGame from './src/objects/BoardGame';
import ScoreBoard from './src/objects/ScoreBoard';
import ConfigJSON from './config.json';

console.log(ConfigJSON);

const $root = document.querySelector('#root');

$root.insertAdjacentHTML('beforeend', `
    ${ScoreBoard()}
    ${BoardGame(ConfigJSON.matchingGame.images, 3)}
`);