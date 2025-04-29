import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// Your web app's Firebase configuration
export const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_APP_ID,
  apiKey: "AIzaSyBk26vxEiY9UAhfeiWxGcOWAf1-gy_ZKaE",
  authDomain: "ecom-a32fc.firebaseapp.com",
  projectId: "ecom-a32fc",
  storageBucket: "ecom-a32fc.firebasestorage.app",
  messagingSenderId: "41802161735",
  appId: "1:41802161735:web:ebd0b0ef4099cb6c6f9b62",
  measurementId: "G-BVT8VBQMK2"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export default app
export { auth, db, storage }
