import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCl-TMX19UGuGi-XCf14bDd_e__YFCNT3g",
  authDomain: "mapiz-nmooq7.firebaseapp.com",
  projectId: "mapiz-nmooq7",
  storageBucket: "mapiz-nmooq7.appspot.com",
  messagingSenderId: "459663421640",
  appId: "1:459663421640:web:6e3991e6752f24255bf5fd"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
