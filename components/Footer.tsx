import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-[#0B132B] text-slate-400 text-sm py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Clean Logo in footer (No duplicate text) */}
        <div className="space-y-4 md:col-span-1">
          <img
            src="/assets/img/logo.jpg"
            alt="Kayvees"
            className="h-12 w-auto object-contain rounded-md bg-white p-1"
          />
          <p className="text-xs text-slate-400 font-body leading-relaxed">
            Founded in 1997. Pune's premier real estate, turnkey construction, and interior architecture enterprise.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm mb-4">Core Verticals</h4>
          <ul className="space-y-2 text-xs font-body">
            <li><Link href="#services" className="hover:text-white transition">Industrial Factory Sheds</Link></li>
            <li><Link href="#services" className="hover:text-white transition">Farmhouse & Land Plots</Link></li>
            <li><Link href="#services" className="hover:text-white transition">Commercial Corporate Interior</Link></li>
            <li><Link href="#services" className="hover:text-white transition">Luxury Residential Bunglows</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm mb-4">Navigation</h4>
          <ul className="space-y-2 text-xs font-body">
            <li><Link href="#projects" className="hover:text-white transition">All 30+ Verified Projects</Link></li>
            <li><Link href="#clients" className="hover:text-white transition">22+ Corporate Clients</Link></li>
            <li><Link href="#ceo" className="hover:text-white transition">From the Desk of CEO</Link></li>
            <li><Link href="#brochure" className="hover:text-white transition">Download Brochure (PDF)</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm mb-4">Kothrud Head Office</h4>
          <p className="text-xs text-slate-400 font-body leading-relaxed">
            {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.society}, {COMPANY_INFO.address.locality}, {COMPANY_INFO.address.city} - {COMPANY_INFO.address.pincode}
          </p>
          <p className="text-xs text-[#0284C7] font-bold mt-2">Inquiry: {COMPANY_INFO.contacts.mobile}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Kayvees. All rights reserved.</p>
        <Link href="#hero" className="hover:text-white transition flex items-center gap-1">
          Back to top <ArrowUp className="w-3.5 h-3.5" />
        </Link>
      </div>
    </footer>
  );
}
