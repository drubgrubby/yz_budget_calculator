// import firebase from "firebase";
// import "firebase/firestore";

// const firebaseConfig = {
// 	apiKey: "AIzaSyD7NUVfrImccSo8FuCBG7bXVk0oLFqgE-k",
//   authDomain: "yardzen-demo.firebaseapp.com",
//   databaseURL: "https://yardzen-demo.firebaseio.com",
//   projectId: "yardzen-demo",
//   storageBucket: "yardzen-demo.appspot.com",
//   messagingSenderId: "509183652730",
//   appId: "1:509183652730:web:ba2208f7d8e0882f009cc3"
// }

// firebase.initializeApp(firebaseConfig);

// export const db = firebase.firestore();

// export default firebase;

// Import and initialize firebase
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
export default db;
