import { collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import './components/BudgetCalculator.css';
// Import components
import {
  BudgetOverUnder,
  DisplayBudget,
  EnterBudget,
  Header,
  SelectDesignItems,
} from './components/index';
import { bgStyle } from './components/styles';
import { addIds } from './utilities/addId';
import { db } from './utilities/firebase';

// Having trouble with Firebase so created fake data
// import fakeFirebase from './utilities/fakeFirebase';

function App() {
  // // This is for my fake data. Leaving it just in case.
  // const itemsId = addIds(fakeFirebase);

  // Create and initialize state
  const [items, setItems] = useState();
  const [showEnterBudget, setShowEnterBudget] = useState(true);
  const [showSelectItems, setShowSelectItems] = useState(false);
  const [budget, setBudget] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [errors, setErrors] = useState('');

  // Get items from Firebase collection
  async function getItems() {
    const itemsCollection = collection(db, 'items');
    const itemSnapshot = await getDocs(itemsCollection);
    const itemList = itemSnapshot.docs.map((doc) => doc.data());
    // I added ids to the items 'cause items should have ids
    // Also, there are duplicates and I didn't know if that was
    // bad data, or part of the test.
    const itemsId = addIds(itemList);
    setItems(itemsId);
  }

  useEffect(() => {
    getItems();
  }, []);

  const validateBudget = () => {
    /* ToDo: This is ugly and only supports one error.
    Make it better and more universal and import it */

    // If the budget is higher than the sum of the most expensive options
    // or lower than the least expensive option...ERROR!
    const budgetHigh = 200000;
    const budgetLow = 1000;

    if (budget > budgetHigh || budget < budgetLow) {
      setErrors(`Budget must be in the range of ${budgetLow} - ${budgetHigh} `);
      return true;
    }
    setErrors('');
    return false;
  };

  // Handle enter budget click
  const handleBudgetClick = (event) => {
    const isError = validateBudget(event.target.value);

    if (!isError) {
      setShowEnterBudget(showEnterBudget !== true);
      setShowSelectItems(true);
    }
  };

  const handleBudgetInputChange = (event) => {
    // Make sure it's a number before updating
    const regex = /^[0-9\b]+$/;

    if (event.target.value === '' || regex.test(event.target.value)) {
      setBudget(event.target.value);
    }
  };

  return (
    <div className="App">
      <div className="calculator-container" style={bgStyle}>
        <div>
          <Header />
        </div>
        <h2>Yardzen Budget Calculator</h2>
        <div>
          {showEnterBudget ? (
            <EnterBudget
              budget={budget}
              handleBudgetClick={handleBudgetClick}
              handleBudgetInputChange={handleBudgetInputChange}
              errors={errors}
            />
          ) : (
            <div>
              <DisplayBudget
                budget={budget}
                handleBudgetClick={handleBudgetClick}
              />
            </div>
          )}
          {showSelectItems ? (
            <>
              <div className="temp-border">
                <BudgetOverUnder
                  budget={budget}
                  items={items}
                  selectedItems={selectedItems}
                />
              </div>
              <div className="temp-border">
                <SelectDesignItems
                  items={items}
                  selectedItems={selectedItems}
                  setSelectedItems={setSelectedItems}
                />
              </div>
            </>
          ) : (
            <> </>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
