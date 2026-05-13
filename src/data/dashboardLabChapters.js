/**
 * Dashboard lab — taught step-by-step here; optional link on each step points to extra reading if you want it.
 * You build a small finance-style dashboard in your own Next.js repo while following these pages.
 */

const COURSE = 'https://nextjs.org/learn/dashboard-app';

export const dashboardLabChapters = [
  {
    slug: 'dashboard-lab-overview',
    track: 'nextjs-lab',
    lessonKind: 'Lab',
    phase: 'Part 0 — Before you start',
    number: 0,
    title: 'Course overview & setup',
    docUrl: COURSE,
    theorySections: [
      {
        title: 'What you will build',
        bullets: [
          'Public marketing home, login, and a protected dashboard area.',
          'Invoices list with search, pagination, create, edit, and delete.',
          'Postgres-backed data, server actions, auth, metadata, and a deploy path.',
        ],
      },
      {
        title: 'What you need',
        bullets: [
          'Node.js 20.9 or newer.',
          'Later: GitHub + Vercel accounts and a hosted Postgres (Neon or similar).',
          'React basics: components, props, state, hooks.',
        ],
      },
      {
        title: 'How to use this lab',
        bullets: [
          'Keep a real Next project open in your editor — you type code there.',
          'Use Reactor as the lesson: read each step here, then do the matching work in your repo.',
          'Steps are ordered 0–16; use the sidebar and next/prev to move in order.',
        ],
      },
      {
        title: 'Try this first',
        bullets: [
          'Create an empty folder for the project, e.g. `nextjs-dashboard`.',
          'Open Part 1 step 1 when you are ready to run create-next-app.',
        ],
      },
    ],
    hideCode: true,
    challenge: 'Create a folder on disk for `nextjs-dashboard` before Chapter 1.',
  },
  {
    slug: 'dashboard-lab-getting-started',
    track: 'nextjs-lab',
    lessonKind: 'Lab',
    phase: 'Part 1 — Project & UI foundation',
    number: 1,
    title: '1 · Getting Started',
    docUrl: `${COURSE}/getting-started`,
    theorySections: [
      {
        title: 'Goal',
        bullets: [
          'Bootstrap a dashboard-shaped App Router app from the Vercel starter template (most UI already exists).',
          'Know where routes, shared UI, fake data, and types live before you change anything.',
        ],
      },
      {
        title: 'Step by step (in your Next project)',
        bullets: [
          'Run `create-next-app` with the dashboard starter `--example` flag (copy the full command from the optional reference link if you want the exact string).',
          'Install dependencies and start dev: `pnpm dev` or `npm run dev`.',
          'Open `http://localhost:3000` — home is intentionally plain at first.',
          'Skim `app/page.tsx`, root `app/layout.tsx`, `app/lib/placeholder-data.ts`, and `app/lib/definitions.ts`.',
        ],
      },
      {
        title: 'Checklist',
        bullets: [
          'Dev server runs with no errors.',
          'You can find `page.tsx` and root `layout.tsx`.',
        ],
      },
    ],
    hideCode: true,
    challenge: 'Change one string on the home page and confirm hot reload.',
  },
  {
    slug: 'dashboard-lab-css-styling',
    track: 'nextjs-lab',
    lessonKind: 'Lab',
    phase: 'Part 1 — Project & UI foundation',
    number: 2,
    title: '2 · CSS Styling',
    docUrl: `${COURSE}/css-styling`,
    theorySections: [
      {
        title: 'Goal',
        bullets: [
          'Global CSS via root layout.',
          'Tailwind utilities + optional CSS Modules + `clsx` for conditional classes.',
        ],
      },
      {
        title: 'Step by step',
        bullets: [
          'Import global CSS in root `app/layout.tsx` so every route shares the same base styles.',
          'Confirm Tailwind directives in `global.css`.',
          'Try the small Tailwind shape snippet on the home page.',
          'Optional: recreate the same shape with a `.module.css` file.',
        ],
      },
      {
        title: 'Checklist',
        bullets: ['Home page visibly styled.', 'You know where global vs module CSS lives.'],
      },
    ],
    hideCode: true,
    challenge: 'Run the course `clsx` example pattern on one dummy label component.',
  },
  {
    slug: 'dashboard-lab-optimizing-fonts-images',
    track: 'nextjs-lab',
    lessonKind: 'Lab',
    phase: 'Part 1 — Project & UI foundation',
    number: 3,
    title: '3 · Optimizing Fonts and Images',
    docUrl: `${COURSE}/optimizing-fonts-images`,
    theorySections: [
      {
        title: 'Goal',
        bullets: ['`next/font` for Inter + practice font (e.g. Lusitana).', '`next/image` for desktop + mobile hero images.'],
      },
      {
        title: 'Step by step',
        bullets: [
          'Add `fonts.ts`, wire Inter on `<body>` in root layout.',
          'Practice: second font on a heading per course instructions.',
          'Add `Image` for `/hero-desktop.png` and `/hero-mobile.png` with correct sizes and responsive classes.',
        ],
      },
      {
        title: 'Checklist',
        bullets: ['No big layout shift on font load.', 'Correct image shows per breakpoint.'],
      },
    ],
    hideCode: true,
    challenge: 'Inspect computed font on `body` in DevTools after changes.',
  },
  {
    slug: 'dashboard-lab-creating-layouts-pages',
    track: 'nextjs-lab',
    lessonKind: 'Lab',
    phase: 'Part 1 — Project & UI foundation',
    number: 4,
    title: '4 · Creating Layouts and Pages',
    docUrl: `${COURSE}/creating-layouts-and-pages`,
    theorySections: [
      {
        title: 'Goal',
        bullets: [
          'Create `/dashboard`, `/dashboard/customers`, `/dashboard/invoices` routes.',
          'Add `dashboard/layout.tsx` with sidenav + `children` (partial rendering idea).',
        ],
      },
      {
        title: 'Step by step',
        bullets: [
          'Create `app/dashboard/page.tsx` — verify `/dashboard`.',
          'Add `customers` and `invoices` routes under `app/dashboard/` with simple placeholder text.',
          'Paste dashboard layout with `SideNav`; confirm layout persists when switching child routes.',
        ],
      },
      {
        title: 'Checklist',
        bullets: ['Three dashboard URLs render.', 'Shared chrome does not flash away on navigation.'],
      },
    ],
    hideCode: true,
    challenge: 'Draw folder tree for `app/dashboard/` and match each folder to a URL.',
  },
  {
    slug: 'dashboard-lab-navigating-between-pages',
    track: 'nextjs-lab',
    lessonKind: 'Lab',
    phase: 'Part 1 — Project & UI foundation',
    number: 5,
    title: '5 · Navigating Between Pages',
    docUrl: `${COURSE}/navigating-between-pages`,
    theorySections: [
      {
        title: 'Goal',
        bullets: [
          'Replace `<a>` with `next/link` for client-side navigation.',
          'Active link styling with `usePathname` + `clsx` in a client `nav-links` component.',
        ],
      },
      {
        title: 'Step by step',
        bullets: [
          'Update `nav-links.tsx`: import `Link` from `next/link`.',
          'Add `"use client"`, `usePathname`, highlight active `href`.',
        ],
      },
      {
        title: 'Checklist',
        bullets: ['No full document reload between dashboard tabs.', 'Active route visually distinct.'],
      },
    ],
    hideCode: true,
    challenge: 'Use Network tab: confirm soft navigations between dashboard pages.',
  },
  {
    slug: 'dashboard-lab-setting-up-database',
    track: 'nextjs-lab',
    lessonKind: 'Lab',
    phase: 'Part 2 — Data & rendering',
    number: 6,
    title: '6 · Setting Up Your Database',
    docUrl: `${COURSE}/setting-up-your-database`,
    theorySections: [
      {
        title: 'Goal',
        bullets: [
          'Push repo to GitHub; connect Vercel; create Postgres (Neon/Supabase per course).',
          'Copy env snippet locally; seed DB via `/seed`; optional `/query` test.',
        ],
      },
      {
        title: 'Step by step',
        bullets: [
          'In Vercel: connect the GitHub repo, create a Postgres database, copy env vars into local `.env`.',
          'Rename `.env.example` → `.env` (or `.env.local`) and paste secrets — never commit.',
          'Hit `/seed` once; remove seed route when done (as course says).',
        ],
      },
      {
        title: 'Checklist',
        bullets: ['`POSTGRES_URL` works locally.', 'Seed completes without error.'],
      },
    ],
    hideCode: true,
    challenge: 'Run one SELECT in the host SQL UI to see invoice rows.',
  },
  {
    slug: 'dashboard-lab-fetching-data',
    track: 'nextjs-lab',
    lessonKind: 'Lab',
    phase: 'Part 2 — Data & rendering',
    number: 7,
    title: '7 · Fetching Data',
    docUrl: `${COURSE}/fetching-data`,
    theorySections: [
      {
        title: 'Goal',
        bullets: [
          'Use async Server Component page on `/dashboard`.',
          'Call SQL helpers from `app/lib/data.ts` — revenue, latest invoices, card aggregates.',
        ],
      },
      {
        title: 'Step by step',
        bullets: [
          'Uncomment imports and components per course order.',
          'Notice sequential `await` → waterfall; fix in next chapters with parallel + streaming.',
        ],
      },
      {
        title: 'Checklist',
        bullets: ['Dashboard overview shows real DB data.', 'You can name when API layer is skipped (server-only).'],
      },
    ],
    hideCode: true,
    challenge: 'Locate `fetchCardData` and read how `Promise.all` is used inside it.',
  },
  {
    slug: 'dashboard-lab-static-dynamic-rendering',
    track: 'nextjs-lab',
    lessonKind: 'Lab',
    phase: 'Part 2 — Data & rendering',
    number: 8,
    title: '8 · Static and Dynamic Rendering',
    docUrl: `${COURSE}/static-and-dynamic-rendering`,
    theorySections: [
      {
        title: 'Goal',
        bullets: [
          'Know static vs dynamic rendering tradeoffs.',
          'Simulate slow `fetchRevenue` — see whole page blocked.',
        ],
      },
      {
        title: 'Step by step',
        bullets: [
          'Temporarily add a short delay inside `fetchRevenue` to feel a slow server fetch blocking the whole page.',
          'Reload `/dashboard` — feel the wait; read terminal logs.',
          'Remove delay before continuing to Streaming chapter.',
        ],
      },
      {
        title: 'Checklist',
        bullets: ['You can explain why a personal dashboard should usually be dynamic.'],
      },
    ],
    hideCode: true,
    challenge: 'Write one sentence: why static cache hurt this dashboard example.',
  },
  {
    slug: 'dashboard-lab-streaming',
    track: 'nextjs-lab',
    lessonKind: 'Lab',
    phase: 'Part 2 — Data & rendering',
    number: 9,
    title: '9 · Streaming',
    docUrl: `${COURSE}/streaming`,
    theorySections: [
      {
        title: 'Goal',
        bullets: [
          '`loading.tsx` + skeleton UI.',
          'Route group `(overview)` so loading only wraps overview.',
          'Component-level `Suspense` — move slow fetch into `RevenueChart`.',
        ],
      },
      {
        title: 'Step by step',
        bullets: [
          'Add dashboard `loading.tsx`, upgrade to skeleton component.',
          'Move `page.tsx` + `loading.tsx` under `(overview)` route group.',
          'Wrap chart in `Suspense`; make `RevenueChart` async with internal fetch.',
          'Practice: stream `LatestInvoices` too; group cards with `CardWrapper` + Suspense as course ends.',
        ],
      },
      {
        title: 'Checklist',
        bullets: ['Slow piece no longer blanks the entire dashboard shell.', 'You can explain route groups `(name)`.'],
      },
    ],
    hideCode: true,
    challenge: 'Toggle slow fetch on one component only — rest of page should stay interactive.',
  },
  {
    slug: 'dashboard-lab-adding-search-pagination',
    track: 'nextjs-lab',
    lessonKind: 'Lab',
    phase: 'Part 3 — Invoices features',
    number: 10,
    title: '10 · Adding Search and Pagination',
    docUrl: `${COURSE}/adding-search-and-pagination`,
    theorySections: [
      {
        title: 'Goal',
        bullets: [
          'URL search params as source of truth for search + page.',
          'Server-side data in `page.tsx` using `searchParams`.',
          'Client search input with `useSearchParams`, `useRouter`, `usePathname`, debounced replace.',
        ],
      },
      {
        title: 'Step by step',
        bullets: [
          'Wire pagination links to update `?page=`.',
          'Wire search to update `?query=` and reset page to 1.',
        ],
      },
      {
        title: 'Checklist',
        bullets: ['Refresh preserves query in URL.', 'Sharing URL reproduces same table state.'],
      },
    ],
    hideCode: true,
    challenge: 'Copy current invoices URL with `?query=` and open in a private window.',
  },
  {
    slug: 'dashboard-lab-mutating-data',
    track: 'nextjs-lab',
    lessonKind: 'Lab',
    phase: 'Part 3 — Invoices features',
    number: 11,
    title: '11 · Mutating Data',
    docUrl: `${COURSE}/mutating-data`,
    theorySections: [
      {
        title: 'Goal',
        bullets: [
          'Server Actions in `app/lib/actions.ts`.',
          'Forms with `action={createInvoice}` etc.',
          '`revalidatePath` / `redirect` after writes; delete invoice action.',
        ],
      },
      {
        title: 'Step by step',
        bullets: [
          'Implement create, edit, and delete flows using server actions, revalidation, and redirects.',
          'Keep `redirect` outside `try/catch` where the course warns.',
        ],
      },
      {
        title: 'Checklist',
        bullets: ['Create + edit + delete hit DB and list updates.', 'You read the Server Actions security blog link in the course.'],
      },
    ],
    code: `'use server';
// actions.ts — shape only; align types with your Next version
export async function createInvoice(formData: FormData) {
  // validate → sql → revalidatePath → redirect
}`,
    challenge: 'Add a console.log in one action — confirm it logs on the server terminal, not the browser.',
  },
  {
    slug: 'dashboard-lab-error-handling',
    track: 'nextjs-lab',
    lessonKind: 'Lab',
    phase: 'Part 3 — Invoices features',
    number: 12,
    title: '12 · Handling Errors',
    docUrl: `${COURSE}/error-handling`,
    theorySections: [
      {
        title: 'Goal',
        bullets: ['`try/catch` in Server Actions for expected failures.', '`error.tsx` boundary for uncaught errors.', '`notFound()` + `not-found.tsx` for missing invoice.'],
      },
      {
        title: 'Step by step',
        bullets: [
          'Add `app/dashboard/invoices/error.tsx` with reset button.',
          'Throw in `deleteInvoice` temporarily — see boundary; remove throw after.',
          'Call `notFound()` when `fetchInvoiceById` returns empty; add localized `not-found.tsx` under edit route.',
        ],
      },
      {
        title: 'Checklist',
        bullets: ['404 path shows friendly not-found UI.', 'Unexpected errors show error boundary, not white screen.'],
      },
    ],
    hideCode: true,
    challenge: 'Hit a fake invoice UUID — confirm `notFound` wins over generic `error.tsx`.',
  },
  {
    slug: 'dashboard-lab-improving-accessibility',
    track: 'nextjs-lab',
    lessonKind: 'Lab',
    phase: 'Part 3 — Invoices features',
    number: 13,
    title: '13 · Improving Accessibility',
    docUrl: `${COURSE}/improving-accessibility`,
    theorySections: [
      {
        title: 'Goal',
        bullets: [
          'ESLint + `eslint-config-next` + jsx-a11y rules.',
          'Server-side Zod validation + `useActionState` to show field errors.',
          'ARIA patterns: `aria-describedby`, `aria-live` on error regions.',
        ],
      },
      {
        title: 'Step by step',
        bullets: [
          'Run `pnpm lint` after removing an `alt` — see warning; fix it.',
          'Wire `useActionState` + `safeParse` return shape to the create form.',
          'Optional stretch: repeat for edit form as course suggests.',
        ],
      },
      {
        title: 'Checklist',
        bullets: ['Empty submit shows field errors, not silent failure.', 'Lint passes on touched files.'],
      },
    ],
    hideCode: true,
    challenge: 'Tab through create-invoice form with only keyboard — every field reachable.',
  },
  {
    slug: 'dashboard-lab-adding-authentication',
    track: 'nextjs-lab',
    lessonKind: 'Lab',
    phase: 'Part 4 — Auth & ship',
    number: 14,
    title: '14 · Adding Authentication',
    docUrl: `${COURSE}/adding-authentication`,
    theorySections: [
      {
        title: 'Goal',
        bullets: [
          'NextAuth.js (Auth.js) with Credentials provider.',
          '`auth.config.ts` + root `proxy.ts` matcher (course naming — follow live doc if file renamed in your Next version).',
          '`auth.ts` for Node-only bcrypt + DB lookup; login Server Action + `useActionState` pending UI.',
        ],
      },
      {
        title: 'Step by step',
        bullets: [
          'Add `/login` route and login form per course.',
          'Set `AUTH_SECRET` in env.',
          'Implement `authorize` callback + bcrypt compare.',
          'Sign out form action in sidenav.',
        ],
      },
      {
        title: 'Checklist',
        bullets: [
          'Unauthenticated user cannot render dashboard routes.',
          'Demo credentials from course work: user@nextmail.com / 123456',
        ],
      },
    ],
    hideCode: true,
    challenge: 'Log in, copy `/dashboard` URL, open in private tab — should redirect to login.',
  },
  {
    slug: 'dashboard-lab-adding-metadata',
    track: 'nextjs-lab',
    lessonKind: 'Lab',
    phase: 'Part 4 — Auth & ship',
    number: 15,
    title: '15 · Adding Metadata',
    docUrl: `${COURSE}/adding-metadata`,
    theorySections: [
      {
        title: 'Goal',
        bullets: [
          'Move `favicon.ico` + `opengraph-image` into `app/` for file-based metadata.',
          'Export `metadata` object from root layout with `metadataBase` + title template.',
          'Per-page `metadata` exports for nested routes.',
        ],
      },
      {
        title: 'Step by step',
        bullets: [
          'Verify `<head>` in DevTools after each change.',
          'Complete practice titles for login, dashboard, customers, create, edit pages.',
        ],
      },
      {
        title: 'Checklist',
        bullets: ['OG preview looks sane when pasting deploy URL.', 'Tab titles use `%s | Acme Dashboard` pattern.'],
      },
    ],
    hideCode: true,
    challenge: 'Paste production URL in a chat app — confirm title + image preview.',
  },
  {
    slug: 'dashboard-lab-next-steps',
    track: 'nextjs-lab',
    lessonKind: 'Lab',
    phase: 'Part 4 — Auth & ship',
    number: 16,
    title: '16 · Next Steps',
    docUrl: `${COURSE}/next-steps`,
    theorySections: [
      {
        title: 'Goal',
        bullets: ['Close the course loop — deploy, share, and keep learning from docs.'],
      },
      {
        title: 'Step by step',
        bullets: [
          'Read the “Next Steps” page on learn.nextjs.org for links (docs, examples, community).',
          'Ship final build to Vercel; fix any env issues for auth + DB in production.',
        ],
      },
      {
        title: 'Checklist',
        bullets: ['Production URL loads with metadata + auth + invoices working.', 'You have a personal “what to learn next” list.'],
      },
    ],
    hideCode: true,
    challenge: 'Pick one doc section from https://nextjs.org/docs/app/getting-started you did not use in the lab — read it end-to-end.',
  },
];

export const firstDashboardLabSlug = dashboardLabChapters[0]?.slug ?? 'dashboard-lab-overview';

export function getDashboardLabChapter(slug) {
  return dashboardLabChapters.find((c) => c.slug === slug);
}

export function getDashboardLabAdjacent(slug) {
  const index = dashboardLabChapters.findIndex((c) => c.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: dashboardLabChapters[index - 1] ?? null,
    next: dashboardLabChapters[index + 1] ?? null,
  };
}
