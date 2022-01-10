import { useState, useEffect } from 'react';
import { DisplayBudget } from '.';

const BudgetOverUnder = ({
	budget,
	items,
	selectedItems
}) => {

	const [budgetMath, setBudgetMath] = useState('Select design items below.');
	const [budgetStatus, setBudgetStatus] = useState('');


	let highTotalToPrint = 0;
	let lowTotalToPrint = 0;

	const overUnderBudget = (budget, items, selectedItems) => {
		let highTotalCost = 0;
		let lowTotalCost = 0;
		// This will get the ids of the selected items
		let selectedIds = [];	
		for (let i in selectedItems) {
			selectedIds = [];
			// This weeds out the 'none' options
			if (selectedItems[i].id !== 0){
				selectedIds.push(selectedItems[i].id);
			}

			// Add up the high and low amounts for each
			for (let i = 0; i < items.length; i++) {

				if (selectedIds.includes(items[i]._id)) {
					lowTotalCost += items[i].lowPrice;
					highTotalCost += items[i].highPrice;
				}

				if ( lowTotalCost !== 0 && highTotalCost !== 0 ){
					lowTotalToPrint = parseInt(lowTotalCost.toString().slice(0,-2));
					highTotalToPrint = parseInt(highTotalCost.toString().slice(0,-2));
				} else {
					lowTotalToPrint = 0;
					highTotalToPrint = 0;
				}
			}
		};

		if (lowTotalToPrint === 0 || highTotalToPrint === 0) {
			setBudgetMath("Select design items below.");	
		} else {
			setBudgetMath(`Your selections will cost between $${lowTotalToPrint} and $${highTotalToPrint}`);
		}

		// Figure out if it's over or under budget
		let overUnder = 'UNDER';		
		if (budget < lowTotalToPrint) {
			overUnder = 'OVER';
		} else if ( budget > highTotalToPrint) {
			overUnder = 'UNDER';
		} else if (budget > lowTotalToPrint && budget < highTotalToPrint) {
			overUnder = 'JUSTRIGHT';
		}
		

		const statusOptions = {
			OVER: "You're over budget. You can choose some less expensive options, or increase your budget.",
			UNDER: "You're under Budget. Is there something else you want?",
			JUSTRIGHT: "You're right on target! Confirm your selections and we'll get started"
		}

		setBudgetStatus(statusOptions[overUnder]);
	};

	useEffect (() => {
			overUnderBudget(budget, items, selectedItems);	
	},[selectedItems, budget, items]);


	return (
		<div className="over-under">
			<div className="selection-math">{ budgetMath }</div>
			<div className='status-options'>{ budgetStatus }</div>
		</div>
	)

};

export default BudgetOverUnder;