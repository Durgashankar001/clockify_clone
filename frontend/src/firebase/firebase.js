import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCnGixS0hqy47mcMptMUUvGMdWDDKEmOPc',
  authDomain: 'clockify-81c74.firebaseapp.com',
  projectId: 'clockify-81c74',
  storageBucket: 'clockify-81c74.appspot.com',
  messagingSenderId: '769058255790',
  appId: '1:769058255790:web:59176b0f9a627ad55fce3f',
  measurementId: 'G-1BEJWKBCZV',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
