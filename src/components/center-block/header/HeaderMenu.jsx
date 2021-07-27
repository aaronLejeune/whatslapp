function HeaderMenu() {
  return (
    <div className="more-info">
      <button className="moreinfo-button">
        <i className="fas fa-ellipsis-v"></i>
      </button>
      <ul className="dropdown-info">
        <li>Contact info</li>
        <li>Mute notification</li>
        <li>Clear messages</li>
        <li>Delete chat</li>
      </ul>
    </div>
  );
}

export default HeaderMenu;