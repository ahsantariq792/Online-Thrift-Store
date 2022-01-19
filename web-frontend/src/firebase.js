import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDmzJsduab3K62BDrHhBiUYmyrfAtBWuhI",
  authDomain: "testing-image-nodejs.firebaseapp.com",
  projectId: "testing-image-nodejs",
  storageBucket: "testing-image-nodejs.appspot.com",
  messagingSenderId: "55657629084",
  appId: "1:55657629084:web:90beafd1330bcef698b459",
  measurementId: "G-BYNRFNJC2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app)
export {ref, storage, uploadBytesResumable,getDownloadURL };