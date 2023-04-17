import "./style.css";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GoBackBtn from "../../components/goBackBtn";
import imgEdit from "./../../img/edit_icon.png";
import { Section } from "../../components/sections/Section";
import { CategorySelector } from "./CategorySelector/CategorySelector";
import { FeedbackTitle } from "./FeedbackTitle/FeedbackTitle";
import { FeedbackText } from "./FeedbackText/FeedbackText";

const EditFeedback = ({ data, setData }) => {
  const { id } = useParams();

  const navigate = useNavigate();

  function cancelButtonHandler() {
    navigate(-1);
  }

  // Отберем отдельный элемент feedback из data

  let editFeedback = {};

  data.forEach((feedback) => {
    if (feedback.id === parseInt(id)) {
      editFeedback = feedback;
    }
  });

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

  // Проставим изначальные значения inputs
  useEffect(() => {
    setCategoryInput(editFeedback.type);
    setTitleInput(editFeedback.title);
    setTextInput(editFeedback.text);
  }, []);

  function saveFeedbackHandler() {
    if (!formIsValid) {
      return;
    } else {
      // Создаем новый обьект feedbackitem, заполняем его, и добавляем в модель
      setData((data) => {
        // Добавляем элемент в массив

        return data.map((feedback) => {
          if (feedback.id === editFeedback.id) {
            return { ...feedback, title: titleInput, text: textInput, type: categoryInput };
          }
          return { ...feedback };
        });
      });
      navigate("/");
    }
  }

  // Удаляем feedback

  function deleteFeedbackHandler() {
    setData(data.filter((feedback) => feedback.id !== editFeedback.id));
    navigate("/");
  }

  return (
    <div className="addfeedback_wrapper">
      <div className="main_section-addfeedback">
        <div className="feedback_header">
          <GoBackBtn />
        </div>

        <div className="addweedback_wrapper">
          <div className="logo_wrapper">
            <div className="logo_edit">
              <img src={imgEdit} />
            </div>
          </div>
          <div className="title_wrapper">
            <h1 className="addfeedback_title">Editing "{editFeedback.title}"</h1>
          </div>
          <Section title="Feedback Title" hint="Add a short, descriptive headline">
            <FeedbackTitle
              showWarning={!titleIsValid}
              onTitleChanged={setTitleInput}
              editFeedback={editFeedback}
            />
          </Section>
          <Section title="Category" hint="Choose a category for your feedback">
            <CategorySelector
              showWarning={!categoryIsValid}
              onCategoryChanged={setCategoryInput}
              editFeedback={editFeedback}
            />
          </Section>
          <Section
            title="Feedback Detail"
            hint="Include any specific comments on what should be improved, added, etc."
          >
            <div className="feedback_add_text">
              <FeedbackText
                showWarning={!textIsValid}
                onTextChanged={setTextInput}
                editFeedback={editFeedback}
              />
            </div>
          </Section>

          <div className="buttons_wrapper adaptive">
            <button className="delete_feedback button_adaptive" onClick={deleteFeedbackHandler}>
              Delete
            </button>
            <div className="two_buttons_wrapper">
              <button className="cancel_feedback button_adaptive" onClick={cancelButtonHandler}>
                Cancel
              </button>
              <button className="add_feedback button_adaptive" onClick={saveFeedbackHandler}>
                Save Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditFeedback;
