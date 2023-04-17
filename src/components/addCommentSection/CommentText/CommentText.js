export function CommentText(props) {
  const { showWarning, commentInputHandler, newCommentText } = props;

  return (
    <>
      <textarea
        className={showWarning ? "comment_text_input warning" : "comment_text_input"}
        placeholder="Type your comment here"
        maxLength="250"
        onChange={(event) => {
          commentInputHandler(event);
        }}
      ></textarea>

      <div className="comment_text_input-warning">{showWarning ? "Can't be empty" : null}</div>
    </>
  );
}
