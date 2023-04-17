import { useState } from "react";
import FeedbackItem from "../../components/feedbackItem/FeedbackItem";
import LogoSection from "../../components/logoSection/LogoSection";
import MenuHeader from "../../components/menuHeader/MenuHeader";
import NoFeedback from "../../components/noFeedback";
import RoadmapSection from "../../components/roadmapSection/RoadmapSection";
import TypeFeedbackRadio from "../../components/typeFeedbackRadio/TypeFeedbackRadio";
import { feedback_types } from "../../data/feedbackTypes";
import "./style.css";

const MainPage = ({ data, setData }) => {
  const [menuBurger, setMenuBurger] = useState(false);
  const [typeFeedbackRadio, setTypeFeedbackRadio] = useState("All");

  return (
    <div className="wrapper">
      <div className="menu_section">
        <LogoSection
          setTypeFeedbackRadio={setTypeFeedbackRadio}
          typeFeedbackRadio={typeFeedbackRadio}
          menuBurger={menuBurger}
          setMenuBurger={setMenuBurger}
        />

        <div className="type__selection">
          {feedback_types.map((type) => {
            return <TypeFeedbackRadio key={type.id} type={type} setTypeFeedbackRadio={setTypeFeedbackRadio} typeFeedbackRadio={typeFeedbackRadio} />;
          })}
        </div>

        <RoadmapSection />
      </div>

      <div className={menuBurger ? "main_section opacity" : "main_section"}>
        <MenuHeader setData={setData} data={data} />

        <div className="items_wrapper">
          {data.length === 0 && <NoFeedback />}

          {data.map((feedbackItem) => {
            // Проверяем какой выбран тип feedback в меню (radioButton)

            if (typeFeedbackRadio === "All") {
              return <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} setData={setData} />;
            }

            if (feedbackItem.type === typeFeedbackRadio) {
              return <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} setData={setData} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
