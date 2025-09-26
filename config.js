const firebaseConfig = {
  apiKey: "AIzaSyBvme8Ojb6rMA4ojjp3iRkFsNTJ8q-KDpI",
  authDomain: "radiasi-monitoring.firebaseapp.com",
  databaseURL: "https://radiasi-monitoring-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "radiasi-monitoring",
  storageBucket: "radiasi-monitoring.firebasestorage.app",
  messagingSenderId: "1014357040045",
  appId: "1:1014357040045:web:07f998a79ff3a8226c1f24"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();