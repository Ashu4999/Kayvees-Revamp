import React from "react";
import { Factory, Trees, Building2, Home, CheckCircle2 } from "lucide-react";
import { CORE_SERVICES } from "@/data/content";

export default function ServicesBento() {
  const iconMap: Record<string, React.ReactNode> = {
    Factory: <Factory className="w-6 h-6 text-[#0284C7]" />,
    Trees: <Trees className="w-6 h-6 text-amber-600" />,
    Building2: <Building2 className="w-6 h-6 text-indigo-600" />,
    Home: <Home className="w-6 h-6 text-rose-600" />,
  };

  const bgIconMap: Record<string, string> = {
    Factory: "bg-sky-50",
    Trees: "bg-amber-50",
    Building2: "bg-indigo-50",
    Home: "bg-rose-50",
  };

  return (
    <section id="services" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-100 px-3 py-1 rounded-full">
            Core Specializations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] mt-4 tracking-tight">
            Our Four Pillars of Turnkey Delivery
          </h2>
          <p className="text-slate-600 font-body mt-3 text-base">
            Comprehensive end-to-end expertise spanning from bare plot
            development to bespoke executive interiors.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {CORE_SERVICES.map((service, index) => {
            const colSpan =
              index === 0 || index === 3
                ? "col-span-12 md:col-span-7"
                : "col-span-12 md:col-span-5";
            const iconBg =
              index === 0
                ? "bg-sky-50"
                : index === 1
                  ? "bg-amber-50"
                  : index === 2
                    ? "bg-indigo-50"
                    : "bg-rose-50";

            return (
              <div
                key={service.id}
                className={`${colSpan} bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition duration-500 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`p-3 rounded-2xl ${iconBg}`}>
                      {iconMap[service.icon]}
                    </span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0B132B] mt-6">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 font-body mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                  {service.features && (
                    <ul className="mt-4 space-y-2 text-sm text-slate-600 font-body">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="mt-6 rounded-2xl overflow-hidden h-52 bg-slate-100 relative">
                  <img
                    src={service.thumbnail}
                    alt={service.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
