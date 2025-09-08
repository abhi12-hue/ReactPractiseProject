import React from "react";
import { ShoppingCart, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-orange-500">Swiggy</div>

      {/* Search bar */}
      <div className="hidden md:flex items-center w-1/2 bg-gray-100 rounded-full px-4 py-2">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search for restaurants or food"
          className="bg-transparent outline-none ml-2 w-full"
        />
      </div>

      {/* Right section */}
      <div className="flex items-center gap-6 text-gray-700">
        <button className="flex items-center gap-2 hover:text-orange-500">
          <User className="w-5 h-5" /> Login
        </button>
        <button className="flex items-center gap-2 hover:text-orange-500">
          <ShoppingCart className="w-5 h-5" /> Cart
        </button>
      </div>
    </nav>
  );
}
