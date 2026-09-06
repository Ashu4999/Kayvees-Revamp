'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneCall, MessageCircle, MapPin, Award, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0B132B] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              Head Office: Paud Road, Kothrud, Pune - 411029
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#C5A880]" />
              Established in 1997 &bull; 27+ Years of Trust
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:8380068929" className="flex items-center gap-1.5 text-white hover:text-[#C5A880] font-semibold transition">
              <PhoneCall className="w-3.5 h-3.5 text-[#0284C7]" /> Inquiry: +91 8380068929
            </a>
            <a
              href="https://wa.me/918380068929?text=Hello%20Kayvees%20Team%2C%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-0.5 rounded-full font-medium transition"
            >
              <MessageCircle className="w-3 h-3" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 glass-nav border-b border-slate-200/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* LOGO ONLY (No duplicate text) */}
          <Link href="#hero" className="flex items-center group py-2" title="Kayvees - Home">
            <img
              src="/assets/img/logo.jpg"
              alt="Kayvees Logo"
              className="h-12 sm:h-14 w-auto object-contain rounded-md shadow-xs transition group-hover:scale-105 border border-slate-200 bg-white px-1"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-700">
            <Link href="#services" className="hover:text-[#0284C7] transition">Services</Link>
            <Link href="#projects" className="hover:text-[#0284C7] transition">
              Projects & Gallery (<span className="text-[#0284C7] font-bold">30+</span>)
            </Link>
            <Link href="#clients" className="hover:text-[#0284C7] transition">Clients</Link>
            <Link href="#about" className="hover:text-[#0284C7] transition">About Us</Link>
            <Link href="#ceo" className="hover:text-[#0284C7] transition">CEO Desk</Link>
            <Link href="#brochure" className="hover:text-[#0284C7] transition">Brochures</Link>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[#0B132B] hover:bg-[#1C2541] text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition transform active:scale-95 border border-slate-700/50"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 text-[#C5A880]" />
            </Link>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-800 hover:bg-slate-100"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 shadow-xl">
            <Link href="#services" onClick={() => setMobileOpen(false)} className="block text-base font-semibold hover:text-[#0284C7]">Services</Link>
            <Link href="#projects" onClick={() => setMobileOpen(false)} className="block text-base font-semibold hover:text-[#0284C7]">Projects & Gallery (30+)</Link>
            <Link href="#clients" onClick={() => setMobileOpen(false)} className="block text-base font-semibold hover:text-[#0284C7]">Clients</Link>
            <Link href="#about" onClick={() => setMobileOpen(false)} className="block text-base font-semibold hover:text-[#0284C7]">About Us</Link>
            <Link href="#ceo" onClick={() => setMobileOpen(false)} className="block text-base font-semibold hover:text-[#0284C7]">From CEO Desk</Link>
            <Link href="#brochure" onClick={() => setMobileOpen(false)} className="block text-base font-semibold hover:text-[#0284C7]">Brochure</Link>
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-[#0284C7] text-white py-3 rounded-xl font-bold"
            >
              Request Consultation
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
