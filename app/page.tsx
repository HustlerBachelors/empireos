import Link from 'next/link';
import { ChevronRight, Sparkles, ShieldCheck, DollarSign, Rocket } from 'lucide-react';
import { brands } from '../lib/brands';
import { dailyItems, workflowStages, sponsorTasks, earningsSummary, gamification } from '../lib/empireData';

function smallCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur-xl">
      <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">{title}</p>
      <p className="mt-3 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-surface px-6 py-8 text-white sm:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 rounded-[3rem] border border-white/10 bg-[#111111]/90 p-8 shadow-glow backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gold">EMPIREOS COMMAND CENTER</p>
              <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Daily creator mission</h1>
              <p className="mt-3 max-w-2xl text-sm text-neutral-300 md:text-base">
                Build momentum across brands with sponsor focus, viral hooks, earnings visibility, and AI-powered workflow control.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {smallCard({ title: 'Energy', value: 'High' })}
              {smallCard({ title: 'Overdue', value: '3 tasks' })}
            </div>
          </div>
        </header>

        <div className="mb-8 flex flex-col gap-3 rounded-3xl border border-white/10 bg-surface/80 p-5 text-sm text-neutral-300 shadow-glow backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <p>Tap into sponsor CRM, script helper, or AI assistant for faster execution.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/sponsor-crm" className="rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-white transition hover:bg-gold/15">Sponsor CRM</Link>
            <Link href="/scripts" className="rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-white transition hover:bg-gold/15">Script helper</Link>
            <Link href="/assistant" className="rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-white transition hover:bg-gold/15">AI assistant</Link>
          </div>
        </div>

        <section className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            <div className="rounded-[2.5rem] border border-white/10 bg-panel/90 p-6 shadow-glow backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">Today’s priority</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Sponsor deliverables, viral shorts, and batch editing</h2>
                </div>
                <Sparkles className="h-6 w-6 text-gold" />
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {dailyItems.map((item) => (
                  <article key={item.title} className="rounded-3xl border border-white/10 bg-surface/90 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">{item.title}</p>
                    <p className="mt-3 text-base text-neutral-200">{item.note}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-panel/90 p-6 shadow-glow backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">Brand system</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Multi-brand workflow</h2>
                </div>
                <ShieldCheck className="h-6 w-6 text-gold" />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {brands.map((brand) => (
                  <div key={brand.name} className="rounded-3xl border border-white/10 bg-surface/90 p-4">
                    <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">{brand.name}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{brand.category}</p>
                    <p className="mt-3 text-sm text-neutral-300">Priority {brand.priority} · {brand.platforms.join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-panel/90 p-6 shadow-glow backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">Content pipeline</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Pipeline stages</h2>
                </div>
                <Rocket className="h-6 w-6 text-gold" />
              </div>
              <div className="mt-6 space-y-3">
                {workflowStages.map((stage) => (
                  <div key={stage.label} className="flex items-center justify-between rounded-3xl border border-white/10 bg-surface/90 p-4">
                    <div>
                      <p className="font-medium text-white">{stage.label}</p>
                      <p className="text-sm text-neutral-400">{stage.detail}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-neutral-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2.5rem] border border-white/10 bg-panel/90 p-6 shadow-glow backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">Earnings dashboard</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Revenue snapshot</h2>
                </div>
                <DollarSign className="h-6 w-6 text-gold" />
              </div>
              <div className="mt-8 grid gap-4">
                {earningsSummary.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-surface/90 p-5">
                    <p className="text-sm text-neutral-400">{item.label}</p>
                    <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-panel/90 p-6 shadow-glow backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">Sponsor CRM</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Sponsor pulse</h2>
                </div>
                <ShieldCheck className="h-6 w-6 text-gold" />
              </div>
              <ul className="mt-6 space-y-4">
                {sponsorTasks.map((task) => (
                  <li key={task.title} className="rounded-3xl border border-white/10 bg-surface/90 p-4">
                    <p className="font-medium text-white">{task.title}</p>
                    <p className="mt-1 text-sm text-neutral-400">{task.status}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-panel/90 p-6 shadow-glow backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">Creator gamification</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">XP + ranks</h2>
                </div>
                <Sparkles className="h-6 w-6 text-gold" />
              </div>
              <div className="mt-6 space-y-4">
                {gamification.map((item) => (
                  <div key={item.metric} className="rounded-3xl border border-white/10 bg-surface/90 p-4">
                    <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">{item.metric}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
