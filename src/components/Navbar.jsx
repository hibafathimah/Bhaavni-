
import React, { useState } from "react";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex justify-center pt-6">
      <div
        className="w-full max-w-300 flex items-center justify-between bg-[#FCFAFF] shadow-xl p-6 rounded-4xl
                   mx-4" 
        /* NOTE: if max-w-300 is not defined in your Tailwind config, replace with max-w-[1180px] */
      >
        {/* Left - Logo */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Bhaavni" className="h-10 object-contain" />
        </div>

        {/* Desktop navigation: hidden on small screens */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] text-gray-600">
          <a href="#home" className="hover:text-[#6E56A2] font-semibold text-gray-700">Home</a>
          <a href="#aboutus" className="hover:text-[#6E56A2] font-semibold text-gray-700">About Us</a>
          <a href="#specialities" className="hover:text-[#6E56A2] font-semibold text-gray-700">Our Specialities</a>
          <a href="#contactus" className="hover:text-[#6E56A2] font-semibold text-gray-700">Contact Us</a>
        </nav>

        {/* Desktop CTA button: hidden on small screens */}
        <div className="hidden md:block">
          <a
            href="#"
            className="px-6 py-2 button rounded-full border border-gray-300 text-[13px] text-gray-700 hover:bg-[#6E56A2] hover:text-white font-semibold transition"
            role="button"
            aria-label="Schedule an Appointment"
          >
            Schedule an Appointment
          </a>
        </div>

        {/* Mobile hamburger - visible on small screens only */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg focus:outline-none"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          {/* simple hamburger icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M3 6h18M3 12h18M3 18h18" stroke="#4B5563" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`mobile-nav-overlay fixed inset-0 z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        {/* backdrop area (click closes) */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
          aria-hidden
        />

        {/* panel */}
        <div className="absolute right-0 top-0 h-full w-full sm:w-105 bg-white p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <img src={logo} alt="Bhaavni" className="h-9 object-contain" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-md"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M6 18L18 6" stroke="#374151" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-4 text-[16px]">
            <a href="#home" onClick={() => setOpen(false)} className="py-3">Home</a>
            <a href="#aboutus" onClick={() => setOpen(false)} className="py-3">About Us</a>
            <a href="#specialities" onClick={() => setOpen(false)} className="py-3">Our Specialities</a>
            <a href="#contactus" onClick={() => setOpen(false)} className="py-3">Contact Us</a>
          </nav>

          <div className="mt-6">
            <a
              href="#"
              className="inline-block px-6 py-3 rounded-full border border-gray-300 text-[15px] text-gray-700 hover:bg-[#6E56A2] hover:text-white font-semibold transition"
              onClick={() => setOpen(false)}
            >
              Schedule an Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}