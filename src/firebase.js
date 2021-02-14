import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAej4X-9dfi0XB_UcfkEYvzNLfiSetzKu0",
    authDomain: "discord-clone-6d4c7.firebaseapp.com",
    projectId: "discord-clone-6d4c7",
    storageBucket: "discord-clone-6d4c7.appspot.com",
    messagingSenderId: "506305542396",
    appId: "1:506305542396:web:5a2678f1d5cb7baa7f7f79",
    measurementId: "G-740169SLGS"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;