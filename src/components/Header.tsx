import React from "react";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between py-4 px-6 bg-white shadow-md">
      {/* Logo ya brand name */}
      <div className="flex items-center">
        <span className="text-3xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-md tracking-wider">
          digital ahsan
        </span>
      </div>
      {/* Navigation Example (Agar navigation chahiye) */}
      <nav className="flex items-center gap-6">
        <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
        <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">About</a>
        <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
