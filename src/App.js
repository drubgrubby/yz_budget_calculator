//import { collection, getDocs } from 'firebase/firestore/lite';
//import { db } from './utilities/firebase';
import { useEffect, useState } from 'react';
import './components/BudgetCalculator.css';
import {
  BudgetOverUnder,
  DisplayBudget,
  EnterBudget,
  Header,
  SelectDesignItems,
} from './components/index';
import { bgStyle } from './components/styles';
import { addIds } from './utilities/addId';
import fakeFirebase from './utilities/fakeFirebase';

function App() {
  const [items, setItems] = useState();
  const [showEnterBudget, setShowEnterBudget] = useState(true);
  const [showSelectItems, setShowSelectItems] = useState(false);
  const [budget, setBudget] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [errors, setErrors] = useState('');

  /**
   * This was originally written as a coding challenge.
   * As I don't want to continue pull from their database
   * I've created a file that represents the data for this exercise.
   * Below is the original code used to pull from Firebase.
   *  **/
  // //Get items from Firebase collection
  // async function getItems() {
  //   const itemsCollection = collection(db, 'items');
  //   const itemSnapshot = await getDocs(itemsCollection);
  //   const itemList = itemSnapshot.docs.map((doc) => doc.data());
  //   const itemsId = addIds(itemList);
  //   setItems(itemsId);
  // }

  // This is the replacement "database" call
  async function getItems() {
    const itemsId = addIds(fakeFirebase);
    setItems(itemsId);
  }

  useEffect(() => {
    getItems();
  }, []);

  const validateBudget = () => {
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
