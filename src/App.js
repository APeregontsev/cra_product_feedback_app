import { Route, Routes } from "react-router-dom";
import InnerFeedBack from "./pages/InnerFeedBack";
import MainPage from "./pages/MainPage";

import { useEffect, useState } from "react";
import { feedback_data } from "./data/feedbackData";
import AddFeedback from "./pages/AddFeedback";
import { feedback_comments } from "./data/feedbackComments";
import EditFeedback from "./pages/EditFeedback";

function App() {
  const [data, setData] = useState(feedback_data);
  const [commentsData, setCommentsData] = useState(feedback_comments);

  // Посчитаем и запишем колличество комментариев (feedbackComments) по каждому feedbackitem в модель (feedbackData),

  useEffect(() => {
    setData((data) => {
      console.log(data);

      return data.map((feedbackitem) => {
        let numberOfComments = 0;
        commentsData.forEach((comment) =>
          comment.feedback_id === feedbackitem.id ? ++numberOfComments : null
        );
        return { ...feedbackitem, comments: numberOfComments };
      });
    });
  }, [commentsData, setCommentsData]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage data={data} setData={setData} />} />
        <Route
          path="/innerfeedback/:id"
          element={
            <InnerFeedBack
              data={data}
              setData={setData}
              commentsData={commentsData}
              setCommentsData={setCommentsData}
            />
          }
        />
        <Route path="/addfeedback/" element={<AddFeedback setData={setData} />} />
        <Route path="/editfeedback/:id" element={<EditFeedback data={data} setData={setData} />} />
      </Routes>
    </>
  );
}

export default App;
