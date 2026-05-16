import Link from 'next/link';
import { CalendarDays, DollarSign, ShieldCheck } from 'lucide-react';
import { fetchSponsors, SponsorRecord } from '../../lib/supabase';

const sampleSponsors: SponsorRecord[] = [
  {
    id: 'local-1',
    name: 'Astral Loom Launch',
    status: 'Payment overdue',
    brand_id: 'Astral Loom',
    next_update: '2026-05-17',
    notes: 'Finalize capsule direction and supplier asset deck.',
  },
  {
    id: 'local-2',
    name: 'Exness Activation',
    status: 'Follow-up required',
    brand_id: 'HustlerBachelors',
    next_update: '2026-05-18',
    notes: 'Confirm script outline and creator rights.',
  },
  {
    id: 'local-3',
    name: 'Thrifting Collab',
    status: 'On track',
    brand_id: 'Bachelor Thrifting',
    next_update: '2026-05-19',
    notes: 'Send creative brief and visual moodboard.',
  },
];

async function getSponsors() {
  const data = await fetchSponsors();
  return data.length > 0 ? data : sampleSponsors;
}

export default async function SponsorCRMPage() {
  const sponsors = await getSponsors();

  return (
    <main className="min-h-screen bg-surface px-6 py-8 text-white sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 rounded-[2.5rem] border border-white/10 bg-panel/90 p-6 shadow-glow backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Sponsor CRM</p>
            <h1 className="mt-3 text-3xl font-semibold text-white">Sponsor deals, payments, and deliverables.</h1>
            <p className="mt-3 max-w-2xl text-sm text-neutral-300 sm:text-base">
              Track every brand partnership with clean status cards and fast update actions.
            </p>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 rounded-3xl border border-gold/30 bg-gold/10 px-5 py-3 text-sm font-semibold text-gold transition hover:bg-gold/15">
            Back to dashboard
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="space-y-6">
            {sponsors.map((sponsor) => (
              <article key={sponsor.id} className="rounded-[2.5rem] border border-white/10 bg-surface/90 p-6 shadow-glow backdrop-blur-xl">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">{sponsor.brand_id}</p>
                    <h2 className="mt-3 text-xl font-semibold text-white">{sponsor.name}</h2>
                    <p className="mt-2 text-sm text-neutral-300">{sponsor.notes}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200">
                      <ShieldCheck className="h-4 w-4 text-gold" />
                      {sponsor.status}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200">
                      <CalendarDays className="h-4 w-4 text-gold" />
                      {sponsor.next_update ?? 'No date'}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2.5rem] border border-white/10 bg-panel/90 p-6 shadow-glow backdrop-blur-xl">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">Cash flow</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Payment health</h2>
                </div>
                <DollarSign className="h-6 w-6 text-gold" />
              </div>
              <div className="mt-6 grid gap-4">
                <div className="rounded-3xl border border-white/10 bg-surface/90 p-5">
                  <p className="text-sm text-neutral-400">Next payment</p>
                  <p className="mt-3 text-2xl font-semibold text-white">৳ 45,000</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-surface/90 p-5">
                  <p className="text-sm text-neutral-400">Open deals</p>
                  <p className="mt-3 text-2xl font-semibold text-white">3</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-panel/90 p-6 shadow-glow backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">CRM action</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Next follow-up</h2>
              <p className="mt-4 text-sm text-neutral-300">
                Prioritize the Astral Loom launch check-in and follow-up on the Exness activation payment.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
