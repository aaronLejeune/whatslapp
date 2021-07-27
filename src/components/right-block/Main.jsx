import Header from './header/Header.jsx'
import DetailsUser from './details/DetailsUser.jsx'
import DetailsAbout from './details/DetailsAbout.jsx'
import Attachments from './details/attachments/Attachments.jsx'

function RightBlock() {
  return (
    <sidebar className="right-sidebar">
      <div className="rs-content">
        {/* Header with close button */}
        <Header />

        {/* show small usercard */}
        <DetailsUser />
        {/* Show & handle attachments */}
        <Attachments />
        {/* Show small bio */}
        <DetailsAbout />

      </div>
    </sidebar>
  );
}

export default RightBlock;
