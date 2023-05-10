// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {name} = props
  return (
    <div className="win-lose-card">
      <div className="best-score-sec">
        <h1> You Won </h1>
        <h1> Best Score </h1>
        <h1> 12/12 </h1>
        <button className="play-again-btn" type="button">
          Play Again
        </button>
      </div>
      <img
        className="bottom-sec-img"
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="WIN"
      />
    </div>
  )
}

WinOrLoseCard.defaultProps = {
  name: 'ravi',
}

export default WinOrLoseCard
