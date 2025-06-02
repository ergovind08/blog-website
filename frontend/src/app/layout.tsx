import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import { AuthProvider } from '../context/AuthContext';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Personal Blog Platform',
  description: 'A platform for personal blogging',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Toaster 
            position="top-right"
            toastOptions={{
              // Default options for specific types
              success: {
                duration: 3000,
                style: {
                  background: 'green',
                  color: 'white',
                },
              },
              error: {
                duration: 4000,
                style: {
                  background: 'red',
                  color: 'white',
                },
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}