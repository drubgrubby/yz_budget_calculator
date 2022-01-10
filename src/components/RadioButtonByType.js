const RadioButtonByType = ({
	type,
	items, 
	selectedItems,
	setSelectedItems
}) => {

	// This gets all of the items of the type that is passed in
	const itemsByType = items.filter(i => { 
		return i.type === type; 
	})

	const onRadioChangeValue = (type, id) => {
		// If there's already an entry for that type, update it, else add it.
		let tempSelected = [...selectedItems];
		for (let i =0; i < tempSelected.length; i++) {
			if (tempSelected[i].type === type) {
				tempSelected.splice(i,1);
			} 
		}
		
		let kvp = {type: type, id: id};
		setSelectedItems([...tempSelected, kvp]);	
	};

	// Remove underscores from name
	const title = type.replace(/_/g, " ");

	return (
	<div className="design-options-container">
		<div className="design-options-title">{ title }</div>
		<div className="design-radio-box">
			<div onChange={ () => onRadioChangeValue(type, 0) }>
				<input 
					type='radio'
					value='0'
					name={type}
				/> None
			</div>
			<div>
				{itemsByType.map((v,i) => {
					const lp = v.lowPrice
						.toString()
						.slice(0,-2);
					const hp = v.highPrice
						.toString()
						.slice(0,-2);		

					return (
						<div key={i} onChange={ () => onRadioChangeValue(type, v._id) }>
							<input 
								type='radio'
								value={v._id}
								name={type}
							/> {v.name} ${lp} - ${hp}
						</div>
					)}
				)}
			</div>
		</div>
	</div>
	)
};
export default RadioButtonByType;
