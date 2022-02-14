import './style.css'

function ScoreIndicator(rounds) {
    const $indicatorElement = "<div class='cell'></div>";
    const $roundsIndicators = $indicatorElement.repeat(rounds);
    return (`
        <div class="score-indicator">
            <div class="row">
                ${$roundsIndicators}
            </div>
        </div>`);
}

export default ScoreIndicator;