const EnterBudget = ({
	budget,
	handleBudgetClick,
	handleBudgetInputChange,
	errors
}) => {

	return (
		<div>
			<div>
				<input 
					type='text' 
					name='budget' 
					value={ budget } 
					onChange={ handleBudgetInputChange }
					placeholder="Enter your project budget"
				/>
				<button onClick={ handleBudgetClick }>Let's Go!</button>
			</div>
			<div><span className='red'>{ errors }</span></div>
	</div>
	)
};
export default EnterBudget;
