-- Run this once in the Supabase SQL editor (your project → SQL Editor → New query)
-- to create the tables the analytics dashboard reads from.

create table if not exists visitors (
  visitor_id text primary key,
  traffic_source text not null default 'Direct',
  first_seen timestamptz not null default now(),
  last_seen timestamptz not null default now()
);

create table if not exists page_views (
  id bigint generated always as identity primary key,
  visitor_id text not null references visitors(visitor_id),
  path text not null,
  created_at timestamptz not null default now()
);

create table if not exists click_events (
  id bigint generated always as identity primary key,
  visitor_id text not null references visitors(visitor_id),
  label text not null,
  created_at timestamptz not null default now()
);

create index if not exists page_views_path_idx on page_views (path);
create index if not exists click_events_label_idx on click_events (label);

-- Row Level Security: the app only ever talks to these tables through the
-- server-side service-role key (never exposed to the browser), so RLS can
-- stay locked with no policies — the service role bypasses RLS entirely.
alter table visitors enable row level security;
alter table page_views enable row level security;
alter table click_events enable row level security;
