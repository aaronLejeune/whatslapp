import ChatList from './ChatList'
import ChatOut from './ChatOut'
import ChatIn from './ChatIn'
import ChatTiming from './ChatTiming'

function Chat(){
  return (
    <ChatList>
      <ChatIn />
      <ChatIn />
      <ChatOut />
      <ChatTiming />
      <ChatIn />
    </ChatList>
  );
}

export default Chat