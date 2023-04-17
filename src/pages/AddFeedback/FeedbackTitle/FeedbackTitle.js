export function FeedbackTitle(props) {
  const { showWarning, onTitleChanged } = props;

  return (
    <>
      <input
        type="text"
        className={showWarning ? "title_feedback__input warning" : "title_feedback__input"}
        onChange={(event) => onTitleChanged(event.target.value)}
      />
      <div className="title_feedback__input-warning">{showWarning ? "Can't be empty" : null}</div>
    </>
  );
}
