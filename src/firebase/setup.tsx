import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAkTj9QwNcNrizSE2ngnYZMZsNrc3_dpyM",
  authDomain: "fox-news-clone.firebaseapp.com",
  projectId: "fox-news-clone",
  storageBucket: "fox-news-clone.appspot.com",
  messagingSenderId: "851093488268",
  appId: "1:851093488268:web:9a8417cb46be16cdfcf1a9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)