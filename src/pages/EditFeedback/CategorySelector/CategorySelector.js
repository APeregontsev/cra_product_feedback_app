export function CategorySelector(props) {
  const { showWarning, onCategoryChanged, editFeedback } = props;

  return (
    <select
      name="add_category"
      className={showWarning ? "category_feedback__input warning" : "category_feedback__input"}
      onChange={(event) => {
        onCategoryChanged(event.target.value);
      }}
    >
      <option selected={editFeedback.type ? false : true} disabled>
        Choose category
      </option>
      <option defaultValue="UI" selected={editFeedback.type === "UI" ? true : false}>
        UI
      </option>
      <option defaultValue="UX" selected={editFeedback.type === "UX" ? true : false}>
        UX
      </option>
      <option
        defaultValue="Enhancement"
        selected={editFeedback.type === "Enhancement" ? true : false}
      >
        Enhancement
      </option>
      <option defaultValue="Bug" selected={editFeedback.type === "Bug" ? true : false}>
        Bug
      </option>
      <option defaultValue="Feature" selected={editFeedback.type === "Feature" ? true : false}>
        Feature
      </option>
    </select>
  );
}
