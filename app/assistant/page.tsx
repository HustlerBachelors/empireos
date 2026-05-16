'use client';

import { useState } from 'react';
import { MessageSquare, Sparkles, Zap } from 'lucide-react';

export default function AssistantPage() {
  const [prompt, setPrompt] = useState('Give me a creator growth prompt for Astral Loom content in a premium tone.');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResponse(data.result ?? 'No response returned.');
    } catch (error) {
      setResponse('AI request failed.');
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
              <p className="text-sm uppercase tracking-[0.3em] text-gold">AI assistant</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Creator advisor and prompt engine</h1>
              <p className="mt-3 max-w-2xl text-sm text-neutral-300 sm:text-base">
                Use AI to generate hooks, monetize ideas, and stay in execution mode with concise next-step recommendations.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-3xl border border-gold/30 bg-gold/10 px-5 py-3 text-sm font-semibold text-gold">
              <Zap className="h-4 w-4" />
              AI mode ready
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="space-y-6">
            <form onSubmit={handleSubmit} className="rounded-[2.5rem] border border-white/10 bg-surface/90 p-6 shadow-glow backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">Ask the creator AI</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Generate growth moves</h2>
                </div>
                <Sparkles className="h-6 w-6 text-gold" />
              </div>

              <textarea
                rows={4}
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                className="mt-6 w-full rounded-3xl border border-white/10 bg-panel/90 px-5 py-4 text-sm text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                placeholder="Example: Recommend a viral TikTok hook for Astral Loom drop day with premium luxury energy."
              />

              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-neutral-400">AI will return a short creator action plan and hook idea.</p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-3xl bg-gold px-6 py-3 text-sm font-semibold text-surface transition hover:bg-[#c79824] disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? 'Thinking…' : 'Ask assistant'}
                </button>
              </div>
            </form>

            {response ? (
              <div className="rounded-[2.5rem] border border-white/10 bg-panel/90 p-6 shadow-glow backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-gold" />
                  <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">AI result</p>
                </div>
                <p className="mt-4 whitespace-pre-line text-sm leading-7 text-neutral-200">{response}</p>
              </div>
            ) : null}
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2.5rem] border border-white/10 bg-panel/90 p-6 shadow-glow backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">Creator advice</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Keep focus on revenue first</h2>
              <p className="mt-4 text-sm text-neutral-300">
                Use the assistant to generate quick sponsor talking points, viral hook lines, and monetization prompts for each brand.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-panel/90 p-6 shadow-glow backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">Tip</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Batch one brand at a time</h2>
              <p className="mt-4 text-sm text-neutral-300">
                Run the assistant for one brand workflow, then switch to the next. That sharpens focus and prevents chaotic scripts.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
