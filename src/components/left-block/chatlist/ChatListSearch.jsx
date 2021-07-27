function ChatListSearch() {
  return (
    <div className="search">
      <form>
        <label for="search">
          <i className="fas fa-search"></i>
        </label>
        <input type="text" name="search" id="search" placeholder="Search messages or users" />
      </form>
    </div>
  );
}

export default ChatListSearch;
