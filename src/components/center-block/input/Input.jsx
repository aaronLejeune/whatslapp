import InputAttachment from './InputAttachment'
import InputEmoji from './InputEmoji'

function Input() {
  return (
    <div className="chat-input-section">
      <div className="chat-input-section-wrap">
        <div className="input-icons">
          <InputAttachment />
          <InputEmoji />
        </div>
        <form className="chat-input">
          <input type="text" name="messageinput" placeholder="Type a message..." />
          <button type="submit">
            <i className="far fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Input