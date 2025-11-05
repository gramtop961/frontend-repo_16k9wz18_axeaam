import { Layers, Shield, Database, Cloud, Play, Server } from 'lucide-react';

function StackCard({ icon: Icon, title, description, items, accent }) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-lg ${accent}`}>
          <Icon className="text-white" size={18} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1.5">
        {items.map((it) => (
          <li key={it} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function StackGrid() {
  return (
    <section id="stack" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Recommended Stack</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Battle‑tested tools for scale, speed, and reliability.</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <StackCard
            icon={Layers}
            title="Frontend"
            description="Modern UI with seamless navigation and SEO."
            items={['React with Next.js (Web)', 'React Native or Flutter (Mobile)', 'SSR/ISR for fast initial loads', 'Design system + Tailwind']}
            accent="bg-indigo-600"
          />
          <StackCard
            icon={Shield}
            title="Auth & Security"
            description="Identity, access control, and secure flows."
            items={['OAuth (Google, Apple, email/password)', 'MFA and session hardening', 'Role-based rules and policies', 'Secure file access (signed URLs)']}
            accent="bg-emerald-600"
          />
          <StackCard
            icon={Database}
            title="Database"
            description="Realtime NoSQL with global scale."
            items={['Cloud Firestore or Supabase Postgres', 'Realtime listeners', 'Offline-first clients', 'Strong indexing strategy']}
            accent="bg-rose-600"
          />
          <StackCard
            icon={Server}
            title="Backend Logic"
            description="Serverless functions as your control plane."
            items={['Cloud Functions / Supabase Edge Functions', 'Playlist updates & fan-out', 'Webhook handling (payments, events)', 'Scheduled jobs for curation']}
            accent="bg-amber-600"
          />
          <StackCard
            icon={Cloud}
            title="Storage & CDN"
            description="Media at massive scale, delivered globally."
            items={['Cloud Storage (or S3) for masters', 'Global CDN caching at the edge', 'Signed URLs and token auth', 'Lifecycle and cost controls']}
            accent="bg-sky-600"
          />
          <StackCard
            icon={Play}
            title="Streaming Format"
            description="Adaptive bitrate for smooth playback."
            items={['HLS or DASH packaging', 'Segments ~5–10 seconds', 'Multiple bitrates (96/128/320kbps)', 'Automatic quality switching']}
            accent="bg-fuchsia-600"
          />
        </div>
      </div>
    </section>
  );
}
