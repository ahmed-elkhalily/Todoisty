import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyA-Vh0o2VSSnWeiUoaScJJXPIjxLj8V8aE',
  authDomain: 'todoist-clone-12.firebaseapp.com',
  projectId: 'todoist-clone-12',
  storageBucket: 'todoist-clone-12.appspot.com',
  messagingSenderId: '106630721057',
  appId: '1:106630721057:web:bbe84f0bbb5608a51e3d60',
  measurementId: 'G-PR10G4JFX3',
});
const firestore = firebaseConfig.firestore();

export default firestore;
