import "./style.css";

const TypeFeedbackRadio = ({ type, setTypeFeedbackRadio, typeFeedbackRadio }) => {
  function radioButtonHandler(event) {
    setTypeFeedbackRadio(event.target.value);
    console.log("RADIO BATTON!!!!   type", type);
    console.log("RADIO BATTON!!!!   typeFeedbackRadio", typeFeedbackRadio);
    console.log("RADIO BATTON!!!!   event", event.target.value);
  }

  return (
    <>
      <input
        type="radio"
        name={`type_selection`}
        value={type.title}
        className="radio__rating"
        id={`type_${type.title}`}
        onChange={radioButtonHandler}
        checked={typeFeedbackRadio === type.title ? true : false}
      />
      <label htmlFor={`type_${type.title}`} className="radio__label">
        <div className="rating__digit">{type.title}</div>
      </label>
    </>
  );
};

export default TypeFeedbackRadio;
