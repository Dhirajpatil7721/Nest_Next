"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.div
            className="text-2xl font-bold text-blue-600 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            SOFTWARE SOLUTIOS
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink href="/solutions" text="Solutions" />
          <NavLink href="/customers" text="Customers" />
          <NavLink href="/company" text="Company" />
          <NavLink href="/contactus" text="Contact Us" />
        </div>

        {/* Authentication Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link href="/Signin">
            <motion.button
              className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.button>
          </Link>
          <Link href="/Signup">
            <motion.button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Out
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <MobileNavLink href="/solutions" text="Solutions" />
          <MobileNavLink href="/customers" text="Customers" />
          <MobileNavLink href="/company" text="Company" />
          <MobileNavLink href="/contact" text="Contact Us" />
        </motion.div>
      )}
    </nav>
  );
}

// Reusable Components for Links
const NavLink = ({ href, text }: { href: string; text: string }) => (
  <Link href={href}>
    <motion.div
      className="text-gray-700 hover:text-blue-600 transition cursor-pointer"
      whileHover={{ scale: 1.1 }}
    >
      {text}
    </motion.div>
  </Link>
);

const MobileNavLink = ({ href, text }: { href: string; text: string }) => (
  <Link href={href}>
    <div className="block text-gray-700 py-2 border-b border-gray-200 hover:text-blue-600 transition">
      {text}
    </div>
  </Link>
);
