// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {eachEmoji, onAddId} = props

  const {id, emojiName, emojiUrl} = eachEmoji

  const onCLickEmoji = () => {
    onAddId(id)
  }
  return (
    <li>
      <button className="emoji-card" onClick={onCLickEmoji}>
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

EmojiCard.defaultProps = {
  name: 'ravi',
}

export default EmojiCard
