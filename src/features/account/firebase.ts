import { initializeApp, type FirebaseApp, getApps } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

type FirebaseClientConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};

function getFirebaseConfig(): FirebaseClientConfig {
  // Prefer environment variables for production deployments.
  // Falls back to the provided config to keep setup simple.
  return {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "AIzaSyBdyVndHJX3CdwHHBsqqgVQTymYqhAzwRw",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "jsgamespoint.firebaseapp.com",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "jsgamespoint",
    storageBucket:
      process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "jsgamespoint.firebasestorage.app",
    messagingSenderId:
      process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "851743391274",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "1:851743391274:web:515044c3920c438190cd53",
  };
}

let _app: FirebaseApp | null = null;
let _auth: Auth | null = null;
let _db: Firestore | null = null;

export function getFirebaseApp(): FirebaseApp {
  if (_app) return _app;
  if (getApps().length) {
    _app = getApps()[0]!;
    return _app;
  }
  _app = initializeApp(getFirebaseConfig());
  return _app;
}

export function getFirebaseAuth(): Auth {
  if (_auth) return _auth;
  _auth = getAuth(getFirebaseApp());
  return _auth;
}

export function getFirebaseDb(): Firestore {
  if (_db) return _db;
  _db = getFirestore(getFirebaseApp());
  return _db;
}

