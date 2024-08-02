import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBF3EE2CJBENRrPF0wZhMlmhOK_9G_5AbA",
  authDomain: "carefinder-95840.firebaseapp.com",
  projectId: "carefinder-95840",
  storageBucket: "carefinder-95840.appspot.com",
  messagingSenderId: "38774621342",
  appId: "1:38774621342:web:f398dd78cc29987baa278f",
  measurementId: "G-1R625PM72M"
};

const app = initializeApp(firebaseConfig)
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();




// export {firestore, auth , app};

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export default app;


















// // firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCLkmU4SQdHFERrhKtdMZ_ufqnrG818j0E",
//   authDomain: "medaccess-31c4d.firebaseapp.com",
//   projectId: "medaccess-31c4d",
//   storageBucket: "medaccess-31c4d.appspot.com",
//   messagingSenderId: "986629636933",
//   appId: "1:986629636933:web:318c4f493f6ea30eb6342c"
//   // measurementId: "G-J6X75SJQ05"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth };
// export { auth, firestore, app };
