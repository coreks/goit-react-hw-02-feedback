import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statistics}>
      {total ? (
        <ul className={css.list}>
          <li className={css.text}>Good: {good}</li>
          <li className={css.text}>Neutral: {neutral}</li>
          <li className={css.text}>Bad: {bad}</li>
          <li className={css.text}>Total: {total}</li>
          <li className={css.text}>Positive feedback: {positivePercentage}%</li>
        </ul>
      ) : (
        <div>
          <Notification message="No feedback given" />
        </div>
      )}
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
