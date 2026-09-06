import React from 'react';

export default function ClientsMarquee() {
  const clientIds = Array.from({ length: 22 }, (_, i) => i + 1);

  return (
    <section id="clients" className="py-12 bg-white border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Trusted By Over 22+ Leading Industrial & Commercial Enterprises
        </h3>
      </div>

      <div className="relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex items-center space-x-8 animate-marquee whitespace-nowrap py-2">
          {/* Loop 1 */}
          <div className="flex items-center space-x-8 shrink-0">
            {clientIds.map((id) => (
              <img
                key={id}
                src={`/assets/img/clients${id}.jpg`}
                alt={`Kayvees Client ${id}`}
                className="h-12 w-auto grayscale hover:grayscale-0 opacity-75 hover:opacity-100 transition rounded-md shadow-xs border border-slate-200 bg-white p-1"
                loading="lazy"
              />
            ))}
          </div>
          {/* Loop 2 */}
          <div className="flex items-center space-x-8 shrink-0">
            {clientIds.map((id) => (
              <img
                key={`dup-${id}`}
                src={`/assets/img/clients${id}.jpg`}
                alt={`Kayvees Client ${id}`}
                className="h-12 w-auto grayscale hover:grayscale-0 opacity-75 hover:opacity-100 transition rounded-md shadow-xs border border-slate-200 bg-white p-1"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
