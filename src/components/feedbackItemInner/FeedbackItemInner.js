import CommentsNumber from "../commentsNumber/CommentsNumber";
import ItemType from "../itemType/ItemType";
import VotesBox from "../votesBox/VotesBox";
import "./style.css";

const CommentItem = ({ feedbackItemInner, setData }) => {
  return (
    <div className="feedback_item-wrapper">
      <VotesBox votesData={feedbackItemInner} setData={setData} />

      <div className="item__body">
        <div className="item__title">{feedbackItemInner.title}</div>

        <textarea className="textarea_feedback_edit" placeholder="" disabled>
          {feedbackItemInner.text}
        </textarea>

        <ItemType ItemTypeData={feedbackItemInner.type} />
      </div>
      <CommentsNumber feedbackId={feedbackItemInner.id} />
    </div>
  );
};

export default CommentItem;
