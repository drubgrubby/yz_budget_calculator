import reactDom from "react-dom";

const DisplayBudget = ({
	budget,
	handleBudgetClick,
}) => {

	return (
		<>
			<div className='pointer' onClick={ handleBudgetClick }>Your budget is ${ budget }</div>
			<div>Click budget to update</div>
		</>
	)

};

export default DisplayBudget;
