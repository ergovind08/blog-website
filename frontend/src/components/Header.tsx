'use client';

import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          My Blog
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {!isAuthenticated ? (
              <>
                <li>
                  <Link href="/login" className="hover:underline">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="hover:underline">
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/dashboard" className="hover:underline">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button onClick={logout} className="hover:underline">
                    Logout
                  </button>
                </li>
                <li>
                  <span>Hello, {user?.email}</span>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}