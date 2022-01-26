const EnterBudget = ({
  budget,
  handleBudgetClick,
  handleBudgetInputChange,
  errors,
}) => {
  return (
    <>
      <div className="input-container">
        <input
          className="input"
          type="text"
          name="budget"
          value={budget}
          onChange={handleBudgetInputChange}
          placeholder="Enter project budget"
        />
        <button onClick={handleBudgetClick}>Let's Go!</button>
      </div>
      <div>
        <span className="error">{errors}</span>
      </div>
    </>
  );
};
export default EnterBudget;
