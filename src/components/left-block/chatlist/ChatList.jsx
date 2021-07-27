import ChatListSearch from './ChatListSearch'
import ChatListWrapper from './ChatListWrapper'
import ChatListItem from './ChatListItem'


function ChatList(){
  return (
    <>
      <ChatListSearch />
      
      <h3 className="chat-list-title">Chat List</h3>

      <ChatListWrapper>
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </ChatListWrapper>
    </>
  );
}

export default ChatList