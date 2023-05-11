// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, onRestartGame} = props
  console.log(score)

  const onClickRestart = () => {
    onRestartGame()
  }

  let headEl
  let bestScore
  let imageSrc

  if (score === 12) {
    headEl = 'You Won'
    bestScore = score
    imageSrc = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  } else {
    headEl = 'You Lose'
    bestScore = score
    imageSrc = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  }
  return (
    <div className="win-lose-card">
      <div className="best-score-sec">
        <h1> {headEl} </h1>
        <p> Best Score </p>
        <p> {score}/12 </p>
        <button
          className="play-again-btn"
          type="button"
          onClick={onClickRestart}
        >
          Play Again
        </button>
      </div>
      <img className="bottom-sec-img" src={imageSrc} alt="win or lose" />
    </div>
  )
}

WinOrLoseCard.defaultProps = {
  name: 'ravi',
}

export default WinOrLoseCard
