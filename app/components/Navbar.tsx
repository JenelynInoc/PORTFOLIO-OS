"use client";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Tech Stack", href: "#stack" },
  { name: "Services", href: "#services" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/80 backdrop-blur-md border border-stone-200 rounded-full px-6 py-3 shadow-sm flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-brown-dark hover:text-[#C4B2A0] transition-colors uppercase tracking-wider"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}