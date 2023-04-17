import "./style.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GoBackBtn from "../../components/goBackBtn";
import { Section } from "../../components/sections/Section";
import { CategorySelector } from "./CategorySelector/CategorySelector";
import { FeedbackTitle } from "./FeedbackTitle/FeedbackTitle";
import { FeedbackText } from "./FeedbackText/FeedbackText";

const AddFeedback = ({ setData }) => {
  let navigate = useNavigate();

  function cancelButtonHandler() {
    navigate("/");
  }

  const [titleInput, setTitleInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [textInput, setTextInput] = useState("");

  // Проверяем валидность полей

  // Есть ли валидное значение в input
  function hasStringValue(val) {
    return val !== undefined && val !== null && val.trim() != "";
  }

  const titleIsValid = hasStringValue(titleInput);
  const categoryIsValid = hasStringValue(categoryInput);
  const textIsValid = hasStringValue(textInput);

  const formIsValid = titleIsValid && categoryIsValid && textIsValid;

  function addFeedbackHandler() {
    if (!formIsValid) {
      return;
    } else {
      setData((data) => {
        let newFeedbackItem = {
          id: 0,
          title: "",
          text: "",
          type: "UI",
          authorName: "Alex",
          authorLogin: "alex.pereg",
          roadmap: "Planned",
          votes: 0,
          comments: 0,
        };
        newFeedbackItem.title = titleInput;
        newFeedbackItem.text = textInput;
        newFeedbackItem.type = categoryInput;

        // Определяем максимальный ID
        let maxId = 0;
        data.forEach((item) => (item.id > maxId ? (maxId = item.id) : null));
        // Увеличиваем максимальный ID и присваиваем новому обьекту
        ++maxId;
        newFeedbackItem.id = maxId;
        // Добавляем элемент в массив
        console.log(`SAVED`, newFeedbackItem);
        return [newFeedbackItem, ...data];
      });
      navigate("/");
    }
  }

  return (
    <div className="addfeedback_wrapper">
      <div className="main_section-addfeedback">
        <div className="feedback_header">
          <GoBackBtn />
        </div>

        <div className="addweedback_wrapper">
          <div className="logo_wrapper">
            <div className="logo_round">+</div>
          </div>

          <div className="title_wrapper">
            <h1 className="addfeedback_title">Create New Feedback</h1>
          </div>

          <Section title="Feedback Title" hint="Add a short, descriptive headline">
            <FeedbackTitle showWarning={!titleIsValid} onTitleChanged={setTitleInput} />
          </Section>

          <Section title="Category" hint="Choose a category for your feedback">
            <CategorySelector showWarning={!categoryIsValid} onCategoryChanged={setCategoryInput} />
          </Section>
          <Section
            title="Feedback Detail"
            hint="Include any specific comments on what should be improved, added, etc."
          >
            <div className="feedback_add_text">
              <FeedbackText showWarning={!textIsValid} onTextChanged={setTextInput} />
            </div>
          </Section>
          <div className="buttons_wrapper adaptive">
            <button className="cancel_feedback button_adaptive" onClick={cancelButtonHandler}>
              Cancel
            </button>
            <button className="add_feedback button_adaptive" onClick={addFeedbackHandler}>
              Add Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFeedback;
