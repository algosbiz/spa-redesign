-- Blog database (Neon Postgres) for the admin at /admin/.
-- `npm run blog:setup` runs this file and then loads the seven built-in
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
-- (owner, 5 Oct 2026). Empty: the title is shown. Not in the live table.
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
