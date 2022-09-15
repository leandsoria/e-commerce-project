// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBTvyh3rdQgj90DkCRJCbwCexaAbvZecQA',
  authDomain: 'ecommerce-trial-ce93d.firebaseapp.com',
  databaseURL: 'https://ecommerce-trial-ce93d-default-rtdb.firebaseio.com',
  projectId: 'ecommerce-trial-ce93d',
  storageBucket: 'ecommerce-trial-ce93d.appspot.com',
  messagingSenderId: '776358708687',
  appId: '1:776358708687:web:28ebcccaddea0d355d3eba',
  measurementId: 'G-EQPN3XG1S9',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
