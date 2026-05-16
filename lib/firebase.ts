import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAnalytics, isSupported, type Analytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAVsTgniUTc_u8hzTQkVwYZCueYk_wOJfc',
  authDomain: 'new-era-badc0.firebaseapp.com',
  projectId: 'new-era-badc0',
  storageBucket: 'new-era-badc0.firebasestorage.app',
  messagingSenderId: '1088679722978',
  appId: '1:1088679722978:web:3b9d3ef1625f8f287883bb',
  measurementId: 'G-Z8VXZQKDRW',
};

let firebaseApp: FirebaseApp | null = null;
let analytics: Analytics | null = null;

export function initializeFirebase() {
  if (typeof window === 'undefined') {
    return null;
  }

  if (!firebaseApp) {
    firebaseApp = initializeApp(firebaseConfig);
  }

  if (!analytics) {
    isSupported()
      .then((supported) => {
        if (supported && firebaseApp) {
          analytics = getAnalytics(firebaseApp);
        }
      })
      .catch(() => {
        // Analytics not supported in this environment.
      });
  }

  return firebaseApp;
}
