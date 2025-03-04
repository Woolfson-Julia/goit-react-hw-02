import { useState, useEffect } from "react";
import css from "./App.module.css"
import Cafe from "../Cafe/Cafe";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification  from "../Notification/Notification";

export default function App() {
  const [countClicks, setcountClicks] = useState(() => {
    const savedFeedback = localStorage.getItem("saved-feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
  });
  
  const totalFeedback = countClicks.good + countClicks.neutral + countClicks.bad;

  
  const updateFeedback = (feedbackType) => {
          setcountClicks({
            ...countClicks,
            [feedbackType]: countClicks[feedbackType] + 1,
          });
  };
  
  useEffect(() => {
    localStorage.setItem("saved-feedback", JSON.stringify(countClicks));
  }, [countClicks]);

  return (
    <div className={css.container}>
      <Cafe />
      <Options
        onUpdate={updateFeedback}
        totalFeedback={totalFeedback}
        droppingState={setcountClicks}
      />
      {totalFeedback !== 0 ? (
        <Feedback count={countClicks} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
};
