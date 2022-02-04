const EnterBudget = ({
  budget,
  handleBudgetClick,
  handleBudgetInputChange,
  errors,
}) => {
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleBudgetClick(e);
    }
  };

  return (
    <>
      <div className="input-container">
        <input
          className="input"
          type="text"
          name="budget"
          value={budget}
          onChange={handleBudgetInputChange}
          onKeyPress={handleEnter}
          placeholder="Enter project budget"
        />
        <button type="submit" onClick={handleBudgetClick}>
          Let's Go!
        </button>
      </div>
      <div>
        <span className="error">{errors}</span>
      </div>
    </>
  );
};
export default EnterBudget;
