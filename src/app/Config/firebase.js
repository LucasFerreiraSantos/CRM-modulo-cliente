import firebase from 'firebase/app'
//import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCXBYkKpLZ7sfU9_-O5aZWbqONPRP0fgKw',
  authDomain: 'crm-banco-de-clientes.firebaseapp.com',
  projectId: 'crm-banco-de-clientes',
  storageBucket: 'crm-banco-de-clientes.appspot.com',
  messagingSenderId: '475671610188',
  appId: '1:475671610188:web:ff26536567b8ad10c285e9',
  measurementId: 'G-J1N2D238D6'
}

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig)
