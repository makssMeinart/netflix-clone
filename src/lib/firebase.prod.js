import Firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

// We need to seed the database

const config = {
  apiKey: "AIzaSyCAmxXCI35cE6AiZzQ_P3wmDp8_O8S9HD8",
  authDomain: "netflix-firebase-408dd.firebaseapp.com",
  projectId: "netflix-firebase-408dd",
  storageBucket: "netflix-firebase-408dd.appspot.com",
  messagingSenderId: "183487477636",
  appId: "1:183487477636:web:68562b683b3d89a259cfd1",
}

const firebase = Firebase.initializeApp(config)

export { firebase }
