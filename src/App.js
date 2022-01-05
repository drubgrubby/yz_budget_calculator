import { useState, useEffect } from 'react';
import './App.css';
import { db } from './utilities/firebase.js';
import { collection, getDocs } from 'firebase/firestore/lite';

// Import components
import { EnterBudget, DisplayBudget, SelectDesignItems, BudgetOverUnder } from './components/index'

function App() {

  /* ToDo: Create state for :
      budget
      selected items
      errors ex. budget too high/low
  */

  // Create and initialize state
  const [items, setItems] = useState({});
  const [enterBudget, setEnterBudget] = useState(true);

  // Get items from Firebase collection
  async function getItems() {
    const itemsCollection = collection(db, 'items');
    const itemSnapshot = await getDocs(itemsCollection);
    const itemList = itemSnapshot.docs.map(doc => doc.data());
    setItems(itemList);
  };

  useEffect(() => {
    getItems()
  }, []);

  console.log('items: ', items);

  return (
    <div className='App'>
      <div className='calculator-container'>
        <div>Yardzen Budget Calculator</div>
        <div className='temp-border'>{enterBudget ? <EnterBudget /> : <DisplayBudget /> } </div>
        <div className='temp-border'><BudgetOverUnder /></div>
        <div className='temp-border'><SelectDesignItems /></div>
      </div>
    </div>
  );
}

export default App;
