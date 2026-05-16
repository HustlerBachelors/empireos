import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import FirebaseInit from '../components/FirebaseInit';

export const metadata: Metadata = {
  title: 'EmpireOS',
  description: 'AI-powered creator operating system for multi-brand workflow, sponsor CRM, and content growth.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FirebaseInit />
        {children}
      </body>
    </html>
  );
}
