// Импортируем необходимые модули из Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Для аутентификации
import { getFirestore } from "firebase/firestore"; // Для Firestore

// Ваши параметры конфигурации Firebase, которые вы получаете в Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAPNDHK_1j_NSDQ0wwOE9hWLojkZxnu_RU",
  authDomain: "chat-6bc30.firebaseapp.com",
  projectId: "chat-6bc30",
  storageBucket: "chat-6bc30.appspot.com",
  messagingSenderId: "845478274518",
  appId: "1:845478274518:web:fb8c520e4eaed52f657077",
  measurementId: "G-FFQQMYPMDJ",
};

// Инициализируем Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Для аутентификации
const firestore = getFirestore(app); // Для Firestore

// Экспортируем объекты для использования в других частях приложения
export { app, analytics, auth, firestore };
