import { useState } from "react";
import "./style.css";

const CommentItemInner = ({ comment, setCommentsData, commentsData }) => {
  // Проставим внутренниму коменту логин комента на который дан ответ

  let commentToLogin = "";
  commentsData.forEach((element) => (element.id === comment.comment_answer_to_id ? (commentToLogin = element.comment_login) : null));

  const [addInnerCommentVisible, setAddInnerCommentVisible] = useState(false);
  const [innerCommentInput, setInnerCommentInput] = useState("");

  function commentReplyHandler() {
    setAddInnerCommentVisible((addInnerCommentVisible) => {
      return !addInnerCommentVisible;
    });
  }

  function innerCommentInputHandler(event) {
    setInnerCommentInput(event.target.value);
  }

  function addInnerCommentHandler(event) {
    setAddInnerCommentVisible((addInnerCommentVisible) => {
      return !addInnerCommentVisible;
    });

    setCommentsData((data) => {
      let newInnerComment = {
        id: 0,
        feedback_id: 0,
        comment_answer_to_id: 0,
        comment_author: "Alex Pereg",
        comment_login: "mail.777",
        comment_text: "",
      };
      newInnerComment.comment_answer_to_id = comment.id;
      newInnerComment.feedback_id = comment.feedback_id;
      newInnerComment.comment_text = innerCommentInput;

      // Определяем максимальный ID
      let maxId = 0;
      data.forEach((item) => (item.id > maxId ? (maxId = item.id) : null));
      // Увеличиваем максимальный ID и присваиваем новому обьекту
      ++maxId;
      newInnerComment.id = maxId;

      return [...data, newInnerComment];
    });
  }

  return (
    <div className="inner_comment-wrapper">
      <div className="comment-item_wrapper">
        <div className="comment-header">
          <div className="comment-avatar"></div>
          <div className="comment-author--wrapper">
            <div className="comment-author">{comment.comment_author}</div>
            <div className="comment-login">{comment.comment_login}</div>
          </div>
          <div className="comment-reply" onClick={commentReplyHandler}>
            Reply
          </div>
        </div>

        <div className="comment-text">
          <p className="inner_comment-answer">{commentToLogin}</p>
          {comment.comment_text}
        </div>
        <div className={addInnerCommentVisible ? "inner-comment-add_wrapper" : "inner-comment-add_wrapper none"}>
          <div className="inner-comment-add-text">
            <textarea
              className="inner-comment-add_input"
              placeholder="Type your comment here"
              maxLength="250"
              onChange={innerCommentInputHandler}
            ></textarea>
          </div>
          <button className="inner-comment-add-button" onClick={addInnerCommentHandler}>
            Post Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentItemInner;
