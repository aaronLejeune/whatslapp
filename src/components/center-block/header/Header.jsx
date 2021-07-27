import HeaderMenu from './HeaderMenu'

function Header() {
  return (
    <div className="converseation-head">
      <div className="ch-profile">
        <img src="assets/img/profile03.png" alt="" />
        <div>
          <h4>Adam Ali</h4>
          <p className="status">Last seen today at 4:30</p>
        </div>
      </div>
      <HeaderMenu />
    </div>
  );
}

export default Header;