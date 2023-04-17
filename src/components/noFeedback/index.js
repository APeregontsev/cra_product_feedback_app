import AddBtn from "../addBtn/AddBtn";
import "./style.css";

const NoFeedback = () => {
  return (
    <div className="no-feedback_wrapper">
      <div className="no_feedback_logo"></div>
      <div className="no_feedback_mainblock">
        <div className="no_feedback_title">There is no feedback yet.</div>
        <div className="no_feedback_text">
          Got a suggestion? Found a bug that needs to be squashed? <br /> We love hearing about new ideas to improve our app.
        </div>
      </div>
      <div className="no_feedback_button_wrapper">
        <AddBtn text={"+ Add Feedback"} />
      </div>
    </div>
  );
};

export default NoFeedback;
