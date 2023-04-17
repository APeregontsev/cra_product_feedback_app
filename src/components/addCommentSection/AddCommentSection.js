import { useState } from "react";
import { CommentText } from "./CommentText/CommentText";
import "./style.css";

const AddCommentSection = ({ feedbackID, setCommentsData, commentsData }) => {
  const [charactersLeft, setCharactersLeft] = useState(250);

  const [newCommentText, setNewCommentText] = useState("");

  // Проверяем валидность полей

  // Есть ли валидное значение в input
  function hasStringValue(val) {
    return val !== undefined && val !== null && val.trim() != "";
  }

  const commentIsValid = hasStringValue(newCommentText);

  function commentInputHandler(event) {
    setCharactersLeft(parseInt(event.target.getAttribute("maxLength")) - event.target.value.length);
    setNewCommentText(event.target.value);
  }

  function postCommentHandler(event) {
    if (!commentIsValid) {
      return;
    } else {
      setCommentsData((data) => {
        let newComment = {
          id: 0,
          feedback_id: 0,
          comment_answer_to_id: 0,
          comment_author: "Alex Pereg",
          comment_login: "mail.777",
          comment_text: "",
        };
        newComment.feedback_id = feedbackID;
        newComment.comment_text = newCommentText;

        // Определяем максимальный ID
        let maxId = 0;
        data.forEach((item) => (item.id > maxId ? (maxId = item.id) : null));
        // Увеличиваем максимальный ID и присваиваем новому обьекту
        ++maxId;
        newComment.id = maxId;
        console.log("new comment!!!!!!!!!", newComment);
        return [...data, newComment];
      });
    }

    console.log("new comments data", commentsData);
  }

  return (
    <div className="add_comment-wrapper">
      <div className="add_comment-title">Add Comment</div>

      <div className="comment_add_text">
        <CommentText
          showWarning={!commentIsValid}
          commentInputHandler={commentInputHandler}
          newCommentText={newCommentText}
        />
      </div>

      <div className="post_comment-wrapper">
        <div className="characters_left">
          <p className="digits_left">{charactersLeft}</p>Characters left
        </div>

        <button className="add_feedback" onClick={postCommentHandler}>
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default AddCommentSection;
