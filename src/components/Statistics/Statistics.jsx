import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statistics}>
      {total && (
        <div>
          <p className={css.text}>Good: {good}</p>
          <p className={css.text}>Neutral: {neutral}</p>
          <p className={css.text}>Bad: {bad}</p>
          <p className={css.text}>Total: {total}</p>
          <p className={css.text}>Positive feedback: {positivePercentage}%</p>
        </div>
      )}
      {!total && <Notification message="No feedback given" />}
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
