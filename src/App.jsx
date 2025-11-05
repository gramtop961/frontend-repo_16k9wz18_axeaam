import Hero from './components/Hero';
import Pillars from './components/Pillars';
import StackGrid from './components/StackGrid';
import ABRExplainer from './components/ABRExplainer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-black/60 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold">μ</span>
            <span className="font-semibold text-gray-900 dark:text-white">UltraScale Music</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#pillars" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600">Overview</a>
            <a href="#stack" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600">Stack</a>
            <a href="#streaming" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600">Streaming</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Pillars />
        <StackGrid />
        <section id="streaming">
          <ABRExplainer />
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-300">
          <p>© {new Date().getFullYear()} UltraScale Music. Built for massive scale.</p>
          <div className="flex items-center gap-4">
            <a href="#stack" className="hover:text-indigo-600">Stack</a>
            <a href="#pillars" className="hover:text-indigo-600">Overview</a>
            <a href="#streaming" className="hover:text-indigo-600">Streaming</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
