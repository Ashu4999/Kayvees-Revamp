import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-[#0B132B] text-white overflow-hidden py-24 lg:py-32">
      {/* Background Lighting & Radial Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0284C7]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#C5A880]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-semibold text-[#C5A880]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Pioneering Pune Real Estate & Construction Since 1997
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              All Real Estate & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-amber-300">Turnkey Solutions</span> Under One Roof.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-body max-w-2xl leading-relaxed">
              From strategic industrial land acquisitions and heavy-duty factory construction to high-end corporate and residential interior spaces — delivered with 27+ years of engineering rigor.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="#projects"
                className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-sky-900/30 transition transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Explore 30+ Projects (573 Photos)</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold px-7 py-3.5 rounded-xl border border-slate-700 transition"
              >
                Request Site Consultation
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-slate-800 grid grid-cols-3 gap-6 text-center sm:text-left">
              <div>
                <div className="text-3xl font-extrabold text-white">27+</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-0.5">Years Legacy</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">22+</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-0.5">Corporate Clients</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#0284C7]">573+</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-0.5">Project Photos</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60 bg-slate-800 group">
              <img
                src="/assets/img/banner1.jpg"
                alt="Industrial Construction by Kayvees"
                className="w-full h-[400px] object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-card border border-white/20 text-slate-900 shadow-xl">
                <span className="inline-block px-2.5 py-0.5 bg-[#0B132B] text-white text-[10px] font-bold uppercase rounded-md tracking-wider mb-2">
                  Featured Capability
                </span>
                <h4 className="text-lg font-extrabold text-[#0B132B]">Industrial Construction & Land</h4>
                <p className="text-xs text-slate-600 mt-1">Providing heavy-duty factories, warehouses, and infrastructure adhering to strict quality controls.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
