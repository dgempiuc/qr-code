
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const key = process.env.REACT_APP_FIREBASE_KEY;
const authdomain = process.env.REACT_APP_FIREBASE_AUTHDOMAIN;
const projectId = process.env.REACT_APP_FIREBASE_PROJECTID;
const storagebucket = process.env.REACT_APP_FIREBASE_STORAGEBUCKET;
const messagingsenderid = process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID;
const appid = process.env.REACT_APP_FIREBASE_APPID;

const firebaseConfig = {
  apiKey: `${key}`,
  authDomain: `${authdomain}`,
  projectId: `${projectId}`,
  storageBucket: `${storagebucket}`,
  messagingSenderId: `${messagingsenderid}`,
  appId: `${appid}`,
  measurementId: "G-XCKCQ5G9KN",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();

export { db };
export { auth };
