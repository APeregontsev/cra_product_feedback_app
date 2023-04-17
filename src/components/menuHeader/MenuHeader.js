import { useState } from "react";
import AddBtn from "../addBtn/AddBtn";
import "./style.css";

const MenuHeader = ({ setAddFeedbackItem, setData, data }) => {
  const [sortBy, setSortBy] = useState("Most Upvotes");

  // Функции сортировки по нажатию на кнопку в выпадающем меню
  function mostHandler() {
    setSortBy("Most Upvotes");
    setData((data) => {
      return [...data].sort((a, b) => b.votes - a.votes);
    });
  }

  function leastHandler() {
    setSortBy("Least Upvotes");
    setData((data) => {
      return [...data].sort((a, b) => a.votes - b.votes);
    });
  }

  function mostComments() {
    setSortBy("Most Comments");
    setData((data) => {
      return [...data].sort((a, b) => b.comments - a.comments);
    });
  }

  function leastComments() {
    setSortBy("Least Comments");
    setData((data) => {
      return [...data].sort((a, b) => a.comments - b.comments);
    });
  }

  return (
    <div className="main_header">
      <div className="suggestions_wrapper">
        <p className="suggestion__number">{data.length}</p>
        <p className="suggestion__text">Suggestions</p>
      </div>

      <div className="sort_wrapper">
        <div className="sort__text">Sort by :</div>

        <div className="sort_submenu__wrapper">
          <div className="sort__criteria">{sortBy}</div>
          <div className="dropdown-content">
            <p className={sortBy === "Most Upvotes" ? "dropdown-item dropdown-item-checked" : "dropdown-item"} onClick={mostHandler}>
              Most Upvotes
            </p>
            <p className={sortBy === "Least Upvotes" ? "dropdown-item dropdown-item-checked" : "dropdown-item"} onClick={leastHandler}>
              Least Upvotes
            </p>
            <p className={sortBy === "Most Comments" ? "dropdown-item dropdown-item-checked" : "dropdown-item"} onClick={mostComments}>
              Most Comments
            </p>
            <p className={sortBy === "Least Comments" ? "dropdown-item dropdown-item-checked" : "dropdown-item"} onClick={leastComments}>
              Least Comments
            </p>
          </div>
        </div>
      </div>

      <AddBtn text={"+ Add Feedback"} setAddFeedbackItem={setAddFeedbackItem} />
    </div>
  );
};

export default MenuHeader;
