import css from "./Feedback.module.css";

export default function Feedback({ count: { good, neutral, bad }, totalFeedback }) {
  const positiveFeedback = Math.round((good / totalFeedback) * 100);
  return (
    <div className={css.container}>
      <p className={css.text}>Good: {good}</p>
      <p className={css.text}>Neutral: {neutral}</p>
      <p className={css.text}>Bad: {bad}</p>
      <p className={css.text}>Total: {totalFeedback}</p>
      <p className={css.text}>Positive: {positiveFeedback}%</p>
    </div>
  );
}
