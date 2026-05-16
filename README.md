# EmpireOS

EmpireOS is an AI-powered creator operating system built for Tahmid's multi-brand creator workflow.

## What is included

- Daily command center with priorities, overdue tasks, and energy tracking
- Multi-brand system for Bachelor Tahmid, Respawn Tahmid, HustlerBachelors, Bachelor Thrifting, Bachelor GlowUp, and Astral Loom
- Content pipeline stages from idea to repurpose
- Sponsor CRM and deliverable tracking
- Earnings dashboard and monetization summary
- Gamification panel with XP, ranks, and streaks
- AI assistant API scaffold using OpenAI

## Tech stack

- Next.js
- Tailwind CSS
- TypeScript
- OpenAI

## Setup

1. Install dependencies
   ```bash
   npm install
   ```

2. Create a `.env` file with:
   ```env
   OPENAI_API_KEY=your_api_key_here
   ```

3. Run development server
   ```bash
   npm run dev
   ```

## Supabase integration

1. Create a Supabase project and save the URL + service role key.
2. Add these variables to `.env`:
   ```env
   OPENAI_API_KEY=your_api_key_here
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```
3. Apply the schema in `supabase/schema.sql`.

## Firebase integration

Firebase is initialized on the client using the provided web app config. No additional `.env` values are required for analytics in this MVP.

## New pages

- `/sponsor-crm` — sponsor relationship tracking and payment pulse
- `/scripts` — AI-assisted script workflow and active script tracking
- `/assistant` — creator AI advisor and prompt engine

## GitHub deployment

1. Initialize the repository locally if needed:
   ```bash
   git init
   git add .
   git commit -m "Initial EmpireOS commit"
   git branch -M main
   ```
2. Create a GitHub repo and add it as a remote:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. GitHub Actions will automatically run CI on push.

> Note: This repo includes API routes and runtime features. For full hosting, connect the GitHub repo to Vercel or Netlify. GitHub Pages can only serve a static export, not the server-side API routes.

## Notes

This MVP is styled with premium black + gold aesthetics and built to support future extensions like Supabase integration, sponsor CRM, and AI-powered content generation.
