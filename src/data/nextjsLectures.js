/**
 * Next.js syllabus (App Router style). Syllabus lecture numbers 3–29 map to display lectures 1–27.
 * Each lesson: main ideas (bullets) → real-life examples → code → optional extras.
 * Where Next.js fixes a common plain-React pain, we say so in plain words.
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
  return { type: 'callout', variant: 'tip', text: `Practice / project: ${text}` };
}

const compareTable = {
  type: 'table',
  headers: ['Topic', 'Plain React pain', 'Next.js helps by'],
  rows: [
    ['Routing', 'You wire React Router paths by hand', 'File folders map to URLs for you'],
    ['SEO / Google', 'First HTML can look empty until JS runs', 'Server can send readable HTML first'],
    ['Big first download', 'One large client bundle is easy to grow', 'Code splitting + server work shrink JS'],
    ['Backend / API', 'You often start a second Node/Express project', 'Route handlers live next to pages'],
    ['Team folders', 'Everyone picks a different structure', 'app/, layouts, and routes are shared habits'],
  ],
};

const l1Blocks = [
  {
    type: 'p',
    text: 'You still write React in Next.js. Next.js is the box around React that fixes common “plain React app” headaches: routing, first-page HTML, heavy JS, and missing API glue.',
  },
  { type: 'h2', text: 'Main ideas' },
  {
    type: 'ul',
    items: [
      'Plain React does not ship a router—teams add React Router and keep a central route list. Next.js uses file-based routes so each page file has a clear URL.',
      'Many React SPAs show a thin HTML shell first; Google must wait for JavaScript. Next.js can render HTML on the server so bots and humans see words sooner.',
      'Huge client-only bundles feel slow on phones. Next.js splits code by route and can run React on the server (server components) so less JS ships to the browser.',
      'React is mostly UI; APIs often live in another repo. Next.js route handlers let you return JSON from the same project as your pages.',
      'Big React codebases sprawl. Next.js gives predictable folders (app/, layouts, api routes) so new teammates know where to look.',
      'Words you will hear: CSR (all in the browser), SSR (HTML from the server each request), SSG (HTML pre-built at deploy time).',
    ],
  },
  { type: 'h2', text: 'Real-life examples' },
  {
    type: 'ul',
    items: [
      'A bakery wants “best cupcakes in Dallas” on Google—an empty first shell hurts; server HTML helps the shop show real text fast.',
      'A school club page is shared on WhatsApp—social previews need real titles; metadata + server HTML support that story.',
      'A news site spikes during lunch—smaller JS and cached pages keep the site from feeling stuck.',
    ],
  },
  { type: 'h2', text: 'Code example' },
  {
    type: 'pre',
    code:
      "// app/about/page.tsx — this file becomes the /about page\n// (In plain React you would also wire <Route path='/about' ...> yourself.)\nexport default function AboutPage() {\n  return (\n    <main>\n      <h1>About our class project</h1>\n      <p>This HTML can be rendered on the server first.</p>\n    </main>\n  );\n}",
  },
  { type: 'h2', text: 'React vs Next.js (quick compare)' },
  compareTable,
  { type: 'h2', text: 'Three ways HTML reaches the browser' },
  {
    type: 'ul',
    items: [
      'CSR — the browser downloads JavaScript, then React paints. Classic create-react-app style.',
      'SSR — the server builds HTML for this visit, then React hydrates. Good when data changes often.',
      'SSG — HTML is built at build time. Great for blogs, docs, and landing pages that change on a schedule.',
    ],
  },
  {
    type: 'callout',
    variant: 'tip',
    text: 'Teacher tip: when a topic fixes a React-only problem, say it out loud in your own words—routing tables, empty shells, or a second API server.',
  },
];

export const nextjsLectures = [
  {
    slug: 'nx-l01-why-nextjs',
    phase: 'Phase 1 — Why Next.js?',
    syllabusLecture: 3,
    displayLecture: 1,
    title: 'Why Next.js?',
    lead: 'Bullets first, then real life, then code—same rhythm as every other lesson.',
    blocks: l1Blocks,
  },
  {
    slug: 'nx-l02-install-tools',
    phase: 'Phase 2 — Environment setup',
    syllabusLecture: 4,
    displayLecture: 2,
    title: 'Install development tools',
    lead: 'Tools are like a pencil case: boring to buy, impossible to work without.',
    blocks: teach({
      topics: [
        'Node.js runs JavaScript on your laptop (plain React needs a bundler/dev server too—Node powers those tools).',
        'npm installs libraries; it ships with Node.',
        'VS Code (or any editor) is where you type; extensions add spell-check for code.',
        'Git saves checkpoints; GitHub stores them online.',
      ],
      realLife: [
        'A student saves weekly homework on GitHub so the teacher can see history.',
        'Two friends build a club site—they pass the same repo link instead of emailing zip files.',
        'A small shop hires a helper—GitHub is the shared notebook.',
      ],
      code: '# In a terminal (Mac / Windows / Linux)\nnode -v    # should print a version number\nnpm -v     # should print a version number',
      extraBlocks: [
        { type: 'h3', text: 'Check Git' },
        { type: 'pre', code: 'git --version' },
        practice('Make a GitHub account and push a README from your machine.'),
      ],
    }),
  },
  {
    slug: 'nx-l03-first-app',
    phase: 'Phase 2 — Environment setup',
    syllabusLecture: 5,
    displayLecture: 3,
    title: 'Create your first Next.js app',
    lead: 'One command scaffolds pages, scripts, and a dev server—less manual wiring than a bare Vite+React setup.',
    blocks: teach({
      topics: [
        'create-next-app asks friendly questions and builds a folder for you.',
        'package.json lists scripts like dev, build, start.',
        'npm run dev starts a local server—usually http://localhost:3000.',
        'app/page.tsx is the home screen in the App Router.',
      ],
      realLife: [
        'A teen makes a “about me” site for a college application in one evening.',
        'A teacher demo needs the same starter every class—scaffold once, reuse.',
      ],
      code: 'npx create-next-app@latest my-site\ncd my-site\nnpm run dev\n# open http://localhost:3000 in the browser',
      extraBlocks: [
        { type: 'h3', text: 'Scripts you will run often' },
        { type: 'pre', code: '// inside package.json (simplified)\n{\n  "scripts": {\n    "dev": "next dev",\n    "build": "next build",\n    "start": "next start"\n  }\n}' },
        practice('Change the home page text to your name and one hobby.'),
      ],
    }),
  },
  {
    slug: 'nx-l04-app-router',
    phase: 'Phase 3 — App Router',
    syllabusLecture: 6,
    displayLecture: 4,
    title: 'Understanding the App Router',
    lead: 'Folders replace giant route config files—this directly fixes the “central routes file” pain from plain React + React Router.',
    blocks: teach({
      topics: [
        'The app directory is where routes live.',
        'page.tsx is the screen for that URL.',
        'layout.tsx wraps children with shared UI (nav, fonts, body class).',
        'Nested folders make nested URLs: app/shop/cart/page.tsx → /shop/cart.',
        'Route groups use parentheses (marketing) to tidy files without changing the URL.',
      ],
      realLife: [
        'A yearbook site: /, /staff, /photos—each folder is one page file.',
        'A store: /products and /cart live side by side in clear folders.',
      ],
      code:
        '// app/page.tsx           -> URL /\n// app/about/page.tsx     -> URL /about\n// app/contact/page.tsx   -> URL /contact\n\nexport default function ContactPage() {\n  return <p>Email us at hello@school.edu</p>;\n}',
      extraBlocks: [practice('Add three pages: home, about, contact. No router array needed.')],
    }),
  },
  {
    slug: 'nx-l05-layouts',
    phase: 'Phase 3 — App Router',
    syllabusLecture: 7,
    displayLecture: 5,
    title: 'Layouts deep dive',
    lead: 'Stop copy-pasting the same navbar on every page—layouts fix the “wrapper component everywhere” React habit.',
    blocks: teach({
      topics: [
        'layout.tsx wraps all routes under that folder.',
        'Root layout is required once for the whole app.',
        'Nested layouts add sidebars only inside a section (e.g., /dashboard).',
        'Layouts do not remount when a child page changes—smooth nav.',
      ],
      realLife: [
        'A blog keeps the same top nav on every article.',
        'A homework dashboard keeps a left sidebar while only the main pane swaps.',
      ],
      code:
        "// app/layout.tsx — wraps every page\nimport './globals.css';\n\nexport default function RootLayout({ children }) {\n  return (\n    <html lang=\"en\">\n      <body>\n        <header>My site</header>\n        {children}\n        <footer>Thanks for visiting</footer>\n      </body>\n    </html>\n  );\n}",
      extraBlocks: [practice('Add a nested layout under app/blog/ for a blog-only banner.')],
    }),
  },
  {
    slug: 'nx-l06-navigation',
    phase: 'Phase 3 — App Router',
    syllabusLecture: 8,
    displayLecture: 6,
    title: 'Navigation in Next.js',
    lead: 'Link avoids full page reloads—similar goal to React Router’s <Link>, but wired to the file system routes.',
    blocks: teach({
      topics: [
        'Import Link from next/link for in-app navigation.',
        'Prefetch can load the next page in the background—snappy clicks.',
        'useRouter from next/navigation can push/replace from code (after a save, etc.).',
        'Mark the active link with styles so users know where they are.',
      ],
      realLife: [
        'A library kiosk: big sidebar buttons jump between “borrow” and “return”.',
        'A sports club site: top tabs for schedule, roster, photos.',
      ],
      code:
        'import Link from \'next/link\';\n\nexport default function Nav() {\n  return (\n    <nav>\n      <Link href="/">Home</Link>{\' | \'}\n      <Link href="/events">Events</Link>\n    </nav>\n  );\n}',
      extraBlocks: [practice('Build a small dashboard sidebar with three links and an active style.')],
    }),
  },
  {
    slug: 'nx-l07-dynamic-routes',
    phase: 'Phase 3 — App Router',
    syllabusLecture: 9,
    displayLecture: 7,
    title: 'Dynamic routes',
    lead: 'One React component pattern, many URLs—without hand-writing hundreds of routes.',
    blocks: teach({
      topics: [
        'Square brackets mean “this part of the URL is a variable”: app/posts/[slug]/page.tsx.',
        'The page function receives params.slug (names match the folder).',
        'generateStaticParams can prebuild known pages at build time (great for blogs).',
      ],
      realLife: [
        'Each student portfolio at /students/ava, /students/noah—same template, different data.',
        'A pizza shop menu item page for every topping code.',
      ],
      code:
        '// app/posts/[slug]/page.tsx\nexport default function PostPage({ params }) {\n  return (\n    <article>\n      <h1>Post: {params.slug}</h1>\n      <p>Later, load real content for this slug.</p>\n    </article>\n  );\n}',
      extraBlocks: [practice('Print the slug on screen, then swap in real data from an array or database.')],
    }),
  },
  {
    slug: 'nx-l08-components',
    phase: 'Phase 4 — React + Next.js fundamentals',
    syllabusLecture: 10,
    displayLecture: 8,
    title: 'Components',
    lead: 'Same React skills—Next.js just decides which files are server vs client by default.',
    blocks: teach({
      topics: [
        'Small functions that return JSX are components.',
        'Props pass data downward—parents own the truth.',
        'Reuse buttons and cards instead of copy-paste.',
        'Good names read like a sentence: <PrimaryButton />.',
      ],
      realLife: [
        'A attendance chip used on three pages—one component, three parents.',
        'A star rating row reused for books and for movies.',
      ],
      code:
        'type Props = { label: string; onClick?: () => void };\n\nexport function PrimaryButton({ label, onClick }: Props) {\n  return (\n    <button type="button" className="btn" onClick={onClick}>\n      {label}\n    </button>\n  );\n}',
      extraBlocks: [practice('Make a Card component with title + children and use it twice.')],
    }),
  },
  {
    slug: 'nx-l09-state-events',
    phase: 'Phase 4 — React + Next.js fundamentals',
    syllabusLecture: 11,
    displayLecture: 9,
    title: 'State and events',
    lead: 'Interactive UI still needs a client boundary—plain useState does not run on the server.',
    blocks: teach({
      topics: [
        'useState holds values that change after clicks or typing.',
        'Events like onChange update state—never edit state directly.',
        'Forms: controlled inputs tie input value to state.',
        'Add "use client" at the top of files that use useState in the App Router.',
      ],
      realLife: [
        'A classroom poll counter: tap +1 for each vote.',
        'A signup form for a volunteer list.',
      ],
      code:
        '\'use client\';\n\nimport { useState } from \'react\';\n\nexport function Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <button type="button" onClick={() => setCount((c) => c + 1)}>\n      Count: {count}\n    </button>\n  );\n}',
      extraBlocks: [practice('Todo list: add a task on submit, show tasks in a ul.')],
    }),
  },
  {
    slug: 'nx-l10-server-client',
    phase: 'Phase 4 — React + Next.js fundamentals',
    syllabusLecture: 12,
    displayLecture: 10,
    title: 'Client vs server components',
    lead: 'Fixes the “everything shipped to the browser” React SPA habit—static reads move off the client.',
    blocks: teach({
      topics: [
        'Server components are the default in the app directory—great for data reads.',
        'They cannot use useState or window—no browser there.',
        'Put "use client" only on small leaves that need hooks or events.',
        'Importing a client component into a server component is allowed—keeps bundles smaller.',
      ],
      realLife: [
        'A product catalog: prices load on the server; only the “Add to cart” button is client.',
        'A report card page: grades fetched privately on the server, not exposed in a giant client bundle.',
      ],
      code:
        "// ServerComponent.tsx (no 'use client')\nimport { Counter } from './Counter';\n\nexport default async function ProductPage() {\n  const title = 'Water bottle'; // pretend fetch here\n  return (\n    <section>\n      <h1>{title}</h1>\n      <Counter />\n    </section>\n  );\n}",
      extraBlocks: [
        {
          type: 'pre',
          code:
            "'use client';\nimport { useState } from 'react';\n\nexport function Counter() {\n  const [n, setN] = useState(0);\n  return <button type=\"button\" onClick={() => setN(n + 1)}>In cart: {n}</button>;\n}",
        },
        practice('Move a static heading to a server file; keep only the toggle as client.'),
      ],
    }),
  },
  {
    slug: 'nx-l11-data-fetching',
    phase: 'Phase 4 — React + Next.js fundamentals',
    syllabusLecture: 13,
    displayLecture: 11,
    title: 'Data fetching basics',
    lead: 'Cuts down useEffect+fetch waterfalls on the client—first paint can include real data.',
    blocks: teach({
      topics: [
        'Server components can be async and await fetch directly.',
        'Secrets (API keys) stay on the server—never paste them into client bundles.',
        'Client fetching is still fine for live tickers or instant search.',
        'Always plan empty, loading, and error UI.',
      ],
      realLife: [
        'A lunch menu page: fetch today’s meals on the server before HTML ships.',
        'A live bus map: client polling or websockets for moving dots.',
      ],
      code:
        '// app/menu/page.tsx (server component)\nexport default async function MenuPage() {\n  const res = await fetch("https://api.example.com/today", {\n    next: { revalidate: 60 }, // cache 60s — example only\n  });\n  const data = await res.json();\n  return <pre>{JSON.stringify(data, null, 2)}</pre>;\n}',
      extraBlocks: [practice('Show a friendly paragraph if fetch fails (try/catch in the server component).')],
    }),
  },
  {
    slug: 'nx-l12-css',
    phase: 'Phase 5 — Styling',
    syllabusLecture: 14,
    displayLecture: 12,
    title: 'CSS in Next.js',
    lead: 'Same CSS you know—Next just decides what is global vs module-scoped.',
    blocks: teach({
      topics: [
        'globals.css holds resets, fonts, and theme tokens—import once in root layout.',
        'CSS modules (.module.css) keep class names unique per file—fewer clashes than giant React apps with one stylesheet.',
        'Pick one strategy per project so teammates are not lost.',
      ],
      realLife: [
        'A science fair site: one global font, module styles per experiment card.',
        'A yearbook team: shared colors in globals, per-page tweaks in modules.',
      ],
      code:
        '/* styles/Card.module.css */\n.card {\n  border: 1px solid #e2e8f0;\n  border-radius: 0.75rem;\n  padding: 1rem;\n}',
      extraBlocks: [
        {
          type: 'pre',
          code:
            "import styles from '@/styles/Card.module.css';\n\nexport function Card({ children }: { children: React.ReactNode }) {\n  return <div className={styles.card}>{children}</div>;\n}",
        },
        practice('Move one inline style block into a module file.'),
      ],
    }),
  },
  {
    slug: 'nx-l13-tailwind',
    phase: 'Phase 5 — Styling',
    syllabusLecture: 15,
    displayLecture: 13,
    title: 'Tailwind CSS',
    lead: 'Utility classes speed layout work—common pair with Next starter templates.',
    blocks: teach({
      topics: [
        'Small class names map to CSS rules—compose many on one element.',
        'Prefixes like md: and lg: change rules at breakpoints.',
        'flex and grid utilities line up rows and columns quickly.',
      ],
      realLife: [
        'A bake-sale poster site: stack on phones, two columns on tablets.',
        'A club roster: tight rows on mobile, roomy table on desktop.',
      ],
      code:
        'export function Hero() {\n  return (\n    <section className="mx-auto max-w-3xl px-4 py-16 text-center">\n      <h1 className="text-3xl font-bold md:text-5xl">Welcome</h1>\n      <p className="mt-4 text-slate-600">Short and clear.</p>\n    </section>\n  );\n}',
      extraBlocks: [practice('Build a hero + three feature cards using only Tailwind classes.')],
    }),
  },
  {
    slug: 'nx-l14-responsive',
    phase: 'Phase 5 — Styling',
    syllabusLecture: 16,
    displayLecture: 14,
    title: 'Responsive design',
    lead: 'Same problem as any React app—Next does not remove the need to test small screens.',
    blocks: teach({
      topics: [
        'Start styles for the smallest screen, then add md:/lg: rules.',
        'Touch targets should be big—think thumbs, not mouse pointers.',
        'Test on a real phone; laptop width lies.',
      ],
      realLife: [
        'Parents read the PTA page on phones after work.',
        'A food drive signup must work on a bus ride with shaky Wi‑Fi.',
      ],
      code:
        '<div className="flex flex-col gap-4 md:flex-row">\n  <aside className="md:w-64">Sidebar</aside>\n  <main className="flex-1">Main content</main>\n</div>',
      extraBlocks: [practice('Collapse a sidebar into a top bar under 768px width.')],
    }),
  },
  {
    slug: 'nx-l15-route-handlers',
    phase: 'Phase 6 — Real backend features',
    syllabusLecture: 17,
    displayLecture: 15,
    title: 'Route handlers',
    lead: 'Avoid spinning up Express just for tiny JSON—same repo, same deploy.',
    blocks: teach({
      topics: [
        'app/api/.../route.ts exports HTTP verbs (GET, POST, ...).',
        'Return Response.json for browsers and mobile apps.',
        'Validate body data before saving—never trust raw input.',
      ],
      realLife: [
        'A classroom “shout-out board” saves notes to a database through POST /api/shoutouts.',
        'A club RSVP form posts JSON to /api/rsvp.',
      ],
      code:
        '// app/api/ping/route.ts\nexport async function GET() {\n  return Response.json({ ok: true, message: "pong" });\n}\n\nexport async function POST(request: Request) {\n  const body = await request.json();\n  return Response.json({ saved: body });\n}',
      extraBlocks: [practice('Add GET that lists fake notes and POST that appends one in memory.')],
    }),
  },
  {
    slug: 'nx-l16-databases-intro',
    phase: 'Phase 6 — Real backend features',
    syllabusLecture: 18,
    displayLecture: 16,
    title: 'Databases introduction',
    lead: 'React state resets on refresh—a database remembers.',
    blocks: teach({
      topics: [
        'A database stores rows (SQL) or documents (NoSQL) on disk.',
        'SQL uses tables and joins; PostgreSQL is a common free engine.',
        'NoSQL (like Mongo) stores flexible JSON-like blobs.',
        'ORM means “translator between TypeScript models and SQL.”',
      ],
      realLife: [
        'A library tracks who borrowed which book—must survive closing the browser.',
        'A sports team stores player stats for the whole season.',
      ],
      code:
        '-- SQL example: one table of tasks\nCREATE TABLE tasks (\n  id SERIAL PRIMARY KEY,\n  title TEXT NOT NULL,\n  done BOOLEAN DEFAULT FALSE\n);',
      extraBlocks: [practice('Draw on paper: User → Next page → API route → Database.')],
    }),
  },
  {
    slug: 'nx-l17-prisma',
    phase: 'Phase 6 — Real backend features',
    syllabusLecture: 19,
    displayLecture: 17,
    title: 'Prisma ORM',
    lead: 'Typed queries beat hand-written SQL strings scattered in React effects.',
    blocks: teach({
      topics: [
        'schema.prisma lists models and fields.',
        'npx prisma migrate dev updates the real database safely.',
        'PrismaClient runs on the server—create one instance per process pattern.',
      ],
      realLife: [
        'A school inventory app tracks laptops: model, room, serial.',
        'A blog stores posts and authors with relations.',
      ],
      code:
        '// schema.prisma (snippet)\nmodel Post {\n  id        Int      @id @default(autoincrement())\n  title     String\n  content   String\n  published Boolean  @default(false)\n}',
      extraBlocks: [
        {
          type: 'pre',
          code:
            "import { PrismaClient } from '@prisma/client';\nconst prisma = new PrismaClient();\n\nexport async function getPosts() {\n  return prisma.post.findMany({ where: { published: true } });\n}",
        },
        practice('Add an Author model and link posts to authors.'),
      ],
    }),
  },
  {
    slug: 'nx-l18-crud',
    phase: 'Phase 6 — Real backend features',
    syllabusLecture: 20,
    displayLecture: 18,
    title: 'Full CRUD application',
    lead: 'Classic apps do four verbs—Next handles UI + API in one tree.',
    blocks: teach({
      topics: [
        'Create — forms or actions add rows.',
        'Read — pages load lists or details.',
        'Update — edit forms patch rows.',
        'Delete — remove with a confirm step.',
      ],
      realLife: [
        'A homeroom task board: add homework, mark done, edit due date, delete mistakes.',
        'A small league site: CRUD players.',
      ],
      code:
        '// Pseudocode shape — wire to your DB\nasync function createTask(title: string) {\n  await db.task.create({ data: { title } });\n}\n\nasync function toggleTask(id: string, done: boolean) {\n  await db.task.update({ where: { id }, data: { done } });\n}',
      extraBlocks: [practice('Ship a task manager: list, add, edit, delete with confirmations.')],
    }),
  },
  {
    slug: 'nx-l19-auth-basics',
    phase: 'Phase 7 — Authentication',
    syllabusLecture: 21,
    displayLecture: 19,
    title: 'Authentication basics',
    lead: 'React does not know “who is logged in” by itself—you add auth.',
    blocks: teach({
      topics: [
        'Login proves identity (password, magic link, or OAuth).',
        'Sessions remember you for a while—often an HTTP-only cookie.',
        'JWT is a signed token string—sometimes used instead of server sessions.',
      ],
      realLife: [
        'A student sees only their grades after login.',
        'A volunteer site shows extra buttons after staff login.',
      ],
      code:
        '// Cookie idea (names simplified)\n// Set once after login on the server:\n// Set-Cookie: session=abc123; HttpOnly; Secure; SameSite=Lax\n// Plain React cannot set HttpOnly cookies from browser JS—server must help.',
      extraBlocks: [practice('List who should see what on your app (public vs member vs admin).')],
    }),
  },
  {
    slug: 'nx-l20-nextauth',
    phase: 'Phase 7 — Authentication',
    syllabusLecture: 22,
    displayLecture: 20,
    title: 'Auth.js / NextAuth',
    lead: 'OAuth buttons (Google/GitHub) without writing the whole security story yourself.',
    blocks: teach({
      topics: [
        'Auth.js wires providers and callbacks for the App Router.',
        'Use environment variables for client id/secret—never commit secrets.',
        'Protect pages by checking session on the server before rendering.',
      ],
      realLife: [
        'Hackathon teams sign in with GitHub in one click.',
        'School Google accounts gate a study room page.',
      ],
      code:
        '// Illustrative only — follow current Auth.js docs for exact paths\n// app/api/auth/[...nextauth]/route.ts exports handlers from your auth config\nexport { GET, POST } from "@/auth";',
      extraBlocks: [practice('Gate /dashboard: if no session, redirect to /login.')],
    }),
  },
  {
    slug: 'nx-l21-loading-suspense',
    phase: 'Phase 8 — Advanced Next.js',
    syllabusLecture: 23,
    displayLecture: 21,
    title: 'Loading UI and Suspense',
    lead: 'Better than a blank screen while useEffect fetch runs on first paint.',
    blocks: teach({
      topics: [
        'loading.tsx shows instantly while a route segment loads.',
        'Suspense wraps slow pieces so the rest of the page can stream.',
        'Streaming sends HTML in chunks—perceived speed wins.',
      ],
      realLife: [
        'A cafeteria menu shows skeleton cards while prices load.',
        'A bus schedule page shows a shimmer row for late data.',
      ],
      code:
        '// app/dashboard/loading.tsx\nexport default function Loading() {\n  return <p>Loading your dashboard…</p>;\n}',
      extraBlocks: [
        {
          type: 'pre',
          code:
            "import { Suspense } from 'react';\n\nasync function Slow() {\n  await new Promise((r) => setTimeout(r, 1000));\n  return <p>Ready!</p>;\n}\n\nexport default function Page() {\n  return (\n    <Suspense fallback={<p>Please wait…</p>}>\n      <Slow />\n    </Suspense>\n  );\n}",
        },
        practice('Replace the fallback with grey skeleton blocks.'),
      ],
    }),
  },
  {
    slug: 'nx-l22-errors',
    phase: 'Phase 8 — Advanced Next.js',
    syllabusLecture: 24,
    displayLecture: 22,
    title: 'Error handling',
    lead: 'React error boundaries help, but Next route error.tsx scopes failures per folder.',
    blocks: teach({
      topics: [
        'error.tsx must be a client component so it can reset.',
        'not-found.tsx runs for missing data or notFound().',
        'Keep messages friendly—users do not read stack traces.',
      ],
      realLife: [
        'A payment page fails: show “try again” and a support email.',
        'A missing yearbook page: cute 404 with link home.',
      ],
      code:
        "// app/dashboard/error.tsx\n'use client';\n\nexport default function Error({ error, reset }: { error: Error; reset: () => void }) {\n  return (\n    <div>\n      <h2>Something broke</h2>\n      <button type=\"button\" onClick={reset}>Try again</button>\n    </div>\n  );\n}",
      extraBlocks: [practice('Add not-found.tsx under a blog segment with a helpful link.')],
    }),
  },
  {
    slug: 'nx-l23-server-actions',
    phase: 'Phase 8 — Advanced Next.js',
    syllabusLecture: 25,
    displayLecture: 23,
    title: 'Server Actions',
    lead: 'Less boilerplate than fetch in every React handler for simple mutations.',
    blocks: teach({
      topics: [
        'Server actions run on the server when a form posts.',
        'Use "use server" in a separate file or at top of action functions (per docs).',
        'Revalidate data after writes so lists refresh.',
      ],
      realLife: [
        'A comment wall: submit form, append row, no custom REST route needed for class scope.',
        'A locker signup sheet: one button reserves a slot.',
      ],
      code:
        '// actions.ts\n\'use server\';\n\nexport async function addComment(formData: FormData) {\n  const text = String(formData.get("text") || "");\n  if (!text.trim()) return;\n  // save to db...\n}',
      extraBlocks: [
        {
          type: 'pre',
          code:
            "import { addComment } from './actions';\n\nexport default function Page() {\n  return (\n    <form action={addComment}>\n      <textarea name=\"text\" />\n      <button type=\"submit\">Post</button>\n    </form>\n  );\n}",
        },
        practice('After posting, show the new comment at the top of a list.'),
      ],
    }),
  },
  {
    slug: 'nx-l24-caching',
    phase: 'Phase 8 — Advanced Next.js',
    syllabusLecture: 26,
    displayLecture: 24,
    title: 'Caching and revalidation',
    lead: 'Plain React leaves caching to you; Next picks smart defaults but lets you steer.',
    blocks: teach({
      topics: [
        'Fetching may be cached—know your freshness needs.',
        'revalidatePath refreshes one tree after a mutation.',
        'revalidateTag groups related data invalidation.',
      ],
      realLife: [
        'School announcements: cache for one minute, then refresh.',
        'Sports scores: short revalidate or live fetch on the client.',
      ],
      code:
        "'use server';\nimport { revalidatePath } from 'next/cache';\n\nexport async function afterSave() {\n  revalidatePath('/posts');\n}",
      extraBlocks: [practice('Change a post title, call revalidatePath, confirm the list updates.')],
    }),
  },
  {
    slug: 'nx-l25-middleware',
    phase: 'Phase 8 — Advanced Next.js',
    syllabusLecture: 27,
    displayLecture: 25,
    title: 'Middleware',
    lead: 'Central guard before pages run—lighter than sprinkling checks in every React page.',
    blocks: teach({
      topics: [
        'middleware.ts runs on the edge path before render.',
        'Great for fast redirects (missing cookie → /login).',
        'Still validate on the server for anything serious—middleware is a first gate, not the vault.',
      ],
      realLife: [
        'Block /admin if the user is not staff.',
        'Send old bookmark /2019 to /archive/2019.',
      ],
      code:
        "// middleware.ts (simplified)\nimport { NextResponse } from 'next/server';\n\nexport function middleware(request: Request) {\n  const loggedIn = false; // replace with real check\n  if (!loggedIn) return NextResponse.redirect(new URL('/login', request.url));\n  return NextResponse.next();\n}\n\nexport const config = { matcher: ['/dashboard/:path*'] };",
      extraBlocks: [practice('Log the request path in middleware during dev to see when it runs.')],
    }),
  },
  {
    slug: 'nx-l26-seo',
    phase: 'Phase 9 — Production skills',
    syllabusLecture: 28,
    displayLecture: 26,
    title: 'SEO in Next.js',
    lead: 'Metadata beats hidden <Helmet> tricks scattered across client-only React trees.',
    blocks: teach({
      topics: [
        'export metadata in server files for titles and descriptions.',
        'Open Graph fields control previews on chat apps.',
        'generateMetadata can build tags from database data.',
      ],
      realLife: [
        'A fundraiser link unfurls with the event photo on Messages.',
        'Each student blog post gets its own title in Google results.',
      ],
      code:
        '// app/layout.tsx or page.tsx\nexport const metadata = {\n  title: "Riverdale Robotics Club",\n  description: "Meeting times, build logs, and photos.",\n  openGraph: {\n    title: "Riverdale Robotics Club",\n    description: "See what we are building this season.",\n  },\n};',
      extraBlocks: [practice('Set unique metadata on three routes and share links to see previews.')],
    }),
  },
  {
    slug: 'nx-l27-performance',
    phase: 'Phase 9 — Production skills',
    syllabusLecture: 29,
    displayLecture: 27,
    title: 'Performance optimization',
    lead: 'next/image fixes the classic <img> layout jump and huge photo bytes problem.',
    blocks: teach({
      topics: [
        'next/image serves resized images and lazy loads by default.',
        'Dynamic import() splits heavy client-only libraries.',
        'Measure before guessing—Lighthouse in Chrome is free.',
      ],
      realLife: [
        'A yearbook gallery loads fast on cellular data.',
        'A product page keeps scroll smooth while images appear.',
      ],
      code:
        "import Image from 'next/image';\n\nexport function Poster() {\n  return (\n    <Image\n      src=\"/poster.jpg\"\n      alt=\"Spring play poster\"\n      width={640}\n      height={960}\n      priority\n    />\n  );\n}",
      extraBlocks: [practice('Swap one big <img> for next/image and compare file size in Network tab.')],
    }),
  },
];

export function getNextjsLecture(slug) {
  return nextjsLectures.find((l) => l.slug === slug);
}

export function getNextjsAdjacent(slug) {
  const index = nextjsLectures.findIndex((l) => l.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: nextjsLectures[index - 1] ?? null,
    next: nextjsLectures[index + 1] ?? null,
  };
}
