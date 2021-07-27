function ChatOut() {
  return (
    <li className="right">
      <div className="conversation-list">
        <div className="chat-avatar">
          <img src="assets/img/profile03.png" alt="" />
        </div>
        <div className="user-chat-content">
          <div className="ctext-wrap">
            <p>I’m still eat in angkringan. Maybe 15 minutes later I will send the files to you bro.</p>
            <p className="chat-time">
              12:21 pm <i className="fas fa-check"></i>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ChatOut;
