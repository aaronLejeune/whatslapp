function ChatListItem() {
  return (
    <div className="person-chat">
      <img src="assets/img/profile02.png" alt="" />
      <div>
        <div className="chat-top">
          <h4>Boris Doe</h4>
          <span className="lastmsg-time">4:32</span>
        </div>
        <p className="last-msg">Let’s meet on 3pm today</p>
      </div>
    </div>
  );
}

export default ChatListItem;
