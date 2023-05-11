// Write your code here.
import './index.css'

let topScore = 0

const NavBar = props => {
  const {score, reqScore} = props

  if (score >= topScore) {
    topScore = score
  }

  let navBarEl

  if (score === 12) {
    navBarEl = (
      <navbar className="nav-bar">
        <div className="icon-container">
          <img
            className="nav-icon"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="game-name"> Emoji Game </h1>
        </div>
      </navbar>
    )
  } else if (reqScore === -1) {
    navBarEl = (
      <navbar className="nav-bar">
        <div className="icon-container">
          <img
            className="nav-icon"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="game-name"> Emoji Game </h1>
        </div>
        <div className={navBarEl}>
          <p className="score"> Score: {score} </p>
        </div>
      </navbar>
    )
  } else {
    navBarEl = (
      <navbar className="nav-bar">
        <div className="icon-container">
          <img
            className="nav-icon"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="game-name"> Emoji Game </h1>
        </div>
        <div className={navBarEl}>
          <p className="score"> Score: {score} </p>
          <p className="top-score"> Top Score: {topScore} </p>
        </div>
      </navbar>
    )
  }

  return navBarEl
}

NavBar.defaultProps = {
  score: 0,
  topScore: 0,
}

export default NavBar
