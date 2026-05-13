/**
 * Next.js track — taught here first; each topic may include an optional doc link for extra detail.
 * Part 0 = React vs Next. Parts 1–6 = App Router skills in a sensible order.
 */

export const DOC_GETTING_STARTED = 'https://nextjs.org/docs/app/getting-started';
export const DOC_HOME = 'https://nextjs.org/docs';

export const nextjsChapters = [
  {
    slug: 'nextjs-react-issues-spa',
    track: 'nextjs',
    lessonKind: 'Topic',
    phase: 'Part 0 — From React pain to Next ideas',
    number: 1,
    title: 'Common React issues (SPA / client-first)',
    docUrl: 'https://nextjs.org/docs',
    theorySections: [
      {
        title: 'What you will learn',
        bullets: [
          'Typical pain points when React is used as a client-only SPA.',
          'Why a framework layer can help without replacing React.',
        ],
      },
      {
        title: 'Main idea',
        bullets: [
          'React draws UI — it does not by itself define how the first HTML is produced or how URLs map to files.',
          'A SPA often ships almost empty HTML first; real content appears after JavaScript runs.',
          'If most data loads in useEffect, users wait longer for meaningful content and crawlers see less.',
          'Routing, code splitting, meta tags, and deploy rules are often hand-wired — easy to get inconsistent.',
        ],
      },
      {
        title: 'Quick recap',
        bullets: [
          'You are not “blaming React” — you are naming missing server and structure choices.',
          'Next topic ties each pain to a clear Next.js idea.',
        ],
      },
    ],
    hideCode: true,
    challenge: 'Practical: View page source on a SPA — note empty body before JS.',
  },
  {
    slug: 'nextjs-how-next-helps',
    track: 'nextjs',
    lessonKind: 'Topic',
    phase: 'Part 0 — From React pain to Next ideas',
    number: 2,
    title: 'How Next.js helps — overall working idea',
    docUrl: 'https://nextjs.org/docs/app/getting-started',
    theorySections: [
      {
        title: 'React issue → Next idea',
        bullets: [
          'Thin first HTML → Next can render on the server first (Server Components, streaming).',
          'Data only after mount on client → async server pages can await fetch or DB before HTML is sent.',
          'No backend in the repo → Route Handlers give you small HTTP endpoints next to your UI.',
          'One huge client bundle → file-based routes split work; default server components shrink what ships to the browser.',
        ],
      },
      {
        title: 'Overall flow (App Router)',
        bullets: [
          'Browser requests a URL.',
          'Next runs your server components for that route — they may read env, DB, or files safely.',
          'The response includes HTML (and RSC payload); interactive bits hydrate as small client “islands”.',
          'Internal navigation can fetch only the next route segment — feels fast like a SPA with server wins.',
        ],
      },
    ],
    hideCode: true,
    challenge: 'On paper, draw four boxes: Browser → Next server → HTML on wire → Client island. Label one arrow “data”.',
  },
  {
    slug: 'nextjs-docs-installation',
    track: 'nextjs',
    lessonKind: 'Topic',
    phase: 'Part 1 — Your first app',
    number: 3,
    title: 'Installation',
    docUrl: 'https://nextjs.org/docs/app/getting-started/installation',
    theorySections: [
      {
        title: 'What you will learn',
        bullets: [
          'How create-next-app bootstraps a working App Router project.',
          'Which choices matter on day one: TypeScript, ESLint, App Router.',
        ],
      },
      {
        title: 'Main idea',
        bullets: [
          'The CLI creates `app/`, scripts in `package.json`, and config files so you start from a working baseline.',
          'You can use npm, pnpm, or yarn — pick one and stay consistent for the team.',
          '`npm run dev` starts a dev server with fast refresh; `npm run build` checks production output.',
        ],
      },
      {
        title: 'React pain this helps',
        bullets: [
          'Less manual wiring than “React + router + server + build” from scratch.',
        ],
      },
      {
        title: 'Try this (hands-on)',
        bullets: [
          'Run create-next-app; choose App Router.',
          'Run npm run dev and npm run build once.',
        ],
      },
      {
        title: 'Quick recap',
        bullets: [
          'You have a runnable App Router app and know the two commands you will use every day.',
        ],
      },
    ],
    code: `npx create-next-app@latest my-app
cd my-app
npm run dev`,
    challenge: 'Run a production build once; if it fails, read the error and fix it before moving on.',
  },
  {
    slug: 'nextjs-docs-project-structure',
    track: 'nextjs',
    lessonKind: 'Topic',
    phase: 'Part 1 — Your first app',
    number: 4,
    title: 'Project Structure',
    docUrl: 'https://nextjs.org/docs/app/getting-started/project-structure',
    theorySections: [
      {
        title: 'What you will learn',
        bullets: [
          'Top-level folders: app/, public/, optional src/.',
          'Special files in app/: layout, page, loading, error, not-found, route, default, etc.',
        ],
      },
      {
        title: 'Example tree (know these folders)',
        bullets: [
          'app/layout.tsx, app/page.tsx, app/globals.css — root shell and home.',
          'app/dashboard/layout.tsx, app/dashboard/page.tsx — nested segment.',
          'app/blog/[slug]/page.tsx — dynamic segment.',
          'app/api/hello/route.ts — HTTP handler.',
          'public/* → static URLs; components/, lib/, hooks/ — shared code (not routes by themselves).',
        ],
      },
      {
        title: 'React pain this helps',
        bullets: [
          'One clear map from URL to files — less mystery than ad-hoc src/ only.',
        ],
      },
      {
        title: 'Try this (hands-on)',
        bullets: [
          'In a lab app, trace three URLs to three files under app/.',
        ],
      },
      {
        title: 'Quick recap',
        bullets: [
          'Special filenames in `app/` change behavior; ordinary folders only change the URL path.',
        ],
      },
    ],
    hideCode: true,
    challenge: 'Add `app/about/page.tsx`, visit `/about`, then list every folder from root to that file.',
  },
  {
    slug: 'nextjs-docs-layouts-pages',
    track: 'nextjs',
    lessonKind: 'Topic',
    phase: 'Part 2 — Pages & navigation',
    number: 5,
    title: 'Layouts and Pages',
    docUrl: 'https://nextjs.org/docs/app/getting-started/layouts-and-pages',
    theorySections: [
      {
        title: 'What you will learn',
        bullets: [
          'page.tsx vs layout.tsx.',
          'How nested layouts wrap child routes.',
          'How `Link` fits in (covered in depth in the next topic).',
        ],
      },
      {
        title: 'Main idea',
        bullets: [
          'page = screen for a segment; layout = shared chrome + {children}.',
          'Root layout usually owns <html> and <body> once.',
        ],
      },
      {
        title: 'React pain this helps',
        bullets: [
          'Stops copy-paste page wrappers common in SPAs.',
        ],
      },
      {
        title: 'Try this (hands-on)',
        bullets: [
          'Create two sibling pages and one nested layout — click between routes.',
        ],
      },
      {
        title: 'Quick recap',
        bullets: [
          '`page.tsx` is the screen; `layout.tsx` is shared chrome; both follow the folder tree.',
        ],
      },
    ],
    hideCode: true,
    challenge: 'Add a visible border in a nested layout only — navigate between two child routes and confirm the border stays.',
  },
  {
    slug: 'nextjs-docs-linking-navigating',
    track: 'nextjs',
    lessonKind: 'Topic',
    phase: 'Part 2 — Pages & navigation',
    number: 6,
    title: 'Linking and Navigating',
    docUrl: 'https://nextjs.org/docs/app/getting-started/linking-and-navigating',
    theorySections: [
      {
        title: 'What you will learn',
        bullets: [
          'Prefetch and soft navigation: why internal links should use `Link`.',
          'Why dynamic routes and slow networks need a deliberate loading story (later topics).',
        ],
      },
      {
        title: 'Main idea',
        bullets: [
          '`Link` swaps route segments without a full document reload when both sides are in your app.',
          'Use a normal `<a href="https://...">` for external sites and file downloads.',
        ],
      },
      {
        title: 'React pain this helps',
        bullets: [
          'SPA-like speed without giving up server-first pages.',
        ],
      },
      {
        title: 'Try this (hands-on)',
        bullets: [
          'Use Network tab: compare Link navigation vs <a> full reload.',
        ],
      },
      {
        title: 'Quick recap',
        bullets: [
          '`Link` = fast in-app moves; `<a>` = leave the site or force a full load.',
        ],
      },
    ],
    hideCode: true,
    challenge: 'Find one real link on your site that must stay `<a>` (external https) and say why.',
  },
  {
    slug: 'nextjs-docs-server-client-components',
    track: 'nextjs',
    lessonKind: 'Topic',
    phase: 'Part 3 — Server & data',
    number: 7,
    title: 'Server and Client Components',
    docUrl: 'https://nextjs.org/docs/app/getting-started/server-and-client-components',
    theorySections: [
      {
        title: 'What you will learn',
        bullets: [
          'Default server components in App Router.',
          'When and how to add "use client".',
          'How boundaries affect bundle size.',
        ],
      },
      {
        title: 'Main idea',
        bullets: [
          'Server: data access, no browser hooks.',
          'Client: interactivity — keep islands small.',
        ],
      },
      {
        title: 'React pain this helps',
        bullets: [
          'Shrinks “everything runs in the browser” SPA cost.',
        ],
      },
      {
        title: 'Try this (hands-on)',
        bullets: [
          'Split one screen: server parent + tiny client child with one button.',
        ],
      },
      {
        title: 'Quick recap',
        bullets: [
          'Default to server components; add `"use client"` only where the browser must run code.',
        ],
      },
    ],
    hideCode: true,
    challenge: 'Count your `"use client"` files — aim for as few files as possible.',
  },
  {
    slug: 'nextjs-docs-fetching-data',
    track: 'nextjs',
    lessonKind: 'Topic',
    phase: 'Part 3 — Server & data',
    number: 8,
    title: 'Fetching Data',
    docUrl: 'https://nextjs.org/docs/app/getting-started/fetching-data',
    theorySections: [
      {
        title: 'What you will learn',
        bullets: [
          'Async Server Components and streaming.',
          'How loading UI can pair with slow data (see also Loading UI file convention).',
        ],
      },
      {
        title: 'Main idea',
        bullets: [
          'Server can await fetch or DB before sending HTML.',
          'What you fetch and how often it updates ties to caching — you will cover that in the next part.',
        ],
      },
      {
        title: 'React pain this helps',
        bullets: [
          'Replaces “fetch only in useEffect” for public read-mostly pages.',
        ],
      },
      {
        title: 'Try this (hands-on)',
        bullets: [
          "Server-fetch JSON and render one field — view source for HTML text.",
        ],
      },
      {
        title: 'Quick recap',
        bullets: [
          'Server fetch moves work off the critical “blank then spin” client path.',
        ],
      },
    ],
    hideCode: true,
    challenge: 'Server-fetch one public JSON URL and confirm the text appears in View Source.',
  },
  {
    slug: 'nextjs-docs-mutating-data',
    track: 'nextjs',
    lessonKind: 'Topic',
    phase: 'Part 3 — Server & data',
    number: 9,
    title: 'Mutating Data',
    docUrl: 'https://nextjs.org/docs/app/getting-started/mutating-data',
    theorySections: [
      {
        title: 'What you will learn',
        bullets: [
          'Server Functions and Server Actions patterns in Next.',
          'How mutations interact with cache and navigation.',
        ],
      },
      {
        title: 'Main idea',
        bullets: [
          'Mutations can start from forms and server code — not only client POST helpers.',
          'After a write, revalidate or redirect so the user never sees stale UI; keep `redirect` outside a catch that swallows it.',
        ],
      },
      {
        title: 'React pain this helps',
        bullets: [
          'Less “manual fetch POST + refresh list” glue in client-only apps.',
        ],
      },
      {
        title: 'Try this (hands-on)',
        bullets: [
          'Add a tiny form whose `action` is a server action that writes dummy data or logs on the server.',
        ],
      },
      {
        title: 'Quick recap',
        bullets: [
          'Server actions keep writes near your data layer and avoid exposing secrets to the browser.',
        ],
      },
    ],
    code: `// Shape only — types vary by Next version
'use server';
export async function submit() {
  /* ... */
}`,
    challenge: 'Sketch what the user should see if the action fails validation vs if the database fails.',
  },
  {
    slug: 'nextjs-docs-caching',
    track: 'nextjs',
    lessonKind: 'Topic',
    phase: 'Part 4 — Cache & errors',
    number: 10,
    title: 'Caching',
    docUrl: 'https://nextjs.org/docs/app/getting-started/caching',
    theorySections: [
      {
        title: 'What you will learn',
        bullets: [
          'What “cached” means for routes and data in a Next app.',
          'Why fast responses can still show old data if cache rules are wrong.',
        ],
      },
      {
        title: 'Main idea',
        bullets: [
          'Caching makes prod fast — wrong cache makes stale data.',
          'Defaults can change between Next versions — when in doubt, observe behavior in your project.',
        ],
      },
      {
        title: 'React pain this helps',
        bullets: [
          'Framework-level cache vs hand-rolled memo + service worker experiments.',
        ],
      },
      {
        title: 'Try this (hands-on)',
        bullets: [
          'Change one piece of fetched data — note whether the UI updates on refresh without code changes.',
        ],
      },
      {
        title: 'Quick recap',
        bullets: [
          'Caching and revalidating work together — cache stores answers; revalidate invalidates them.',
        ],
      },
    ],
    hideCode: true,
    challenge: 'List one piece of data you would never cache long, and one you could cache safely.',
  },
  {
    slug: 'nextjs-docs-revalidating',
    track: 'nextjs',
    lessonKind: 'Topic',
    phase: 'Part 4 — Cache & errors',
    number: 11,
    title: 'Revalidating',
    docUrl: 'https://nextjs.org/docs/app/getting-started/revalidating',
    theorySections: [
      {
        title: 'What you will learn',
        bullets: [
          'Time-based vs on-demand revalidation strategies.',
          'How tags and paths tie to cached data.',
        ],
      },
      {
        title: 'Main idea',
        bullets: [
          'Revalidate = tell Next “this cached slice is stale”.',
          'Time-based vs on-demand: pick based on how fresh the data must be and who triggers updates.',
        ],
      },
      {
        title: 'React pain this helps',
        bullets: [
          'Clear story for “when does user see fresh data?” beyond manual client refetch.',
        ],
      },
      {
        title: 'Try this (hands-on)',
        bullets: [
          'Pick one strategy (time-based or on-demand) and write when it should run in plain English.',
        ],
      },
      {
        title: 'Quick recap',
        bullets: [
          'Revalidating closes the loop opened in Caching.',
        ],
      },
    ],
    hideCode: true,
    challenge: 'Write “if I update CMS content, I will revalidate by ___.”',
  },
  {
    slug: 'nextjs-docs-error-handling',
    track: 'nextjs',
    lessonKind: 'Topic',
    phase: 'Part 4 — Cache & errors',
    number: 12,
    title: 'Error Handling',
    docUrl: 'https://nextjs.org/docs/app/getting-started/error-handling',
    theorySections: [
      {
        title: 'What you will learn',
        bullets: [
          'Expected errors vs uncaught exceptions.',
          'error boundaries in App Router.',
        ],
      },
      {
        title: 'Main idea',
        bullets: [
          'Different UI for “user mistake” vs “server blew up”.',
          'notFound() for missing resources — ties to not-found file.',
        ],
      },
      {
        title: 'React pain this helps',
        bullets: [
          'Structured recovery instead of only console.error in useEffect.',
        ],
      },
      {
        title: 'Try this (hands-on)',
        bullets: [
          'Trigger a notFound path and an error boundary once in dev.',
        ],
      },
      {
        title: 'Quick recap',
        bullets: [
          '`error.tsx` catches unexpected failures; `notFound()` is for “this resource does not exist”.',
        ],
      },
    ],
    hideCode: true,
    challenge: 'List which routes in your app need a 404 UI vs a generic error boundary.',
  },
  {
    slug: 'nextjs-docs-css',
    track: 'nextjs',
    lessonKind: 'Topic',
    phase: 'Part 5 — Style, media & SEO',
    number: 13,
    title: 'CSS',
    docUrl: 'https://nextjs.org/docs/app/getting-started/css',
    theorySections: [
      {
        title: 'What you will learn',
        bullets: [
          'Global CSS vs CSS Modules vs Tailwind-style utilities.',
          'Where each style belongs so you do not fight specificity wars.',
        ],
      },
      {
        title: 'Main idea',
        bullets: [
          'Import global CSS once from root layout.',
          'Colocate module CSS with components to avoid class clashes.',
        ],
      },
      {
        title: 'React pain this helps',
        bullets: [
          'Same patterns as Vite — but entry and conventions are standardized.',
        ],
      },
      {
        title: 'Try this (hands-on)',
        bullets: [
          'Add one module style and confirm it does not leak globally.',
        ],
      },
      {
        title: 'Quick recap',
        bullets: [
          'One global entry in root layout; scoped styles per feature or utility classes in JSX.',
        ],
      },
    ],
    hideCode: true,
    challenge: 'Move one inline style into a module class and confirm no global bleed.',
  },
  {
    slug: 'nextjs-docs-images',
    track: 'nextjs',
    lessonKind: 'Topic',
    phase: 'Part 5 — Style, media & SEO',
    number: 14,
    title: 'Image Optimization',
    docUrl: 'https://nextjs.org/docs/app/getting-started/images',
    theorySections: [
      {
        title: 'What you will learn',
        bullets: [
          'next/image sizing, lazy loading, and domains config.',
        ],
      },
      {
        title: 'Main idea',
        bullets: [
          'Image component wraps sharp optimization — fewer giant PNG mistakes.',
        ],
      },
      {
        title: 'React pain this helps',
        bullets: [
          'LCP fixes without hand-writing responsive srcset everywhere.',
        ],
      },
      {
        title: 'Try this (hands-on)',
        bullets: [
          'Render one local image from `public/` and one remote image with explicit width and height.',
        ],
      },
      {
        title: 'Quick recap',
        bullets: [
          '`next/image` needs sizing hints; remote hosts must be allowlisted in config.',
        ],
      },
    ],
    hideCode: true,
    challenge: 'Before production, list every remote image domain you use and plan the allowlist.',
  },
  {
    slug: 'nextjs-docs-fonts',
    track: 'nextjs',
    lessonKind: 'Topic',
    phase: 'Part 5 — Style, media & SEO',
    number: 15,
    title: 'Font Optimization',
    docUrl: 'https://nextjs.org/docs/app/getting-started/fonts',
    theorySections: [
      {
        title: 'What you will learn',
        bullets: [
          'next/font Google and local patterns.',
          'How fonts hook into layout for zero layout shift goals.',
        ],
      },
      {
        title: 'Main idea',
        bullets: [
          'Self-hosting and subsetting reduce CLS and privacy issues.',
        ],
      },
      {
        title: 'React pain this helps',
        bullets: [
          'No late @import flash in client-only SPAs.',
        ],
      },
      {
        title: 'Try this (hands-on)',
        bullets: [
          'Apply one font from `next/font` through the root layout and check computed styles on `body`.',
        ],
      },
      {
        title: 'Quick recap',
        bullets: [
          'Self-hosted fonts reduce extra network hops and help avoid layout shift when paired with layout.',
        ],
      },
    ],
    hideCode: true,
    challenge: 'Run Lighthouse for CLS before and after adding a webfont.',
  },
  {
    slug: 'nextjs-docs-metadata-og',
    track: 'nextjs',
    lessonKind: 'Topic',
    phase: 'Part 5 — Style, media & SEO',
    number: 16,
    title: 'Metadata and OG images',
    docUrl: 'https://nextjs.org/docs/app/getting-started/metadata-and-og-images',
    theorySections: [
      {
        title: 'What you will learn',
        bullets: [
          'Static and dynamic metadata APIs.',
          'OG / social image generation patterns in App Router.',
        ],
      },
      {
        title: 'Main idea',
        bullets: [
          'Head tags drive SEO and link previews — colocate with routes.',
        ],
      },
      {
        title: 'React pain this helps',
        bullets: [
          'Fixes empty link previews from client-only SPAs.',
        ],
      },
      {
        title: 'Try this (hands-on)',
        bullets: [
          'Set title + description on one route — paste link in a chat app preview.',
        ],
      },
      {
        title: 'Quick recap',
        bullets: [
          'Metadata belongs next to routes; templates avoid repeating the app name in every title.',
        ],
      },
    ],
    hideCode: true,
    challenge: 'Set `metadataBase` to your real deploy URL once you know it — previews use correct absolute OG URLs.',
  },
  {
    slug: 'nextjs-docs-route-handlers',
    track: 'nextjs',
    lessonKind: 'Topic',
    phase: 'Part 6 — APIs, edge & production',
    number: 17,
    title: 'Route Handlers',
    docUrl: 'https://nextjs.org/docs/app/getting-started/route-handlers',
    theorySections: [
      {
        title: 'What you will learn',
        bullets: [
          'How `app/api/.../route.ts` maps to HTTP methods.',
          'When a route handler should stay thin and delegate to shared lib code.',
        ],
      },
      {
        title: 'Main idea',
        bullets: [
          'Same repo serves UI + JSON — good BFF pattern.',
        ],
      },
      {
        title: 'React pain this helps',
        bullets: [
          'Avoids separate Express server for small backends.',
        ],
      },
      {
        title: 'Try this (hands-on)',
        bullets: [
          'Implement /api/ping and call it from fetch in dev.',
        ],
      },
      {
        title: 'Quick recap',
        bullets: [
          'Route handlers are small HTTP surfaces colocated with your app — great for webhooks and BFF JSON.',
        ],
      },
    ],
    code: `// app/api/ping/route.ts
export async function GET() {
  return Response.json({ ok: true });
}`,
    challenge: 'Add size limits and basic validation on POST bodies before you trust client input.',
  },
  {
    slug: 'nextjs-docs-proxy',
    track: 'nextjs',
    lessonKind: 'Topic',
    phase: 'Part 6 — APIs, edge & production',
    number: 18,
    title: 'Proxy',
    docUrl: 'https://nextjs.org/docs/app/getting-started/proxy',
    theorySections: [
      {
        title: 'What you will learn',
        bullets: [
          'What “edge of the app” means: code that runs before a route fully renders.',
          'Typical uses: auth redirects, geo headers, small rewrites.',
        ],
      },
      {
        title: 'Main idea',
        bullets: [
          'Prefer small, fast checks at the boundary; keep heavy logic in route handlers or server actions.',
          'File name and exports can change between Next majors — verify against your installed version.',
        ],
      },
      {
        title: 'React pain this helps',
        bullets: [
          'Server-side gate before client bundle runs.',
        ],
      },
      {
        title: 'Try this (hands-on)',
        bullets: [
          'In a throwaway branch, add the smallest matcher you need and log the pathname once.',
        ],
      },
      {
        title: 'Quick recap',
        bullets: [
          'Boundary code should stay minimal — validate auth, then get out of the way.',
        ],
      },
    ],
    hideCode: true,
    challenge: 'Write one rule: what must never run in edge/boundary files (hint: heavy crypto or long CPU).',
  },
  {
    slug: 'nextjs-docs-deploying',
    track: 'nextjs',
    lessonKind: 'Topic',
    phase: 'Part 6 — APIs, edge & production',
    number: 19,
    title: 'Deploying',
    docUrl: 'https://nextjs.org/docs/app/getting-started/deploying',
    theorySections: [
      {
        title: 'What you will learn',
        bullets: [
          'Build output, Node vs serverless, env vars on host.',
        ],
      },
      {
        title: 'Main idea',
        bullets: [
          '`npm run build` must be green before CI or hosting can trust the app.',
          'Some Next features need specific runtime support — check your host’s compatibility list.',
        ],
      },
      {
        title: 'React pain this helps',
        bullets: [
          'One deploy unit for UI + handlers vs split SPA + API.',
        ],
      },
      {
        title: 'Try this (hands-on)',
        bullets: [
          'Deploy a hello world and open the production URL on mobile.',
        ],
      },
      {
        title: 'Quick recap',
        bullets: [
          'Ship flow: green build → configure host → set env → smoke test production.',
        ],
      },
    ],
    hideCode: true,
    challenge: 'Open your deploy URL on mobile data once — catch slow images or missing HTTPS.',
  },
  {
    slug: 'nextjs-docs-upgrading',
    track: 'nextjs',
    lessonKind: 'Topic',
    phase: 'Part 6 — APIs, edge & production',
    number: 20,
    title: 'Upgrading',
    docUrl: 'https://nextjs.org/docs/app/getting-started/upgrading',
    theorySections: [
      {
        title: 'What you will learn',
        bullets: [
          'How to move from older Next or canary tracks safely.',
          'Where breaking changes are listed per major.',
        ],
      },
      {
        title: 'Main idea',
        bullets: [
          'Upgrade in a branch; run build + smoke tests; read release notes.',
        ],
      },
      {
        title: 'React pain this helps',
        bullets: [
          'Keeps you on supported security and React baseline.',
        ],
      },
      {
        title: 'Try this (hands-on)',
        bullets: [
          'Run the upgrade command for your package manager in a copy branch; run build and tests.',
        ],
      },
      {
        title: 'Quick recap',
        bullets: [
          'Upgrade in isolation; codemods remove repetitive edits when they exist for your jump.',
        ],
      },
    ],
    hideCode: true,
    challenge: 'After any major upgrade, re-run your smoke checklist: auth, API, and one slow page.',
  },
];

export const firstNextSlug = nextjsChapters[0]?.slug ?? 'nextjs-react-issues-spa';

export function getNextChapter(slug) {
  return nextjsChapters.find((c) => c.slug === slug);
}

export function getNextAdjacent(slug) {
  const index = nextjsChapters.findIndex((c) => c.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: nextjsChapters[index - 1] ?? null,
    next: nextjsChapters[index + 1] ?? null,
  };
}
