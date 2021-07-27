import Header from './header/Header'
import ChatList from './chatlist/ChatList'


function LeftBlock() {
  return (
    <sidebar className="left-sidebar">
      {/* User menu */}
      <Header />

      {/* Chatlist with search and display */}
      <ChatList />
    </sidebar>
  );
}

export default LeftBlock;
