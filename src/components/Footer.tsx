import React from 'react';
import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-4 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-6">
            <Brain className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold">emberlight.ai</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-8 mb-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
            <Link to="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</Link>
          </nav>
          <p className="text-gray-600 text-center">© 2025 emberlight.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}