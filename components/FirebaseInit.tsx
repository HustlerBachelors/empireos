'use client';

import { useEffect } from 'react';
import { initializeFirebase } from '../lib/firebase';

export default function FirebaseInit() {
  useEffect(() => {
    initializeFirebase();
  }, []);

  return null;
}
