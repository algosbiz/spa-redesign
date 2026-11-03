-- Database (Neon Postgres) for the admin at /admin/: articles, edited
-- treatment pages and redirects.
-- `npm run blog:setup` runs this file and then loads the nine built-in
-- articles. It is safe to run again: nothing is dropped or overwritten.
-- (One statement per `;`-terminated block; the setup script splits on that.)

-- Articles. Same columns as the live site's Supabase table, so rows can move
-- between the two unchanged.
create table if not exists posts (
    id uuid primary key default gen_random_uuid(),
    slug text unique not null,
    title text not null,
    excerpt text,
    cover_image text,
    content_html text not null default '',
    category text,
    tags text[] default '{}',
    author text default 'Admin',
    status text not null default 'draft' check (status in ('draft', 'published')),
    seo_title text,
    seo_description text,
    published_at timestamptz,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- The heading above the article body, when it should differ from the title
-- (owner, 5 Oct 2026). No longer used since 12 Oct 2026: the owner removed
-- the field and the repeated title, the banner h1 is the only title. The
-- column stays so old rows keep their value. Not in the live table.
alter table posts add column if not exists heading text;

-- Whether the article page prints its publish date (owner, 9 Oct 2026).
-- Off hides the date in the meta line and on the article's "More Articles"
-- card. Not in the live table.
alter table posts add column if not exists show_date boolean not null default true;

-- The public list: published articles, newest first.
create index if not exists posts_status_published_idx
    on posts (status, published_at desc);

-- The admin dashboard: last edited first.
create index if not exists posts_updated_idx
    on posts (updated_at desc);

-- Languages (migration/multi-language-plan-2026-11.md, 2 Nov 2026): every
-- article has a language, English for the ones written before; a translation
-- names the article it translates and usually keeps its slug, so slugs are
-- unique per language. The app also makes these changes on first use
-- (src/lib/blog/posts.ts). Not in the live table.
alter table posts add column if not exists locale text not null default 'en';

alter table posts add column if not exists translation_of uuid references posts (id) on delete set null;

alter table posts drop constraint if exists posts_slug_key;

create unique index if not exists posts_locale_slug_idx
    on posts (locale, slug);

-- Treatment pages edited in /admin/treatments/ (owner, 12 Oct 2026). One row
-- per page that differs from its built-in version (src/content/treatments/);
-- no row = the built-in version. `body` is the page's element tree, `seo` the
-- SEO texts that differ from src/data/treatments/ ({ title?, description? }).
-- The app also creates it on first use (src/lib/treatments/content.ts).
create table if not exists page_content (
    path text primary key,
    body jsonb not null,
    seo jsonb,
    updated_at timestamptz not null default now()
);

-- Redirects added in /admin/redirects/ (owner, 12 Oct 2026). Every change is
-- published as a small JSON file in R2 that src/proxy.ts answers from, so it
-- is live at once. The app also creates it on first use
-- (src/lib/redirects/store.ts).
create table if not exists redirects (
    id uuid primary key default gen_random_uuid(),
    source text unique not null,
    destination text not null,
    status_code integer not null default 301 check (status_code in (301, 302)),
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);
