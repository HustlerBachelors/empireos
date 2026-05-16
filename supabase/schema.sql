create extension if not exists pgcrypto;

create table brands (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  category text not null,
  priority int not null default 1,
  platforms text[] not null,
  tone text,
  created_at timestamp with time zone default now()
);

create table sponsors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact_email text,
  status text not null default 'active',
  brand_id uuid references brands(id) on delete set null,
  next_update date,
  notes text,
  created_at timestamp with time zone default now()
);

create table sponsor_deals (
  id uuid primary key default gen_random_uuid(),
  sponsor_id uuid references sponsors(id) on delete cascade,
  title text not null,
  value numeric(12,2) not null,
  due_date date,
  status text not null default 'pending',
  created_at timestamp with time zone default now()
);

create table deliverables (
  id uuid primary key default gen_random_uuid(),
  deal_id uuid references sponsor_deals(id) on delete cascade,
  title text not null,
  due_date date,
  completed boolean not null default false,
  stage text not null default 'planning',
  created_at timestamp with time zone default now()
);

create table payments (
  id uuid primary key default gen_random_uuid(),
  deal_id uuid references sponsor_deals(id) on delete cascade,
  amount numeric(12,2) not null,
  status text not null default 'pending',
  received_date date,
  created_at timestamp with time zone default now()
);

create table scripts (
  id uuid primary key default gen_random_uuid(),
  brand_id uuid references brands(id) on delete set null,
  title text not null,
  stage text not null default 'idea',
  energy_level text not null default 'medium',
  due_date date,
  notes text,
  created_at timestamp with time zone default now()
);

create table tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  brand_id uuid references brands(id) on delete set null,
  status text not null default 'open',
  priority text not null default 'medium',
  due_date date,
  notes text,
  created_at timestamp with time zone default now()
);

insert into brands (name, category, priority, platforms, tone)
values
  ('Bachelor Tahmid', 'Personality + Geopolitics + Lifestyle', 10, array['YouTube', 'TikTok'], 'cinematic, smart, chaotic, human'),
  ('Respawn Tahmid', 'Gaming + Streaming', 7, array['YouTube', 'TikTok'], 'gold-black gamer aesthetic'),
  ('HustlerBachelors', 'Finance + Crypto + Hustle', 9, array['YouTube', 'TikTok'], 'anti-9-5 rebellious'),
  ('Bachelor Thrifting', 'Fashion + Affiliate', 6, array['YouTube', 'TikTok'], 'old money + streetwear'),
  ('Bachelor GlowUp', 'Self Improvement', 6, array['YouTube', 'TikTok'], 'discipline + confidence'),
  ('Astral Loom', 'Clothing Brand', 8, array['Brand', 'Drops'], 'luxury streetwear');
