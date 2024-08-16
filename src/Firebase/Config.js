
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkR654S2f3EYYN7pTbMzjybHBEqiKs9Wc",
  authDomain: "macotaa-2d6f8.firebaseapp.com",
  projectId: "macotaa-2d6f8",
  storageBucket: "macotaa-2d6f8.appspot.com",
  messagingSenderId: "510066885161",
  appId: "1:510066885161:web:4bf45f95c825db85615238",
  measurementId: "G-6ETVF84L4V"
};


const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app)