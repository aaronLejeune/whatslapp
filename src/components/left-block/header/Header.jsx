import HeaderMenu from './HeaderMenu'

function Header(){
  return (
    <div className="ph-head">
        <div className="ph-head-profile">
          <img src="assets/img/profile01.png" alt="" />
          <h4>Jawad</h4>
        </div>

        <HeaderMenu />
      </div>
  );
}

export default Header;