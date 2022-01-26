const DisplayBudget = ({ budget, handleBudgetClick }) => {
  return (
    <>
      <div className="display-budget" onClick={handleBudgetClick}>
        Your budget is ${budget}
      </div>
      <div className="display-budget_click">Click budget to update</div>
    </>
  );
};

export default DisplayBudget;
