import PropTypes from "prop-types";
import css from "../FeedbackOptions/FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((element) => (
        <button
          type="button"
          key={element}
          name={element}
          onClick={onLeaveFeedback}
          className={css.button}
        >
          {element}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
