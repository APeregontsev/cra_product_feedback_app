import CommentsNumber from "../commentsNumber/CommentsNumber";
import ItemType from "../itemType/ItemType";
import VotesBox from "../votesBox/VotesBox";

import { NavLink } from "react-router-dom";
import "./style.css";

const FeedbackItem = ({ feedbackItem, setData }) => {
  const href = window.location.pathname.includes("innerfeedback");

  return (
    <div className="app_item-wrapper">
      <VotesBox votesData={feedbackItem} setData={setData} />

      <div className="item__body">
        <div className="item__title">
          <NavLink className="navlink" to={href ? `/editfeedback/${feedbackItem.id}` : `/innerfeedback/${feedbackItem.id}`}>
            {feedbackItem.title}
          </NavLink>
        </div>

        <div className="item__text">
          <NavLink className="navlink" to={href ? `/editfeedback/${feedbackItem.id}` : `/innerfeedback/${feedbackItem.id}`}>
            {feedbackItem.text}
          </NavLink>
        </div>

        <ItemType ItemTypeData={feedbackItem.type} />
      </div>

      <CommentsNumber numberOfComments={feedbackItem.comments} />
    </div>
  );
};

export default FeedbackItem;
