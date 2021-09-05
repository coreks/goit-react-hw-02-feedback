const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((element) => (
        <button
          type="button"
          key={element}
          name={element}
          onClick={onLeaveFeedback}
        >
          {element}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
