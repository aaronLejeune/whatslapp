import AttachmentsList from './AttachmentsList'
import AttachmentsItem from './AttachmentsItem'

function Attachments(){
  return(
    <div className="contact-media">
      <div className="cm-top">
        <h4>Media or Docs</h4>
        <i className="fas fa-angle-right"></i>
      </div>
      <AttachmentsList>
        <AttachmentsItem />
        <AttachmentsItem />
        <AttachmentsItem />
      </AttachmentsList>
    </div>
  );
}

export default Attachments

