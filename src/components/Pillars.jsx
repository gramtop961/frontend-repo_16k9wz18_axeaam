import { Server, Smartphone, Cloud, Globe } from 'lucide-react';

const items = [
  {
    icon: Server,
    title: 'Backend API (The Brain)',
    points: [
      'Auth, users, playlists, metadata',
      'Serverless functions for business logic',
      'Real-time updates and rules'
    ],
    accent: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Smartphone,
    title: 'Frontend Clients (The Face)',
    points: [
      'Web with React/Next.js',
      'Mobile with React Native or Flutter',
      'Fast loads, smooth UX'
    ],
    accent: 'from-pink-500 to-rose-500'
  },
  {
    icon: Cloud,
    title: 'Audio Storage (The Music)',
    points: [
      'Object storage for media at scale',
      'Immutable, durable, cost‑effective',
      'Versioning + lifecycle policies'
    ],
    accent: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Globe,
    title: 'Streaming & Delivery (The Edge)',
    points: [
      'Global CDN for low latency',
      'Edge caching near listeners',
      'Secure, signed URLs'
    ],
    accent: 'from-amber-500 to-orange-500'
  }
];

export default function Pillars() {
  return (
    <section id="pillars" className="py-16 sm:py-20 bg-white/50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">The Big Picture</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">You are building three systems that work together.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, points, accent }) => (
            <div key={title} className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-sm">
              <div className={`absolute inset-x-0 -top-0.5 h-1 rounded-t-2xl bg-gradient-to-r ${accent}`} />
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800">
                  <Icon className="text-gray-900 dark:text-white" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                {points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
