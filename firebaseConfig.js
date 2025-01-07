import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

import { initializeFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBwnOlcIKf2uviQPjEG97pLoIB6FNhVJkA",
  authDomain: "simfreemain.firebaseapp.com",
  projectId: "simfreemain",
  storageBucket: "simfreemain.firebasestorage.app",
  messagingSenderId: "172586581718",
  appId: "1:172586581718:web:2cbf588f6841fa51019377",
  measurementId: "G-HGF46NMVLZ",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export const functions = getFunctions(app);
export const storage = getStorage(app);
