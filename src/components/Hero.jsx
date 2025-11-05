import { Rocket, Music, Shield, Cloud } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 text-indigo-600 px-4 py-1 text-sm font-medium">
            <Rocket size={16} /> Industrial-Scale Architecture
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Blueprint for a World‑Class Music Streaming Platform
          </h1>
          <p className="max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Build beyond the UI. Combine a modern frontend with a real-time backend, global media delivery, and adaptive audio streaming for a fast, reliable experience at any scale.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#pillars" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-5 py-3 font-semibold shadow hover:bg-indigo-500 transition">
              <Music size={18} /> Explore the System
            </a>
            <a href="#stack" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 px-5 py-3 font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 transition">
              <Cloud size={18} /> See the Stack
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 text-sm text-gray-500 dark:text-gray-400">
            <Stat icon={<Shield className="text-emerald-500" size={18} />} label="Auth" value="OAuth & SSO" />
            <Stat icon={<Cloud className="text-sky-500" size={18} />} label="Delivery" value="Global CDN" />
            <Stat icon={<Music className="text-pink-500" size={18} />} label="Format" value="HLS / DASH" />
            <Stat icon={<Rocket className="text-indigo-500" size={18} />} label="Scale" value="Millions of users" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{label}</div>
        <div className="font-semibold text-gray-900 dark:text-white">{value}</div>
      </div>
    </div>
  );
}
