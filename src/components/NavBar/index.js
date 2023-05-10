// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <navbar className="nav-bar">
      <div className="icon-container">
        <img
          className="nav-icon"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="game-name"> Emoji Game </h1>
      </div>
      <div className="score-container">
        <p className="score"> Score: {score} </p>
        <p className="top-score"> Top Score: {topScore} </p>
      </div>
    </navbar>
  )
}

NavBar.defaultProps = {
  score: 0,
  topScore: 0,
}

export default NavBar
