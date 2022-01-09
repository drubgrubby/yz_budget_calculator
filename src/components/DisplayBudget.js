import reactDom from "react-dom";

const DisplayBudget = ({
	budget,
	handleBudgetClick,
}) => {

	return (
		<>
			<div className='pointer' onClick={ handleBudgetClick }>Your budget is ${ budget }</div>
		</>
	)

};

export default DisplayBudget;
