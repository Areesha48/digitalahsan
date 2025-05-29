import React from "react";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between py-4 px-6 bg-white shadow-md">
      <div className="flex items-center">
        <span className="text-3xl font-extrabold text-black tracking-wider">
          digital ahsan
        </span>
      </div>
      <nav className="flex items-center gap-6">
        <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
        <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">About</a>
        <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
