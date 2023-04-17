import "./style.css";
import { useNavigate } from "react-router-dom";

const GoBackBtn = () => {
  let navigate = useNavigate();

  function goBackHandler() {
    navigate(-1);
  }

  return (
    <div className="go_back" onClick={goBackHandler}>
      Go Back
    </div>
  );
};

export default GoBackBtn;
