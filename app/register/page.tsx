'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthLayout from '@/components/auth-layout';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== passwordConfirmation) {
      setError('Passwords do not match.');
      return;
    }
    try {
      await register({ name, email, password, password_confirmation: passwordConfirmation });
    } catch (err: any) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <AuthLayout>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#bdbdbd" strokeWidth="2" d="M4 7a4 4 0 0 1 8 0v2a4 4 0 0 1-8 0V7Zm8 0a4 4 0 1 1 8 0v2a4 4 0 1 1-8 0V7Z"/></svg>
          </span>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-[#f7f7f7] focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700 placeholder-gray-400"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#bdbdbd" strokeWidth="2" d="M4 7a4 4 0 0 1 8 0v2a4 4 0 0 1-8 0V7Zm8 0a4 4 0 1 1 8 0v2a4 4 0 1 1-8 0V7Z"/></svg>
          </span>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-[#f7f7f7] focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700 placeholder-gray-400"
            placeholder="hello@hatypo.studio"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#bdbdbd" strokeWidth="2" d="M12 17a5 5 0 0 0 5-5V7a5 5 0 0 0-10 0v5a5 5 0 0 0 5 5Zm0 0v2m-6 2h12"/></svg>
          </span>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-[#f7f7f7] focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700 placeholder-gray-400"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#bdbdbd" strokeWidth="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"/><circle cx="12" cy="12" r="3" stroke="#bdbdbd" strokeWidth="2"/></svg>
          </span>
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="#bdbdbd" strokeWidth="2" d="M12 17a5 5 0 0 0 5-5V7a5 5 0 0 0-10 0v5a5 5 0 0 0 5 5Zm0 0v2m-6 2h12"/></svg>
          </span>
          <input
            id="passwordConfirmation"
            name="passwordConfirmation"
            type="password"
            required
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-[#f7f7f7] focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700 placeholder-gray-400"
            placeholder="Confirm password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-[#4fc3f7] text-white font-semibold text-lg shadow hover:bg-[#29b6f6] transition"
        >
          Sign up
        </button>
        <div className="flex items-center gap-2 my-2">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <button
          type="button"
          className="w-full py-3 rounded-xl border border-gray-200 bg-white flex items-center justify-center gap-2 text-gray-700 font-medium hover:bg-gray-50 transition"
        >
          <svg width="20" height="20" viewBox="0 0 48 48"><g><circle cx="24" cy="24" r="24" fill="#fff"/><path d="M24 9.5c3.54 0 6.47 1.22 8.6 3.22l6.4-6.4C35.1 2.98 29.97 0 24 0 14.82 0 6.88 5.8 2.7 14.1l7.46 5.8C12.1 14.1 17.6 9.5 24 9.5z" fill="#EA4335"/><path d="M46.1 24.5c0-1.7-.15-3.36-.43-4.95H24v9.4h12.4c-.54 2.9-2.2 5.36-4.7 7.04l7.4 5.75C43.9 37.1 46.1 31.3 46.1 24.5z" fill="#4285F4"/><path d="M10.16 28.2c-1.1-3.2-1.1-6.7 0-9.9l-7.46-5.8C.98 16.7 0 20.2 0 24c0 3.8.98 7.3 2.7 10.5l7.46-5.8z" fill="#FBBC05"/><path d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.4-5.75c-2.1 1.4-4.8 2.2-8.5 2.2-6.4 0-11.9-4.6-13.8-10.8l-7.46 5.8C6.88 42.2 14.82 48 24 48z" fill="#34A853"/><path d="M24 9.5c5.37 0 9.1 3.7 10.6 5.4l7.8-7.8C39.97 2.98 32.97 0 24 0v9.5z" fill="none"/></g></svg>
          Signup with Google
        </button>
      </form>
      <div className="mt-4 text-center text-gray-500 text-sm">
        Already have an account?{' '}
        <Link href="/login" className="text-[#4fc3f7] font-medium hover:underline">Login</Link>
      </div>
      {error && <div className="text-red-500 text-sm text-center mt-2">{error}</div>}
    </AuthLayout>
  );
} 