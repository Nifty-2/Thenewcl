'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page10() {
  const router = useRouter();
  const [mode, setMode] = useState('login'); // 'signup' or 'login'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  // Email regex for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Show toast and auto-dismiss
  const showToast = (msg) => {
    setMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      showToast('Invalid email format');
      return;
    }

    if (password.length < 6) {
      showToast('Password must be at least 6 characters');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || {};

    if (mode === 'signup') {
      if (storedUsers[email]) {
        showToast('User already exists');
      } else {
        storedUsers[email] = password;
        localStorage.setItem('users', JSON.stringify(storedUsers));
        showToast('Signup successful! You can now log in.');
        setMode('login');
      }
    } else {
      if (storedUsers[email] && storedUsers[email] === password) {
        showToast('Login successful!');
        setTimeout(() => {
          router.push('/page9');
        }, 1000);
      } else {
        showToast('Incorrect email or password');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Task 10: {mode === 'signup' ? 'Sign Up' : 'Login'}</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <div className="flex items-center border rounded px-3 py-2">
              <input
                type={showPassword ? 'text' : 'password'}
                className="flex-grow outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
              <button
                type="button"
                className="text-sm text-blue-500 ml-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {mode === 'signup' ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          {mode === 'signup' ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            className="text-blue-600 hover:underline"
            onClick={() => {
              setMode(mode === 'signup' ? 'login' : 'signup');
              setMessage('');
            }}
          >
            {mode === 'signup' ? 'Login' : 'Sign up'}
          </button>
        </p>
      </div>

      {toastVisible && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded shadow transition-opacity duration-300">
          {message}
        </div>
      )}
    </div>
  );
}