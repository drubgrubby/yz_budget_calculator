export const addIds = (arrayOfObjects) => {
	let tempItems = [];
	for (let i = 0; i < arrayOfObjects.length; i++) {
		tempItems.push({ ...arrayOfObjects[i], _id: (i + 1) });
	}
	return tempItems;
}
