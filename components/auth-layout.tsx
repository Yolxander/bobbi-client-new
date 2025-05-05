import Image from 'next/image';
import React, { useState } from 'react';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['700'] });

const TABS = [
  {
    label: 'Tracking',
    description:
      'Clients can track project progress, timelines, and deliverables in real-time.',
  },
  {
    label: 'Transparency',
    description:
      'Access to invoices, contracts, and status updates fosters trust and reduces misunderstandings.',
  },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center min-h-screen bg-[#f7f7f7] p-4">
      {/* Left: Form */}
      <div className="flex-1 md:w-[45%] h-[95vh] bg-white rounded-xl shadow-sm p-10 flex flex-col justify-center">
        <div>
          <div className="mb-8">
            <span className={`text-3xl font-bold tracking-tight ${orbitron.className}`}>Bobbi</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Welcome to Bobbi</h2>
          <div className="text-gray-500 mb-8 text-base">
            The fastest way to match with top freelancers and manage your projects, all in one place. No more wasted time.
          </div>
          {children}
        </div>
        {/* You can add a testimonial or user count here if desired */}
      </div>
      {/* Right: Promo/Visual */}
      <div
        className="flex-1 md:w-[45%] h-[95vh] rounded-xl shadow-sm flex flex-col justify-center items-center p-10 relative overflow-hidden hidden md:flex bg-cover bg-center"
        style={{ backgroundImage: 'url(/right-side-bg.png)' }}
      >
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-white/60 z-0" />
        <div className="relative z-10 w-full flex flex-col items-center gap-12">
          <div className="text-2xl font-semibold text-black mb-8 text-center">
            Effortlessly match with the right freelancer for your project.<br />
            Communicate and collaborate without the hassle.
          </div>
          {/* Info box */}
          <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow">
            <div className="flex gap-2 mb-2">
              <span className={`px-3 py-1 rounded-full border border-gray-300 bg-white text-gray-700 text-xs ${activeTab === 0 ? '' : 'opacity-50'}`}>Tracking</span>
              <span className={`px-3 py-1 rounded-full border border-gray-300 bg-white text-gray-700 text-xs ${activeTab === 1 ? '' : 'opacity-50'}`}>Transparency</span>
            </div>
            <div className="text-xs text-gray-700 text-center min-h-[40px]">
              {TABS[activeTab].description}
            </div>
            <div className="flex gap-2 mt-2">
              <button
                className="rounded-full border border-gray-400 p-1 bg-white/80"
                aria-label="Show Tracking"
                onClick={() => setActiveTab(0)}
                disabled={activeTab === 0}
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="#888" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button
                className="rounded-full border border-gray-400 p-1 bg-white/80"
                aria-label="Show Transparency"
                onClick={() => setActiveTab(1)}
                disabled={activeTab === 1}
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="#888" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 