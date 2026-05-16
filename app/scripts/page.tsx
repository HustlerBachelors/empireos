'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, Sparkles, BatteryCharging, FileText } from 'lucide-react';

const scriptPlans = [
  {
    title: 'Bachelor Tahmid geopolitics short',
    stage: 'Scripting',
    energy: 'High',
    due: 'May 17',
  },
  {
    title: 'Respawn Tahmid CS2 highlight edit',
    stage: 'Recording',
    energy: 'Medium',
    due: 'May 18',
  },
  {
    title: 'HustlerBachelors Exness quick tip',
    stage: 'Script idea',
    energy: 'Low',
    due: 'May 19',
  },
];

export default function ScriptsPage() {
  const [prompt, setPrompt] = useState('Write a short-form script hook for a creator economy video.');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const promptHint = useMemo(() => {
    if (prompt.length < 20) return 'Add a brand, topic, and emotional hook for a tighter script suggestion.';
    return 'Good prompt — ready for AI script output.';
  }, [prompt]);

  async function handleGenerate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setResult('');

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: `Generate a short creator script:
${prompt}` }),
      });
      const data = await response.json();
      setResult(data.result ?? 'No response yet.');
    } catch (error) {
      setResult('AI request failed.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-surface px-6 py-8 text-white sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 rounded-[2.5rem] border border-white/10 bg-panel/90 p-6 shadow-glow backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gold">Script helper</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Keep script flow locked.</h1>
              <p className="mt-3 max-w-2xl text-sm text-neutral-300 sm:text-base">
                Use AI to generate hooks, keep active scripts below three, and move ideas toward record-ready form.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-3xl border border-gold/30 bg-gold/10 px-5 py-3 text-sm font-semibold text-gold">
              <FileText className="h-4 w-4" />
              3 active scripts
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <section className="space-y-6">
            <div className="rounded-[2.5rem] border border-white/10 bg-surface/90 p-6 shadow-glow backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">Active scripts</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Current pipeline</h2>
                </div>
                <Sparkles className="h-6 w-6 text-gold" />
              </div>
              <div className="mt-6 space-y-4">
                {scriptPlans.map((script) => (
                  <div key={script.title} className="rounded-3xl border border-white/10 bg-panel/90 p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{script.title}</h3>
                        <p className="mt-2 text-sm text-neutral-400">Due {script.due} · {script.stage}</p>
                      </div>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200">
                        <BatteryCharging className="h-4 w-4 text-gold" />
                        {script.energy}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleGenerate} className="rounded-[2.5rem] border border-white/10 bg-panel/90 p-6 shadow-glow backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">AI scripting prompt</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Generate a hook</h2>
                </div>
                <ArrowUpRight className="h-6 w-6 text-gold" />
              </div>

              <textarea
                rows={4}
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                className="mt-6 w-full rounded-3xl border border-white/10 bg-surface/90 px-5 py-4 text-sm text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                placeholder="Example: Bachelor GlowUp morning routine energy script with premium coaching tone"
              />

              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-neutral-400">{promptHint}</p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-3xl bg-gold px-6 py-3 text-sm font-semibold text-surface transition hover:bg-[#c79824] disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? 'Generating…' : 'Generate script'}
                </button>
              </div>

              {result ? (
                <div className="mt-6 rounded-3xl border border-white/10 bg-surface/90 p-5 text-sm text-neutral-200">
                  <p className="font-medium text-white">AI script output</p>
                  <p className="mt-3 whitespace-pre-line">{result}</p>
                </div>
              ) : null}
            </form>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2.5rem] border border-white/10 bg-panel/90 p-6 shadow-glow backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">Workflow rule</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Keep max 3 scripts live</h2>
              <p className="mt-4 text-sm text-neutral-300">
                This keeps the content engine fast and prevents script overload. Finish one script before opening another.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-panel/90 p-6 shadow-glow backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">Confidence boost</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Use energy windows</h2>
              <p className="mt-4 text-sm text-neutral-300">
                When energy is low, choose low-risk short-form hooks. Reserve high-energy moments for long-form policy or brand launches.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
