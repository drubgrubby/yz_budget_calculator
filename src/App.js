import { useState, useEffect } from 'react';
import './App.css';
// import { db } from './utils/firebase.js';


// Import and initialize firebase
/* ToDo: move to utils file */
import { initializeApp} from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
	apiKey: "AIzaSyD7NUVfrImccSo8FuCBG7bXVk0oLFqgE-k",
  authDomain: "yardzen-demo.firebaseapp.com",
  databaseURL: "https://yardzen-demo.firebaseio.com",
  projectId: "yardzen-demo",
  storageBucket: "yardzen-demo.appspot.com",
  messagingSenderId: "509183652730",
  appId: "1:509183652730:web:ba2208f7d8e0882f009cc3"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


function App() {

  /* ToDo: Create state for :
      budget
      fieldUpdates
      errors

  */

  // Create and initialize state
  const [items, setItems] = useState({});

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

  console.log('items:',items);


  return (
    <div className="App">
      <div>Yardzen Budget Calculator</div>

    </div>
  );
}

export default App;
