import React from 'react';
import { FileDown } from 'lucide-react';
import { COMPANY_INFO } from '@/data/content';

export default function BrochureSection() {
  return (
    <section id="brochure" className="py-16 bg-slate-100 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-full">
              Official Publications
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B]">
              Peacock Feather Project Brochure
            </h3>
            <p className="text-slate-600 text-sm max-w-xl font-body">
              Download our complete project master plan, plot specifications, and architectural amenities guide.
            </p>
          </div>
          <a
            href={COMPANY_INFO.brochurePdf}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#0B132B] hover:bg-[#1C2541] text-white px-7 py-4 rounded-xl font-bold shadow-lg transition flex items-center gap-3"
          >
            <FileDown className="w-5 h-5 text-[#C5A880]" />
            <span>Download PDF (406 KB)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
