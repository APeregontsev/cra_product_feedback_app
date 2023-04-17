import "./style.css";
import { useNavigate } from "react-router-dom";

const AddBtn = ({ text, setAddFeedbackItem }) => {
  let navigate = useNavigate();

  function addFeedbackHandler() {
    navigate("/addfeedback");
  }

  return (
    <button className="add_feedback" onClick={addFeedbackHandler}>
      {text}
    </button>
  );
};

export default AddBtn;
