import "./style.css";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import CommentItem from "../../components/commentItem/CommentItem";
import CommentItemInner from "../../components/commentItemInner/CommentItemInner";
import AddCommentSection from "../../components/addCommentSection/AddCommentSection";
import FeedbackItem from "../../components/feedbackItem/FeedbackItem";
import GoBackBtn from "../../components/goBackBtn";

const InnerFeedBack = ({ data, setData, commentsData, setCommentsData }) => {
  const { id } = useParams();

  let navigate = useNavigate();

  function goBackHandler() {
    navigate(-1);
  }

  let feedbackItemInner = [];

  data.forEach((element) => {
    if (element.id === parseInt(id)) {
      feedbackItemInner = element;
    }
  });

  // Сформируем массив куда положим в необходимом порядке комменты данного feedback

  let thisFeedbackComments = [];
  const NO_PARENT_ID = 0;

  // отфильтруем комментарии родителя
  function getCommentsByParentId(parentId) {
    return commentsData.filter(
      (item) => item.comment_answer_to_id === parentId && item.feedback_id === feedbackItemInner.id
    );
  }

  // добавим родительский комментарий а так же все дочерние его
  function addComment(comment) {
    // добавим текущий коммент
    thisFeedbackComments.push(comment);

    // произведем поиск дочерних комментариев
    const immediateChildren = getCommentsByParentId(comment.id);

    // если есть дочерние - добавим их сразу за родительским
    if (immediateChildren.length > 0) {
      immediateChildren.forEach((immediateChild) => addComment(immediateChild));
    }
  }

  function newArray() {
    // найдем все родительские комментарии
    const rootComments = getCommentsByParentId(NO_PARENT_ID);
    // найдем дочерние комментарии к родительскому
    rootComments.forEach((rootComment) => addComment(rootComment));

    console.log(thisFeedbackComments);
    console.log(data);
  }

  newArray();

  return (
    <div className="feedback_wrapper">
      <div className="main_section-feedback">
        <div className="feedback_header">
          <GoBackBtn />

          <button className="edit_feedback" onClick={() => navigate(`/editfeedback/${id}`)}>
            Edit Feedback
          </button>
        </div>

        <div className="items_wrapper">
          <FeedbackItem
            key={feedbackItemInner.id}
            feedbackItem={feedbackItemInner}
            setData={setData}
          />
          <div className="comment-wrapper">
            <div className="comment_title">
              <p className="comment_number">{feedbackItemInner.comments}</p>Comments
            </div>

            {thisFeedbackComments.map((comment) => {
              if (comment.comment_answer_to_id === 0) {
                return <CommentItem comment={comment} setCommentsData={setCommentsData} />;
              } else {
                return (
                  <CommentItemInner
                    comment={comment}
                    setCommentsData={setCommentsData}
                    commentsData={commentsData}
                  />
                );
              }
            })}
          </div>
          <AddCommentSection
            feedbackID={feedbackItemInner.id}
            setCommentsData={setCommentsData}
            commentsData={commentsData}
          />
        </div>
      </div>
    </div>
  );
};

export default InnerFeedBack;
