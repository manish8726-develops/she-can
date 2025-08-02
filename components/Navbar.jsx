'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-pink-600">SheCan NGO</Link>
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#mission">Mission</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <div className="md:hidden">
          <Menu className="h-6 w-6 text-gray-600" />
        </div>
      </div>
    </nav>
  );
}
