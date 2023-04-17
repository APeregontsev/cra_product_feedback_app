export function FeedbackText(props) {
  const { showWarning, onTextChanged } = props;

  return (
    <>
      <textarea
        className={showWarning ? "feedback_text_input warning" : "feedback_text_input"}
        maxLength="250"
        onChange={(event) => {
          onTextChanged(event.target.value);
        }}
      ></textarea>
      <div className="feedback_text_input-warning">{showWarning ? "Can't be empty" : null}</div>
    </>
  );
}
