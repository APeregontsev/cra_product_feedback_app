import { useState } from "react";
import "./style.css";

const VotesBox = ({ votesData, setData }) => {
  const [radioPressed, setButtonPressed] = useState(false);

  function votesHandler() {
    setButtonPressed((radio) => !radio);
    console.log(radioPressed);

    if (!radioPressed) {
      setData((data) => {
        return data.map((item) => {
          if (item.id === votesData.id) {
            return {
              ...item,
              votes: ++item.votes,
            };
          }
          return item;
        });
      });
    } else {
      setData((data) => {
        return data.map((item) => {
          if (item.id === votesData.id) {
            return {
              ...item,
              votes: --item.votes,
            };
          }
          return item;
        });
      });
    }
  }

  return (
    <div className="votes-wrapper">
      <div className={radioPressed ? "votes-active" : "votes"} onClick={votesHandler}>
        {votesData.votes}
      </div>
    </div>
  );
};

export default VotesBox;
