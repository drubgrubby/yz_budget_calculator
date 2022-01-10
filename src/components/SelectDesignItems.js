import { type } from "@testing-library/user-event/dist/type";
import { RadioButtonByType } from '../components/index'

const SelectDesignItems = ({
	items,
	selectedItems,
	setSelectedItems
}) => {

	// Get the item types so we can make radio button groups out of them
	const itemValues = Object.values(items);
	const types = [...new Set(itemValues.map(item => item.type))];

	return (
		<div className="select-items">
				{types.map (( type, index) => (
					<RadioButtonByType
						key = { index }
						items = { items }
						type = { type }
						selectedItems = { selectedItems }
						setSelectedItems = { setSelectedItems }
				/>
				))}
		</div>
	)

};

export default SelectDesignItems;
