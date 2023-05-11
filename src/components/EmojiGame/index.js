/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    count: 0,
    reqEmojisList: this.props,
    idList: [],
    idSet: new Set(),
  }

  onAddId = id => {
    const {idList, idSet} = this.state

    this.setState(prevState => ({
      idList: [...prevState.idList, id],
      idSet: {...prevState.idSet, id},
    }))

    const reqSet = new Set(idList)
    const reqList = [...reqSet]
  }

  onRestartGame = () => {
    console.log('game restart triggered')
    this.setState({idList: []})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {count, reqEmojisList, idList} = this.state
    const {emojisList} = this.props
    // console.log(idList.length)

    const reqList = this.shuffledEmojisList()

    const idSet = new Set(idList)
    // console.log(idSet.length)
    const idSetList = [...idSet]
    // console.log(idSetList.length)
    let bottomSecEl
    const score = idSetList.length
    console.log(score)

    let reqScore

    if (idList.length === idSetList.length && idList.length < 12) {
      bottomSecEl = (
        <ul className="emojis-container">
          {reqList.map(eachItem => (
            <EmojiCard
              eachEmoji={eachItem}
              key={eachItem.id}
              onAddId={this.onAddId}
            />
          ))}
        </ul>
      )
      reqScore = 1
    } else {
      bottomSecEl = (
        <WinOrLoseCard score={score} onRestartGame={this.onRestartGame} />
      )
      reqScore = -1
    }

    console.log(bottomSecEl)

    // console.log(reqEmojisList)
    // console.log(emojisList)
    return (
      <div className="app-container">
        <NavBar score={score} reqScore={reqScore} />
        <div className="bottom-sec">{bottomSecEl}</div>
      </div>
    )
  }
}

export default EmojiGame
