import Notification from "../Notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2>Statisics</h2>
      {total ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};

export default Statistics;
