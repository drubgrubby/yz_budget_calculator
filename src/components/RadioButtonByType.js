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

	

	return (
	<div className="temp-border">
		<div>{ type }</div>
		{/* <div>
			<input 
				type='radio'
				value='0'
				name={type}`
				checked={true}
			/> None
		</div> */}
		<div>
			{itemsByType.map((v,i) => {
				const lp = v.lowPrice
					.toString()
					.slice(0,-2);
				const hp = v.highPrice
					.toString()
					.slice(0,-2);		

				return (
					<div>
						<input 
							type='radio'
							value={v.name}
							name={type}
						/> {v.name} ${lp} - ${hp}
					</div>
				)}
			)}
		</div>
	</div>
	)

};
export default RadioButtonByType;
