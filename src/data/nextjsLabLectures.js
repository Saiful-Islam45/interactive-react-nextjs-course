/**
 * Next.js Lab — beginner path (App Router). Short English, step rhythm: why → what file → code.
 * This module is separate from the older "Learn Next.js" lecture track.
 */

function teach({ topics, realLife, code, extraBlocks = [] }) {
  return [
    { type: 'h2', text: 'Main ideas' },
    { type: 'ul', items: topics },
    { type: 'h2', text: 'Real-life examples' },
    { type: 'ul', items: realLife },
    { type: 'h2', text: 'Code example' },
    { type: 'pre', code },
    ...extraBlocks,
  ];
}

function practice(text) {
  return { type: 'callout', variant: 'tip', text: `Hands-on: ${text}` };
}

function introWhy(whyParagraph, fileWhat, code, handsOn) {
  return [
    { type: 'p', text: whyParagraph },
    { type: 'h2', text: 'What file does the work?' },
    { type: 'p', text: fileWhat },
    { type: 'h2', text: 'Starter code' },
    { type: 'pre', code },
    practice(handsOn),
  ];
}

export const nextjsLabLectures = [
  // ----- Phase 1 — Introduction -----
  {
    slug: 'lab-p1-l01-what-is-nextjs',
    phase: 'Phase 1 — Introduction',
    displayLecture: 1,
    title: 'What is Next.js?',
    lead: 'Next.js is React with batteries: routing, HTML-first delivery, and backend helpers in one repo.',
    blocks: introWhy(
      'You already know React paints UI. Next.js wraps React so URLs, layouts, and server work feel guided instead of DIY.',
      'You still write components. The special folders live under app/. Your first screen is usually app/page.tsx next to app/layout.tsx.',
      '// app/page.tsx — becomes the "/" route\nexport default function Page() {\n  return <main><h1>Hello from Next.js</h1></main>;\n}',
      'Create a Next app with create-next-app, open app/page.tsx, change the heading to your name.',
    ),
  },
  {
    slug: 'lab-p1-l02-why-nextjs',
    phase: 'Phase 1 — Introduction',
    displayLecture: 2,
    title: 'Why Next.js?',
    lead: 'It removes four recurring pains: hand-built routes, empty first HTML, giant client bundles, and a second server just for APIs.',
    blocks: teach({
      topics: [
        'File-based routes mean the folder tree is the map—no central routes array to drift out of date.',
        'Server rendering sends real words to the browser fast—great for humans and search previews.',
        'Server components keep reads off the client bundle—less JavaScript on phones.',
        'Route handlers live beside pages—one deploy, one mental model.',
      ],
      realLife: [
        'A school club page shared on WhatsApp needs a real title in the first HTML.',
        'A bake-sale site should load fast on cellular without shipping a huge SPA shell.',
      ],
      code:
        '// You still export React components.\n// Next decides when they run: mostly on the server first.\nexport default function WhyPage() {\n  return <p>Less glue code than wiring React Router + Express by hand.</p>;\n}',
      extraBlocks: [practice('List one pain from a plain React SPA that Next.js reduces for your own project idea.')],
    }),
  },
  {
    slug: 'lab-p1-l03-react-vs-nextjs',
    phase: 'Phase 1 — Introduction',
    displayLecture: 3,
    title: 'React vs Next.js',
    lead: 'React is the view library. Next.js is the framework that picks folders, layouts, and server boundaries for you.',
    blocks: teach({
      topics: [
        'React: components, state, events. Next: adds routing conventions, metadata, image helpers, and server actions.',
        'You can bring React skills unchanged; you learn new file names and a few new imports (Link, Image).',
        'Next still hydrates interactive islands—client components behave like classic React.',
      ],
      realLife: [
        'React alone is like ingredients. Next is the recipe card plus oven timers for a class kitchen.',
      ],
      code:
        "// React-only mental model:\n// <BrowserRouter><Routes><Route path='/about' element={<About/>}/></Routes>\n\n// Next App Router mental model:\n// app/about/page.tsx exports About for you",
      extraBlocks: [
        {
          type: 'table',
          headers: ['Need', 'Plain React habit', 'Next habit'],
          rows: [
            ['New page', 'Add <Route>', 'Add app/.../page.tsx'],
            ['Shared chrome', 'Wrap routes manually', 'Use layout.tsx'],
            ['JSON endpoint', 'Spin Express', 'Add app/api/.../route.ts'],
          ],
        },
        practice('Sketch your future site as a tree of folders under app/. No code yet—just names.'),
      ],
    }),
  },
  {
    slug: 'lab-p1-l04-app-router',
    phase: 'Phase 1 — Introduction',
    displayLecture: 4,
    title: 'Understanding App Router',
    lead: 'Think: URL segments are folders. Special filenames activate features (page, layout, loading, error).',
    blocks: [
      { type: 'p', text: 'Why: students get lost when URLs and files disagree. App Router keeps them aligned so you can “read the URL from the folder names.”' },
      { type: 'h2', text: 'Visual map' },
      {
        type: 'pre',
        code:
          'app/\n  layout.tsx      ← wraps everything (html/body once)\n  page.tsx         ← "/"\n  blog/\n    layout.tsx     ← wraps only /blog/*\n    page.tsx       ← "/blog"\n    [slug]/\n      page.tsx     ← "/blog/:slug"',
      },
      { type: 'h2', text: 'Rules in plain words' },
      {
        type: 'ul',
        items: [
          'page.tsx is the screen for that segment.',
          'layout.tsx wraps all deeper routes without remounting shared UI.',
          'loading.tsx and error.tsx are siblings that catch slow or broken segments.',
        ],
      },
      practice('Draw arrows from three URLs to the three matching files above.'),
    ],
  },
  {
    slug: 'lab-p1-l05-project-structure',
    phase: 'Phase 1 — Introduction',
    displayLecture: 5,
    title: 'Project structure',
    lead: 'Know the four zones: app routes, public assets, styles, and config at the root.',
    blocks: teach({
      topics: [
        'app/ — routes, layouts, route handlers live here.',
        'public/ — static files served at the root URL (/logo.svg).',
        'next.config.* — build and routing switches.',
        'package.json — scripts: dev, build, start.',
      ],
      realLife: [
        'A yearbook team drops scanned photos into public/photos/... and links them with next/image later.',
      ],
      code:
        'my-site/\n  app/\n    layout.tsx\n    page.tsx\n    globals.css\n  public/\n    robots.txt\n  package.json\n  next.config.mjs',
      extraBlocks: [practice('Open each top folder in a fresh create-next-app project and write one sentence about what you found.')],
    }),
  },

  // ----- Phase 2 — First Practical App -----
  {
    slug: 'lab-p2-l01-page-tsx',
    phase: 'Phase 2 — First practical app',
    displayLecture: 6,
    title: 'Create page.tsx',
    lead: 'A page file is just a default export function returning JSX. The path sets the URL.',
    blocks: teach({
      topics: [
        'Default export component name is flexible; the filename page.tsx matters.',
        'You can colocate small helpers in the same folder.',
        'Keep pages thin—push big UI into components/ when it grows.',
      ],
      realLife: ['A /about page for a robotics club: one file, one story.'],
      code:
        '// app/about/page.tsx → /about\nexport default function AboutPage() {\n  return (\n    <main className="prose">\n      <h1>About our team</h1>\n      <p>We meet Tuesdays after school.</p>\n    </main>\n  );\n}',
      extraBlocks: [practice('Add app/about/page.tsx and visit /about in the browser.')],
    }),
  },
  {
    slug: 'lab-p2-l02-layout-tsx',
    phase: 'Phase 2 — First practical app',
    displayLecture: 7,
    title: 'Create layout.tsx',
    lead: 'Layouts stop you from copy-pasting the same nav on every page.',
    blocks: teach({
      topics: [
        'layout.tsx receives children and must return <html> only at the root.',
        'Nested layouts add sidebars for a section (e.g., /dashboard only).',
        'Shared headers persist while children swap—smooth navigation.',
      ],
      realLife: ['Library site: same top bar on catalog, hours, and events pages.'],
      code:
        '// app/layout.tsx (root)\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang="en">\n      <body>\n        <header>Reactor High Library</header>\n        {children}\n      </body>\n    </html>\n  );\n}',
      extraBlocks: [practice('Move your site title into the root layout and delete duplicate headings from two pages.')],
    }),
  },
  {
    slug: 'lab-p2-l03-link',
    phase: 'Phase 2 — First practical app',
    displayLecture: 8,
    title: 'Navigation with Link',
    lead: 'Use next/link for in-app hops—no full reload, prefetch keeps clicks snappy.',
    blocks: teach({
      topics: [
        'Import Link from "next/link"; href matches folder paths.',
        'Style the active link with usePathname in a tiny client nav if needed.',
        'External sites still use <a href="https://..."> with rel security attrs.',
      ],
      realLife: ['Club navbar: Home, Schedule, Photos—three Link components.'],
      code:
        "import Link from 'next/link';\n\nexport function MainNav() {\n  return (\n    <nav style={{ display: 'flex', gap: 12 }}>\n      <Link href=\"/\">Home</Link>\n      <Link href=\"/about\">About</Link>\n    </nav>\n  );\n}",
      extraBlocks: [practice('Add MainNav to your root layout above {children}.')],
    }),
  },
  {
    slug: 'lab-p2-l04-nested-routes',
    phase: 'Phase 2 — First practical app',
    displayLecture: 9,
    title: 'Nested routes',
    lead: 'Each extra folder is another URL segment. Parents can have their own layout and page.',
    blocks: teach({
      topics: [
        'app/shop/page.tsx → /shop',
        'app/shop/cart/page.tsx → /shop/cart',
        'Optional route groups use parentheses to tidy files without changing URLs.',
      ],
      realLife: ['Sports site: /teams/roster nested under /teams.'],
      code:
        '// app/teams/page.tsx\nexport default function TeamsIndex() {\n  return <p>Pick a team.</p>;\n}\n\n// app/teams/roster/page.tsx\nexport default function RosterPage() {\n  return <p>Roster goes here.</p>;\n}',
      extraBlocks: [practice('Create /events and /events/past with two files.')],
    }),
  },
  {
    slug: 'lab-p2-l05-dynamic-routes',
    phase: 'Phase 2 — First practical app',
    displayLecture: 10,
    title: 'Dynamic routes',
    lead: 'Square brackets mean “this URL piece is a variable.” One template, many pages.',
    blocks: teach({
      topics: [
        'app/posts/[slug]/page.tsx reads params.slug.',
        'generateStaticParams can prebuild known slugs at build time.',
        'Use notFound() when a slug is missing from your data source.',
      ],
      realLife: ['Student portfolios at /students/ava, /students/jules with one file.'],
      code:
        '// app/posts/[slug]/page.tsx\ntype Props = { params: { slug: string } };\n\nexport default function PostPage({ params }: Props) {\n  return (\n    <article>\n      <h1>Post</h1>\n      <p>Slug: {params.slug}</p>\n    </article>\n  );\n}',
      extraBlocks: [practice('Print the slug, then replace the paragraph with real markdown or DB content later.')],
    }),
  },
  {
    slug: 'lab-p2-l06-loading-ui',
    phase: 'Phase 2 — First practical app',
    displayLecture: 11,
    title: 'Loading UI',
    lead: 'loading.tsx is a promise to users: “work is happening” instead of a blank screen.',
    blocks: teach({
      topics: [
        'Place loading.tsx beside page.tsx in the same folder.',
        'Instant skeletons improve perceived speed for slow fetches.',
        'Combine with Suspense for smaller islands if one widget is slow.',
      ],
      realLife: ['Cafeteria menu shows grey cards while prices fetch.'],
      code:
        '// app/menu/loading.tsx\nexport default function Loading() {\n  return <p>Loading today’s menu…</p>;\n}',
      extraBlocks: [practice('Add a loading.tsx under a route that awaits a slow fake delay.')],
    }),
  },
  {
    slug: 'lab-p2-l07-error-handling',
    phase: 'Phase 2 — First practical app',
    displayLecture: 12,
    title: 'Error handling',
    lead: 'error.tsx catches runtime surprises for a route segment and offers a reset button.',
    blocks: teach({
      topics: [
        'error.tsx must be a client component so it can call reset().',
        'not-found.tsx handles missing records—friendlier than a stack trace.',
        'Throw in server components or call notFound() when data is absent.',
      ],
      realLife: ['Fundraising page fails: show support email and retry.'],
      code:
        "// app/dashboard/error.tsx\n'use client';\n\nexport default function Error({ reset }: { reset: () => void }) {\n  return (\n    <div>\n      <h2>Something broke</h2>\n      <button type=\"button\" onClick={reset}>Try again</button>\n    </div>\n  );\n}",
      extraBlocks: [practice('Pair error.tsx with a page that throws when a query param is "boom".')],
    }),
  },

  // ----- Phase 3 — Components -----
  {
    slug: 'lab-p3-l01-server-components',
    phase: 'Phase 3 — Components',
    displayLecture: 13,
    title: 'Server Components',
    lead: 'Default in app/: great for static headings and data reads without shipping secrets to the browser.',
    blocks: teach({
      topics: [
        'No useState, no window, no browser APIs—those belong to client components.',
        'Can be async and await fetch directly.',
        'Compose by importing client leaves where interactivity is needed.',
      ],
      realLife: ['Report card heading rendered privately on the server.'],
      code:
        '// ServerComponent.tsx (no "use client")\nexport default async function Profile() {\n  const name = "Avery"; // pretend await fetchProfile()\n  return <h1>{name}</h1>;\n}',
      extraBlocks: [practice('Move a static hero into a server file; keep buttons separate.')],
    }),
  },
  {
    slug: 'lab-p3-l02-client-components',
    phase: 'Phase 3 — Components',
    displayLecture: 14,
    title: 'Client Components',
    lead: 'Any hook or event handler needs the client bundle—mark only those files.',
    blocks: teach({
      topics: [
        'Add "use client" at the very top of the file that uses hooks.',
        'Keep client files small to protect bundle size.',
        'Pass serializable props from server parents to client children.',
      ],
      realLife: ['Like counter, theme toggle, or drag-and-drop list.'],
      code:
        "'use client';\nimport { useState } from 'react';\n\nexport function LikeButton() {\n  const [likes, setLikes] = useState(0);\n  return <button type=\"button\" onClick={() => setLikes((n) => n + 1)}>Likes: {likes}</button>;\n}",
      extraBlocks: [practice('Create LikeButton and render it inside a server page.')],
    }),
  },
  {
    slug: 'lab-p3-l03-use-client',
    phase: 'Phase 3 — Components',
    displayLecture: 15,
    title: '"use client"',
    lead: 'This string is the boundary marker: above it runs on the server tree unless the file is client.',
    blocks: teach({
      topics: [
        'Place it once per file—first line, before imports per team style.',
        'Do not sprinkle it everywhere; lift static reads to the server parent.',
        'Client components can import other client components freely.',
      ],
      realLife: ['A poll widget file is client; the page that shows poll results stays server.'],
      code: "'use client';\n\nconsole.log('This log appears in the browser console for this bundle');",
      extraBlocks: [practice('Remove "use client" temporarily and read the compiler error—note what it lists.')],
    }),
  },
  {
    slug: 'lab-p3-l04-props',
    phase: 'Phase 3 — Components',
    displayLecture: 16,
    title: 'Props',
    lead: 'Props are inputs from parent to child—still one-way in Next.',
    blocks: teach({
      topics: [
        'Define a Props type for clarity.',
        'Avoid passing huge objects if only two fields are needed.',
        'Server parents can await data, then pass plain values down.',
      ],
      realLife: ['Card title and subtitle passed into <InfoCard />.'],
      code:
        'type Props = { title: string; subtitle?: string };\n\nexport function InfoCard({ title, subtitle }: Props) {\n  return (\n    <section>\n      <h2>{title}</h2>\n      {subtitle ? <p>{subtitle}</p> : null}\n    </section>\n  );\n}',
      extraBlocks: [practice('Use InfoCard twice with different titles from a server page.')],
    }),
  },
  {
    slug: 'lab-p3-l05-reusable-components',
    phase: 'Phase 3 — Components',
    displayLecture: 17,
    title: 'Reusable components',
    lead: 'If you copy-paste JSX twice, extract a component with props.',
    blocks: teach({
      topics: [
        'Colocate in components/ or next to the route if only one feature uses it.',
        'children prop is perfect for wrappers.',
        'Name files after the component export for searchability.',
      ],
      realLife: ['Badge used on roster, schedule, and announcements.'],
      code:
        'export function Badge({ label }: { label: string }) {\n  return <span className="badge">{label}</span>;\n}',
      extraBlocks: [practice('Extract a PageHeader used on three routes.')],
    }),
  },
  {
    slug: 'lab-p3-l06-architecture',
    phase: 'Phase 3 — Components',
    displayLecture: 18,
    title: 'Component architecture',
    lead: 'Think in layers: route files orchestrate; components render; lib/ holds pure helpers.',
    blocks: teach({
      topics: [
        'Routes stay thin: fetch or delegate to lib/data.ts.',
        'UI components avoid fetch—receive data via props.',
        'Keep side effects (analytics, subscriptions) inside client leaves.',
      ],
      realLife: ['Science fair: data loaders separate from poster cards.'],
      code:
        '// app/projects/page.tsx (shape)\nimport { ProjectGrid } from "@/components/ProjectGrid";\nimport { listProjects } from "@/lib/projects";\n\nexport default async function Page() {\n  const projects = await listProjects();\n  return <ProjectGrid projects={projects} />;\n}',
      extraBlocks: [practice('Create lib/projects.ts with a fake array and import it from a page.')],
    }),
  },

  // ----- Phase 4 — Data fetching -----
  {
    slug: 'lab-p4-l01-fetch',
    phase: 'Phase 4 — Data fetching',
    displayLecture: 19,
    title: 'fetch()',
    lead: 'On the server you can await fetch like normal async code—no useEffect waterfall.',
    blocks: teach({
      topics: [
        'Use absolute URLs or NEXT_PUBLIC only when needed—prefer internal APIs or DB calls.',
        'next: { revalidate: n } sets a freshness window.',
        'Handle non-OK responses with try/catch or guards.',
      ],
      realLife: ['Lunch menu pulled once per minute from a school API.'],
      code:
        'export default async function MenuPage() {\n  const res = await fetch("https://example.com/menu.json", { next: { revalidate: 60 } });\n  const data = await res.json();\n  return <pre>{JSON.stringify(data, null, 2)}</pre>;\n}',
      extraBlocks: [practice('Swap the URL for a mock JSON file in public/ and fetch it with a relative path.')],
    }),
  },
  {
    slug: 'lab-p4-l02-async-server',
    phase: 'Phase 4 — Data fetching',
    displayLecture: 20,
    title: 'Async server components',
    lead: 'Mark the page async, await your data, return JSX—no loading state hook required (loading.tsx still helps UX).',
    blocks: teach({
      topics: [
        'Parallel awaits speed up independent sources (Promise.all).',
        'Keep transforms pure in helper functions for tests.',
        'Never leak secrets—tokens stay on the server.',
      ],
      realLife: ['Dashboard combines announcements + calendar in one server render.'],
      code:
        'async function loadAnnouncements() {\n  return [{ id: "1", text: "Club fair Friday" }];\n}\n\nexport default async function Home() {\n  const items = await loadAnnouncements();\n  return (\n    <ul>\n      {items.map((a) => (\n        <li key={a.id}>{a.text}</li>\n      ))}\n    </ul>\n  );\n}',
      extraBlocks: [practice('Add a second loader and Promise.all both results.')],
    }),
  },
  {
    slug: 'lab-p4-l03-api-requests',
    phase: 'Phase 4 — Data fetching',
    displayLecture: 21,
    title: 'API requests',
    lead: 'You can call route handlers from the client with fetch, but prefer server reads when possible.',
    blocks: teach({
      topics: [
        'Server components call your app/api routes or databases directly—skip the HTTP hop when you can.',
        'Client fetch is fine for live search, polling, or browser-only APIs.',
        'Always validate JSON before trusting it.',
      ],
      realLife: ['Live bus map polls every 30s from the client.'],
      code:
        "// Client component sketch\n'use client';\nimport { useEffect, useState } from 'react';\n\nexport function LiveBoard() {\n  const [msg, setMsg] = useState('loading…');\n  useEffect(() => {\n    fetch('/api/ping').then((r) => r.json()).then((d) => setMsg(d.message));\n  }, []);\n  return <p>{msg}</p>;\n}",
      extraBlocks: [practice('Create GET /api/ping returning JSON and read it from a client widget.')],
    }),
  },
  {
    slug: 'lab-p4-l04-loading-states',
    phase: 'Phase 4 — Data fetching',
    displayLecture: 22,
    title: 'Loading states',
    lead: 'loading.tsx covers route segments; Suspense covers smaller islands.',
    blocks: teach({
      topics: [
        'Skeletons beat spinners for content-heavy pages.',
        'Streaming sends HTML in chunks—pair with Suspense boundaries.',
        'Avoid flashing empty arrays—distinguish loading vs empty results.',
      ],
      realLife: ['Library catalog shows grey rows while results stream.'],
      code:
        "import { Suspense } from 'react';\n\nasync function SlowList() {\n  await new Promise((r) => setTimeout(r, 800));\n  return <ul><li>Book A</li><li>Book B</li></ul>;\n}\n\nexport default function Page() {\n  return (\n    <Suspense fallback={<p>Fetching books…</p>}>\n      <SlowList />\n    </Suspense>\n  );\n}",
      extraBlocks: [practice('Replace the fallback with three grey skeleton rows.')],
    }),
  },
  {
    slug: 'lab-p4-l05-error-states',
    phase: 'Phase 4 — Data fetching',
    displayLecture: 23,
    title: 'Error states',
    lead: 'Plan for bad networks and 404s—friendly copy beats a white screen.',
    blocks: teach({
      topics: [
        'Wrap risky awaits in try/catch in server components.',
        'Use notFound() when a record is missing.',
        'Log details on the server; show simple text to users.',
      ],
      realLife: ['Missing yearbook page shows cute 404 with link home.'],
      code:
        'import { notFound } from "next/navigation";\n\nexport default async function StudentPage({ params }: { params: { id: string } }) {\n  const student = await Promise.resolve(null); // pretend lookup\n  if (!student) notFound();\n  return <p>Student</p>;\n}',
      extraBlocks: [practice('Add not-found.tsx beside the route with helpful links.')],
    }),
  },
  {
    slug: 'lab-p4-l06-caching-basics',
    phase: 'Phase 4 — Data fetching',
    displayLecture: 24,
    title: 'Caching basics',
    lead: 'Next caches fetch by default—tell it how fresh your data must be.',
    blocks: teach({
      topics: [
        'revalidate sets time-based freshness.',
        'cache: "no-store" forces work every request—use for private dashboards.',
        'After mutations, revalidatePath or revalidateTag refreshes lists.',
      ],
      realLife: ['Announcements cached 60s; bell schedule cached for a day.'],
      code:
        'await fetch("https://api.example.com/announcements", {\n  next: { revalidate: 60 },\n});',
      extraBlocks: [practice('Toggle between revalidate and no-store and watch Network tab timing in dev.')],
    }),
  },

  // ----- Phase 5 — Backend features -----
  {
    slug: 'lab-p5-l01-route-handlers',
    phase: 'Phase 5 — Backend features',
    displayLecture: 25,
    title: 'Route handlers',
    lead: 'route.ts under app/api exports GET/POST—same repo as your UI.',
    blocks: teach({
      topics: [
        'Return Response.json({...}) for JSON.',
        'Validate bodies before touching a database.',
        'Keep handlers thin—call services in lib/.',
      ],
      realLife: ['RSVP endpoint for a club event form.'],
      code:
        '// app/api/rsvp/route.ts\nexport async function POST(request: Request) {\n  const body = await request.json();\n  return Response.json({ ok: true, received: body });\n}',
      extraBlocks: [practice('Add GET that lists fake RSVPs from an in-memory array (dev only).')],
    }),
  },
  {
    slug: 'lab-p5-l02-api-routes',
    phase: 'Phase 5 — Backend features',
    displayLecture: 26,
    title: 'API routes',
    lead: 'Same as route handlers—"API routes" is the older Pages Router name; App Router uses app/api/.../route.ts.',
    blocks: teach({
      topics: [
        'Dynamic API segments use [id] folders too.',
        'CORS headers are your job if external sites call the API.',
        'Prefer server actions for same-origin forms when possible.',
      ],
      realLife: ['Mobile app hits /api/events while the web UI uses server components.'],
      code:
        '// app/api/events/[id]/route.ts\nexport async function GET(_: Request, { params }: { params: { id: string } }) {\n  return Response.json({ id: params.id, title: "Mock event" });\n}',
      extraBlocks: [practice('Call the dynamic route from curl or Thunder Client.')],
    }),
  },
  {
    slug: 'lab-p5-l03-forms',
    phase: 'Phase 5 — Backend features',
    displayLecture: 27,
    title: 'Forms',
    lead: 'Forms post data; in Next you can post to a route handler or a server action.',
    blocks: teach({
      topics: [
        'Controlled inputs need client components; plain forms can stay server-first.',
        'Always label inputs and show validation errors near fields.',
        'Disable submit while pending to prevent double posts.',
      ],
      realLife: ['Volunteer signup: name, email, shift preference.'],
      code:
        'export default function SignupForm() {\n  return (\n    <form method="post" action="/api/signup">\n      <label>\n        Name\n        <input name="name" required />\n      </label>\n      <button type="submit">Join</button>\n    </form>\n  );\n}',
      extraBlocks: [practice('Switch the form to call a server action instead of a raw action URL.')],
    }),
  },
  {
    slug: 'lab-p5-l04-server-actions',
    phase: 'Phase 5 — Backend features',
    displayLecture: 28,
    title: 'Server Actions',
    lead: '"use server" functions run on the server when triggered from forms or transitions.',
    blocks: teach({
      topics: [
        'Great for mutations without writing fetch boilerplate.',
        'Revalidate after writes so lists refresh.',
        'Validate every field—never trust the browser.',
      ],
      realLife: ['Comment wall: textarea + submit appends a row.'],
      code:
        "// actions.ts\n'use server';\n\nexport async function addNote(formData: FormData) {\n  const text = String(formData.get('text') ?? '').trim();\n  if (!text) return;\n  // save...\n}",
      extraBlocks: [
        {
          type: 'pre',
          code:
            "import { addNote } from './actions';\n\nexport default function Page() {\n  return (\n    <form action={addNote}>\n      <textarea name=\"text\" />\n      <button type=\"submit\">Save</button>\n    </form>\n  );\n}",
        },
        practice('Log the text on the server, then swap logging for a DB insert when ready.'),
      ],
    }),
  },
  {
    slug: 'lab-p5-l05-database-basics',
    phase: 'Phase 5 — Backend features',
    displayLecture: 29,
    title: 'Database basics',
    lead: 'React state resets; databases remember. Next talks to them from the server only.',
    blocks: teach({
      topics: [
        'Pick Postgres + Prisma for a common typed stack.',
        'Migrations evolve schema safely—never edit prod by hand.',
        'Connection pooling matters on serverless hosts.',
      ],
      realLife: ['Library checkout history must survive browser refresh.'],
      code:
        '// prisma/schema.prisma (snippet)\nmodel Post {\n  id        Int     @id @default(autoincrement())\n  title     String\n  content   String\n  createdAt DateTime @default(now())\n}',
      extraBlocks: [practice('Draw User → Page → Server action → DB on paper for your blog idea.')],
    }),
  },

  // ----- Phase 6 — Real project (blog) -----
  {
    slug: 'lab-p6-l01-blog-plan',
    phase: 'Phase 6 — Real project (blog)',
    displayLecture: 30,
    title: 'Blog plan and folders',
    lead: 'Start with URLs you want, then create matching folders—blog stays predictable.',
    blocks: teach({
      topics: [
        'Routes: /blog (list), /blog/[slug] (detail), maybe /blog/new (create).',
        'Shared blog chrome? Add app/blog/layout.tsx.',
        'Data shape: title, slug, excerpt, publishedAt.',
      ],
      realLife: ['School newspaper online: editors need list + article + submit flow.'],
      code:
        'app/\n  blog/\n    layout.tsx\n    page.tsx          // list\n    [slug]/\n      page.tsx      // detail\n    new/\n      page.tsx      // optional create form',
      extraBlocks: [practice('Scaffold empty files and confirm each URL renders placeholder text.')],
    }),
  },
  {
    slug: 'lab-p6-l02-post-list',
    phase: 'Phase 6 — Real project (blog)',
    displayLecture: 31,
    title: 'Post list page',
    lead: 'Fetch (or read) all posts on the server and map to cards.',
    blocks: teach({
      topics: [
        'Keep the query in lib/posts.ts for reuse.',
        'Link each card to /blog/[slug] with next/link.',
        'Handle zero posts with a friendly empty state.',
      ],
      realLife: ['Club updates page sorted newest first.'],
      code:
        'import Link from "next/link";\nimport { allPosts } from "@/lib/posts";\n\nexport default async function BlogIndex() {\n  const posts = await allPosts();\n  return (\n    <ul>\n      {posts.map((p) => (\n        <li key={p.slug}>\n          <Link href={`/blog/${p.slug}`}>{p.title}</Link>\n        </li>\n      ))}\n    </ul>\n  );\n}',
      extraBlocks: [practice('Seed three fake posts and verify links navigate.')],
    }),
  },
  {
    slug: 'lab-p6-l03-dynamic-post',
    phase: 'Phase 6 — Real project (blog)',
    displayLecture: 32,
    title: 'Dynamic post page',
    lead: 'One template renders every article by slug.',
    blocks: teach({
      topics: [
        'Load by params.slug; call notFound() if missing.',
        'Render markdown or rich text safely—sanitize untrusted HTML.',
        'Add generateStaticParams when slugs are known at build time.',
      ],
      realLife: ['Each weekly newsletter issue shares the same layout.'],
      code:
        'import { notFound } from "next/navigation";\nimport { getPost } from "@/lib/posts";\n\ntype Props = { params: { slug: string } };\n\nexport default async function BlogPost({ params }: Props) {\n  const post = await getPost(params.slug);\n  if (!post) notFound();\n  return (\n    <article>\n      <h1>{post.title}</h1>\n      <p>{post.content}</p>\n    </article>\n  );\n}',
      extraBlocks: [practice('Add published date under the title.')],
    }),
  },
  {
    slug: 'lab-p6-l04-layout-nav',
    phase: 'Phase 6 — Real project (blog)',
    displayLecture: 33,
    title: 'Layout and navigation',
    lead: 'Blog-only nav stays inside app/blog/layout.tsx so marketing pages stay clean.',
    blocks: teach({
      topics: [
        'Put Breadcrumbs or section tabs in the blog layout.',
        'Keep root layout for global fonts and analytics.',
        'Highlight active slug with usePathname in a small client nav if needed.',
      ],
      realLife: ['Magazine: section tabs for News, Sports, Arts without touching home layout.'],
      code:
        '// app/blog/layout.tsx\nimport type { ReactNode } from "react";\n\nexport default function BlogLayout({ children }: { children: ReactNode }) {\n  return (\n    <section>\n      <header>\n        <p>School Blog</p>\n      </header>\n      {children}\n    </section>\n  );\n}',
      extraBlocks: [practice('Add a Link back to /blog on the detail template.')],
    }),
  },
  {
    slug: 'lab-p6-l05-new-post',
    phase: 'Phase 6 — Real project (blog)',
    displayLecture: 34,
    title: 'New post form + save path',
    lead: 'Use a server action or POST handler—validate, write, revalidate list.',
    blocks: teach({
      topics: [
        'Start with a simple title + body form.',
        'Slug can be generated from title (kebab-case).',
        'After save, revalidatePath("/blog") so the index updates.',
      ],
      realLife: ['Teacher approves posts—add a published flag later.'],
      code:
        "// actions.ts\n'use server';\nimport { revalidatePath } from 'next/cache';\n\nexport async function createPost(formData: FormData) {\n  const title = String(formData.get('title') ?? '').trim();\n  if (!title) return;\n  // save to db...\n  revalidatePath('/blog');\n}",
      extraBlocks: [practice('Echo submitted data in the server log before you wire a real database.')],
    }),
  },
  {
    slug: 'lab-p6-l06-polish',
    phase: 'Phase 6 — Real project (blog)',
    displayLecture: 35,
    title: 'Polish: loading, errors, metadata',
    lead: 'Ship like a mentor would: skeletons, friendly errors, and shareable titles.',
    blocks: teach({
      topics: [
        'Add loading.tsx for /blog and error.tsx for surprises.',
        'export const metadata on list/detail for SEO.',
        'Use next/image for cover photos when you add them.',
      ],
      realLife: ['Fundraiser article looks good when pasted into chat apps.'],
      code:
        '// app/blog/page.tsx\nexport const metadata = {\n  title: "Riverdale Student Blog",\n  description: "Stories, updates, and club news.",\n};',
      extraBlocks: [practice('Run Lighthouse on /blog and note one improvement you will tackle next.')],
    }),
  },
];

export function getNextjsLabLecture(slug) {
  return nextjsLabLectures.find((l) => l.slug === slug);
}

export function getNextjsLabAdjacent(slug) {
  const index = nextjsLabLectures.findIndex((l) => l.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: nextjsLabLectures[index - 1] ?? null,
    next: nextjsLabLectures[index + 1] ?? null,
  };
}
