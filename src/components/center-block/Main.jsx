import Header from './header/Header'
import Chat from './chat/Chat'
import Input from './input/Input'

function CenterBlock() {
  return (
    <main>
      {/* Header with details component */}
      <Header />

      {/* Main chat section */}
      <Chat />
      {/* Input compontent for sending out messages */}
      <Input />
    </main>
  );
}

export default CenterBlock;
