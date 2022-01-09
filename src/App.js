import { useState, useEffect } from 'react';
import './App.css';
import { db } from './utilities/firebase.js';
import { collection, getDocs } from 'firebase/firestore/lite';

// Import components
import { EnterBudget, DisplayBudget, SelectDesignItems, BudgetOverUnder } from './components/index'

// Having trouble with Firebase so created fake data
import fakeFirebase from './utilities/fakeFirebase';

function App() {

  // Create and initialize state
  const [items, setItems] = useState(fakeFirebase);
  const [showEnterBudget, setShowEnterBudget] = useState(true);
  const [budget, setBudget] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [errors, setErrors] = useState('');

  // Get items from Firebase collection
  // async function getItems() {
  //   const itemsCollection = collection(db, 'items');
  //   const itemSnapshot = await getDocs(itemsCollection);
  //   const itemList = itemSnapshot.docs.map(doc => doc.data());
  //   setItems(itemList);
  // };

  // // Get items from Firebase collection
  // const getItems = async () => {
  //   const itemsCollection = collection(db, 'items');
  //   const response = await getDocs(itemsCollection);
  //   const data = response.docs.map(doc => doc.data());
  //   return data
  // };

  // getItems()
  // .then( (data) => {
  //   //console.log(data);
  //   setItems(data);
  // })
  // .catch( (error) => {
  //   console.log(`Firebase Error: `, error);
  //   alert("Server not responding.  Please try again.");
  // });

  // useEffect(() => {
  //     getItems()
  // }, []);


  const validateBudget = () => {
 
    /* ToDo: This is ugly and only supports one error.  Make it better and more flexible */

    // If the budget is higher than the sum of the most expensive options
    // or lower than the least expensive option...ERROR!
    const budgetHigh = 500000, budgetLow = 5000;

    if (budget > budgetHigh || budget < budgetLow ){
      setErrors(`Budget must be in the range of ${budgetLow} - ${budgetHigh} `);
      return true;
    } else {
      setErrors('');
      return false;
    } 
  };

  // Handle enter budget click
  const handleBudgetClick = event => {

    const isError = validateBudget(event.target.value);

    if (!isError) {
      setShowEnterBudget(showEnterBudget === true ? false : true);
    }
  };

  const handleBudgetInputChange = event => {

    // Make sure it's a number before updating
    const regex = /^[0-9\b]+$/;

    if (event.target.value === '' || regex.test(event.target.value)) {
      setBudget(event.target.value);
    }
  };

  return (
    <div className='App'>
      <div className='calculator-container'>
        <div>Yardzen Budget Calculator</div>
        <div className='calculator-container'>
          {showEnterBudget 
            ? 
            <EnterBudget 
              budget = { budget }
              handleBudgetClick = { handleBudgetClick }
              handleBudgetInputChange = { handleBudgetInputChange }
              errors = { errors }
            /> 
            :
            <>
            <div>
              <DisplayBudget 
              budget = { budget }
              handleBudgetClick = { handleBudgetClick }
              /> 
              </div>
              <div className='temp-border'><BudgetOverUnder /></div>
              <div className='temp-border'>
                <SelectDesignItems 
                  items = { items }
                  selectedItems = { selectedItems}
                  setSelectedItems = { setSelectedItems }
                />
                </div>
           </>
          } 
            </div>

      </div>
    </div>
  );
}

export default App;
