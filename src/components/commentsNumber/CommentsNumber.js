import { feedback_comments } from "../../data/feedbackComments";
import "./style.css";

const CommentsNumber = ({ numberOfComments }) => {
  return (
    <div className="comment_wrapper">
      <div className="comment__item">{numberOfComments}</div>
    </div>
  );
};

export default CommentsNumber;
