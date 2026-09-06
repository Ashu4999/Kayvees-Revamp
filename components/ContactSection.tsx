'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/content';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full">
                Contact & Consultation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] mt-4 tracking-tight">
                Let's Discuss Your Next Venture
              </h2>
              <p className="text-slate-600 font-body mt-3">
                Whether you need turnkey industrial construction, strategic land acquisition in Pune, or luxury interior redesign, our team is ready.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="p-2.5 bg-sky-100 text-[#0284C7] rounded-xl">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <strong className="block text-[#0B132B] font-bold">Head Office:</strong>
                  <p className="text-slate-600 mt-0.5 font-body">
                    {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.society}, {COMPANY_INFO.address.locality}, {COMPANY_INFO.address.city} - {COMPANY_INFO.address.pincode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="p-2.5 bg-emerald-100 text-emerald-600 rounded-xl">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <strong className="block text-[#0B132B] font-bold">Call & Inquiries:</strong>
                  <p className="text-slate-600 mt-0.5 font-body">
                    Direct: <a href={`tel:${COMPANY_INFO.contacts.mobile}`} className="font-bold text-[#0284C7] hover:underline">{COMPANY_INFO.contacts.mobile}</a>
                  </p>
                  <p className="text-slate-500 text-xs">Landlines: {COMPANY_INFO.contacts.landline}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="p-2.5 bg-amber-100 text-amber-600 rounded-xl">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <strong className="block text-[#0B132B] font-bold">Email:</strong>
                  <a href={`mailto:${COMPANY_INFO.contacts.email}`} className="text-slate-600 hover:text-[#0284C7] mt-0.5 block font-body">
                    {COMPANY_INFO.contacts.email}
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/918380068929?text=Hello%20Kayvees%20Team%2C%20I%20would%20like%20to%20schedule%20a%20site%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg transition"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat Directly on WhatsApp (+91 8380068929)</span>
            </a>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs">
              <h3 className="text-2xl font-extrabold text-[#0B132B] mb-2">Schedule Free Site Consultation</h3>
              <p className="text-slate-600 text-xs font-body mb-6">Fill in the details below and our senior project engineers will get in touch within 24 hours.</p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-center">
                  <h4 className="font-bold text-lg">Inquiry Received!</h4>
                  <p className="text-sm mt-1">Thank you! Our engineering desk in Kothrud, Pune will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kulkarni"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] font-body"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] font-body"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="ramesh@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] font-body"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Vertical of Interest</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] font-body">
                        <option>Industrial Factory Construction</option>
                        <option>Farmhouse & Industrial Land Plots</option>
                        <option>Commercial / Corporate Interior Design</option>
                        <option>Luxury Residential Interior Execution</option>
                        <option>General Real Estate Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">Project Details / Location</label>
                    <textarea
                      rows={4}
                      placeholder="Mention plot location, size, or specific requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] font-body"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0B132B] hover:bg-[#1C2541] text-white font-bold py-4 rounded-xl shadow-lg transition"
                  >
                    Submit Consultation Request
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
