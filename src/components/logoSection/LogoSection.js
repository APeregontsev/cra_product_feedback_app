import { feedback_types } from "../../data/feedbackTypes";

import TypeFeedbackRadio from "../typeFeedbackRadio/TypeFeedbackRadio";
import "./style.css";

const LogoSection = ({ setTypeFeedbackRadio, typeFeedbackRadio, menuBurger, setMenuBurger }) => {
  return (
    <div className="header__menu">
      <div className="header__body">
        <div className="header_body-title">Frontend Mentor</div>
        <div className="header_body-subtitle">Feedback Board</div>
      </div>
      <div className={menuBurger ? "burger_menu active" : "burger_menu"}>
        <span className="burger__isolated" onClick={() => setMenuBurger((data) => !data)}></span>
        <span className="burger__span"></span>
        <div className={menuBurger ? "burger_menu_list active" : "burger_menu_list"}>
          <div className="type__selection2">
            {feedback_types.map((type) => {
              return (
                <TypeFeedbackRadio key={type.id} type={type} setTypeFeedbackRadio={setTypeFeedbackRadio} typeFeedbackRadio={typeFeedbackRadio} />
              );
            })}
          </div>

          <div className="roadmap2">
            <div className="roadmap_title_wrapper2">
              <div className="roadmap__title">Roadmap</div>
              <div className="roadmap__view">View</div>
            </div>

            <div className="roadmap_items_wrapper2">
              <div className="item">
                <div className="item__planned">Planned</div>
                <div className="item_number">2</div>
              </div>
              <div className="item">
                <div className="item__progress">In-progress</div>
                <div className="item_number">3</div>
              </div>
              <div className="item">
                <div className="item__live">Live</div>
                <div className="item_number">1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
