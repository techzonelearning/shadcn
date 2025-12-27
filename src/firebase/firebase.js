import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "shadcn-ui-58bda.firebaseapp.com",
  projectId: "shadcn-ui-58bda",
  storageBucket: "shadcn-ui-58bda.firebasestorage.app",
  messagingSenderId: "723753144854",
  appId: "1:723753144854:web:2588a7a38d9effc22b1b37",
  measurementId: "G-RTEPEQMMCX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default auth