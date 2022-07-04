const firebaseConfig = {
    apiKey: "AIzaSyAs3WPwc0PehBkIlOfNDxrJRJX1Jnx19CE",
    authDomain: "breviewqr-687aa.firebaseapp.com",
    projectId: "reviewqr-687aa",
    databaseURL: "https://reviewqr-687aa-default-rtdb.firebaseio.com",
    storageBucket: "reviewqr-687aa.appspot.com",
    messagingSenderId: "246845270843",
    appId: "1:246845270843:web:c1cfca337f426653a8a51e"
};
firebase.initializeApp(firebaseConfig);
console.log("Firebase initialized");
const db = firebase.firestore();
const auth = firebase.auth();

var userId=null;