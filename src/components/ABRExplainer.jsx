import { Play, Layers, Globe, Cloud } from 'lucide-react';

function MiniCard({ icon: Icon, title, body }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"><Icon size={18} className="text-gray-900 dark:text-white" /></div>
        <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300">{body}</p>
    </div>
  );
}

export default function ABRExplainer() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">How Streaming Actually Works</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">From upload to headphones: the adaptive path your audio takes.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MiniCard icon={Cloud} title="Ingest" body="Upload masters to object storage. Trigger a function to validate, tag, and enqueue the encoding job." />
          <MiniCard icon={Layers} title="Encode" body="Transcode with FFmpeg to multiple bitrates and segment into HLS/DASH chunks with manifests." />
          <MiniCard icon={Globe} title="Distribute" body="Push segments and manifests to a CDN with cache rules and signed URL protection." />
          <MiniCard icon={Play} title="Play" body="The player fetches the manifest and streams 5–10s chunks, switching quality automatically." />
        </div>
        <div className="mt-8 text-sm text-gray-600 dark:text-gray-300">
          Tip: Favor short segments for responsiveness and tune cache TTLs on manifests higher than segments to balance freshness with performance.
        </div>
      </div>
    </section>
  );
}
