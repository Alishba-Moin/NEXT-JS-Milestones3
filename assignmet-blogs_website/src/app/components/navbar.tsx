"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="relative w-full h-[60px] bg-white shadow-md flex items-center justify-between px-4">
    {/* Main Container */}
<div className="flex justify-between items-center w-full px-4 py-2">
  
  {/* Left: Logo */}
  <div className="flex items-center space-x-2">
    <Image
      src="/img/shopping.png"
      alt="logo"
      width={50}
      height={50}
      className="object-contain" // Ensure the image maintains its aspect ratio
    />
    <p className="text-[18px] font-extrabold text-gray-800">BlogWeb</p>

  {/* Right: Search Icon for Large Screens */}
  <div className="hidden md:block relative ml-auto">
    <button
      onClick={() => setSearchOpen(!searchOpen)}
      className="p-2 border-2 border-gray-300 w-[300px] h-[40px] rounded-md cursor-pointer flex items-center justify-end"
    >
      
      <Search className="text-gray-800" />
    </button>
  </div>

        {/* Search Box for Large Screens */}
        {searchOpen && (
          <input
            type="text"
            placeholder="Search..."
            className="absolute top-full left-0 w-48 mt-2 p-2 border-2 border-gray-300 rounded-md"
          />
        )}
      </div>

      {/* Right: Navigation Links for Large Screens */}
      <nav className="hidden md:flex items-center space-x-6 ml-auto list-none">
        <li>
          <Link href="/" className="text-[16px] font-medium text-gray-800 hover:text-gray-600">
            Home
          </Link>
        </li>
        <li>
          <Link href="/blog/1" className="text-[16px] font-medium text-gray-800 hover:text-gray-600">
            Single Post
          </Link>
        </li>
        <li>
        <Link 
  href="/contact" 
  className="bg-blue-300 text-white px-4 py-2 rounded-xl hover:bg-blue-400 transition duration-300"
>
  Contact Us
</Link>
        </li>
      </nav>
     {/* Mobile Menu */}
<Sheet>
  <SheetTrigger className="md:hidden p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition duration-300">
    <Menu className="text-gray-800" />
  </SheetTrigger>
  <SheetContent className="p-6 bg-white shadow-lg rounded-lg">
    <nav className="flex flex-col gap-4 list-none">
      <ul className="space-y-4">
        <li>
          <Link 
            href="/" 
            className="text-lg font-semibold text-gray-800 hover:text-gray-600 transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            href="/blog/1" 
            className="text-lg font-semibold text-gray-800 hover:text-gray-600 transition duration-300"
          >
            Single Post
          </Link>
        </li>
        <li>
          <Link 
            href="/contact" 
            className="bg-blue-300 text-white text-lg font-medium px-5 py-3 rounded-xl hover:bg-blue-400 transition duration-300"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  </SheetContent>
</Sheet>

    </div>
    </div>
  );
}
