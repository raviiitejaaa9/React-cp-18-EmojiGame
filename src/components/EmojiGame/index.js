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
  }

  onAddId = id => {
    this.setState(prevState => ({
      idList: [...prevState.idList, id],
    }))
  }

  render() {
    const {count, reqEmojisList, idList} = this.state
    const {emojisList} = this.props
    console.log(idList)

    const idSet = new Set(idList)
    console.log(idSet)
    const idSetList = [...idSet]
    console.log(idSetList)
    let bottomSecEl

    // console.log(reqEmojisList)
    // console.log(emojisList)
    return (
      <div className="app-container">
        <NavBar />
        <div className="bottom-sec">
          <ul className="emojis-container">
            {emojisList.map(eachItem => (
              <EmojiCard
                eachEmoji={eachItem}
                key={eachItem.id}
                onAddId={this.onAddId}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
