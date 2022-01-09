import { type } from "@testing-library/user-event/dist/type";
import RadioButtonByType from "./RadioButtonByType";

const SelectDesignItems = ({
	items,
	selectedItems,
	setSelectedItems
}) => {

	// Get the item types so we can make radio button groups out of them
	const itemValues = Object.values(items);
	const types = [...new Set(itemValues.map(item => item.type))];

	return (
		<>
				{types.map (( type, index) => (
					<RadioButtonByType
						index = { index }
						items = { items }
						type = { type }
						selectedItems = { selectedItems }
						setSelectedItems = { setSelectedItems }
				/>
				))}
		</>
	)

};

export default SelectDesignItems;
