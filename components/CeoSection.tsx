import React from 'react';
import { Check } from 'lucide-react';

export default function CeoSection() {
  return (
    <section id="ceo" className="py-24 bg-[#0B132B] text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* CEO Portrait */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 rounded-3xl overflow-hidden border-2 border-[#C5A880]/60 shadow-2xl bg-slate-800">
                <img
                  src="/assets/img/ourCEO.jpg"
                  alt="From the Desk of CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#C5A880] text-[#0B132B] px-4 py-2 rounded-xl font-bold text-xs shadow-lg">
                Est. 1997
              </div>
            </div>
          </div>

          {/* Vision Content */}
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A880] bg-slate-800 border border-slate-700 px-3.5 py-1 rounded-full">
              Executive Vision
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">From the Desk of CEO</h2>

            <blockquote className="text-xl sm:text-2xl font-light italic text-slate-200 border-l-4 border-[#C5A880] pl-6 leading-relaxed">
              &ldquo;The journey so far may seem impressive, but I think still there is long to go before I reach the cliff of my goal.&rdquo;
            </blockquote>

            <p className="text-slate-300 font-body leading-relaxed">
              Launched in 1997 and established to date, KAYVEES has rejuvenated through a variety of real estate tasks. While designing and executing development of residential and commercial premises, KAYVEES has not only tackled barriers in the customer path, but also provided distinct turnkey solutions under one roof.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="text-[#C5A880] w-4 h-4" /> Corporate Ethics
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-[#C5A880] w-4 h-4" /> Engineering Quality
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-[#C5A880] w-4 h-4" /> Transparent Clear Titles
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
