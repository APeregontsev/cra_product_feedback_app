export function Section(props) {
  const { title, hint, children } = props;

  return (
    <div className="feedback_title_wrapper">
      <div className="feedback_title">{title}</div>
      <div className="feedback_subtitle">{hint}</div>
      {children}
    </div>
  );
}
