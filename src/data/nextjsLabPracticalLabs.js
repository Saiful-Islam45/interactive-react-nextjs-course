/**
 * Progressive hands-on labs. Each lab is step-by-step: do this in your real Next.js project,
 * then read what the code does (short). Order matters — follow 1 → 11.
 */

function S(title, explain, code, file = null) {
  const lines = Array.isArray(explain) ? explain : [explain];
  return { title, explain: lines, code: code?.trim() ?? '', file };
}

export const nextjsLabPracticalLabs = [
  {
    slug: 'lab-01-create-app',
    phase: 'Progressive lab · 1 / 11',
    title: 'Create the Next.js app and understand the folder tree',
    summary: 'You scaffold the project, then we walk each important file so you know where to work later.',
    steps: [
      S(
        'Create the project',
        [
          'This command downloads the official starter and asks a few questions.',
          'Pick TypeScript, App Router, and ESLint when you are unsure — they match these labs.',
        ],
        `npx create-next-app@latest my-lab-app
cd my-lab-app
npm run dev`,
        'Terminal',
      ),
      S(
        'Open the tree in your editor',
        'You should see something close to this layout (names may vary slightly by version).',
        `my-lab-app/
├── app/                 ← routes + UI live here (App Router)
│   ├── layout.tsx       ← wraps every page
│   ├── page.tsx         ← home page "/"
│   ├── globals.css      ← global styles
│   └── favicon.ico
├── public/              ← static files (images at /file.png)
├── next.config.ts       ← Next.js settings (images, redirects, …)
├── package.json         ← scripts: dev, build, start
├── tsconfig.json        ← TypeScript rules
└── eslint.config.mjs    ← lint rules`,
        'Project root',
      ),
      S(
        'What package.json does here',
        'It lists dependencies and scripts. You will run dev while learning and build before deploy.',
        `{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}`,
        'package.json',
      ),
      S(
        'What app/page.tsx does',
          'This file is the home route. Changing it immediately changes what you see at http://localhost:3000/.',
        `// app/page.tsx — URL: /
export default function Home() {
  return (
    <main>
      <h1>My lab home</h1>
      <p>Edit this file and save — the browser updates.</p>
    </main>
  );
}`,
        'app/page.tsx',
      ),
      S(
        'What app/layout.tsx does',
          'Root layout wraps every page. Put shared chrome (nav, fonts) here once instead of copying it.',
        `// app/layout.tsx — wraps all routes
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Lab App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`,
        'app/layout.tsx',
      ),
      S(
        'What public/ is for',
          'Files here are served as-is at the site root. Example: public/hero.jpg → /hero.jpg.',
        `public/
  robots.txt
  next.svg`,
        'public/',
      ),
    ],
  },
  {
    slug: 'lab-02-layout',
    phase: 'Progressive lab · 2 / 11',
    title: 'Prepare a layout (shared chrome)',
    summary: 'You add a header every page can share. Children is where each page’s content appears.',
    steps: [
      S(
        'Why we do this',
          'Without a layout you copy the same nav on every page. The layout runs once around changing pages.',
        `// Goal: <body><header/>{page content}</body>`,
        'Concept',
      ),
      S(
        'Edit the root layout',
          'We import a small Nav component and render {children} under it so each route keeps the same header.',
        `// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { MainNav } from "@/components/MainNav";

export const metadata: Metadata = { title: "Lab · Layouts" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui" }}>
        <MainNav />
        <div style={{ padding: "1.5rem" }}>{children}</div>
      </body>
    </html>
  );
}`,
        'app/layout.tsx',
      ),
      S(
        'Create the nav component',
          'This is still a Server Component (no "use client") because we only render links.',
        `// components/MainNav.tsx
import Link from "next/link";

export function MainNav() {
  return (
    <header style={{ borderBottom: "1px solid #e2e8f0", padding: "0.75rem 1.25rem" }}>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}`,
        'components/MainNav.tsx',
      ),
      S(
        'Optional: nested layout for a section',
          'Anything under app/dashboard/ can share a sidebar without touching the marketing pages.',
        `// app/dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "1rem" }}>
      <aside style={{ borderRight: "1px solid #e2e8f0", paddingRight: "1rem" }}>
        <p>Dashboard menu</p>
      </aside>
      <div>{children}</div>
    </section>
  );
}`,
        'app/dashboard/layout.tsx',
      ),
    ],
  },
  {
    slug: 'lab-03-page',
    phase: 'Progressive lab · 3 / 11',
    title: 'Prepare a page',
    summary: 'A new folder + page.tsx becomes a new URL. You wire content without a central route config.',
    steps: [
      S(
        'Add an About page',
          'The file path app/about/page.tsx maps to the URL /about.',
        `// app/about/page.tsx — URL: /about
export default function AboutPage() {
  return (
    <main>
      <h1>About this lab</h1>
      <p>Each page file owns one screen.</p>
    </main>
  );
}`,
        'app/about/page.tsx',
      ),
      S(
        'Add a dashboard home',
          'Nested routes use deeper folders. This is /dashboard (not /dashboard/something-else).',
        `// app/dashboard/page.tsx — URL: /dashboard
export default function DashboardHome() {
  return (
    <main>
      <h1>Dashboard</h1>
      <p>This page sits inside the dashboard layout if you created lab 2’s nested layout.</p>
    </main>
  );
}`,
        'app/dashboard/page.tsx',
      ),
      S(
        'Check your links',
          'Click Home and About in MainNav — you should move without a full page reload thanks to next/link.',
        `// Already in MainNav from lab 2
<Link href="/about">About</Link>`,
        'components/MainNav.tsx',
      ),
    ],
  },
  {
    slug: 'lab-04-error',
    phase: 'Progressive lab · 4 / 11',
    title: 'Add an error page',
    summary: 'error.tsx catches runtime errors for a route segment and shows a reset button.',
    steps: [
      S(
        'Why error.tsx exists',
          'Users should see a friendly message instead of a blank screen when something throws.',
        `// Place error.tsx next to the routes it protects (same folder as page.tsx).`,
        'Concept',
      ),
      S(
        'Create a client error boundary',
          'error.tsx must be a Client Component so the reset() button can rerun the failed tree.',
        `// app/dashboard/error.tsx
"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{ padding: "1rem", border: "1px solid #fecaca", borderRadius: "0.5rem" }}>
      <h2>Something went wrong in the dashboard</h2>
      <p style={{ color: "#64748b" }}>{error.message}</p>
      <button type="button" onClick={reset} style={{ marginTop: "0.75rem" }}>
        Try again
      </button>
    </div>
  );
}`,
        'app/dashboard/error.tsx',
      ),
      S(
        'Trigger it on purpose (temporary)',
          'Throw once to see the UI, then remove the throw after you trust the boundary.',
        `// app/dashboard/page.tsx — TEMPORARY TEST
export default function DashboardHome() {
  if (process.env.NODE_ENV !== "production") {
    // throw new Error("Demo crash"); // uncomment to test error.tsx
  }
  return <p>Dashboard ok</p>;
}`,
        'app/dashboard/page.tsx',
      ),
    ],
  },
  {
    slug: 'lab-05-not-found',
    phase: 'Progressive lab · 5 / 11',
    title: 'Add a not-found page',
    summary: 'not-found.tsx renders when you call notFound() or when no route matches.',
    steps: [
      S(
        'Global 404',
          'This file handles unknown URLs for the whole app when no deeper not-found exists.',
        `// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404</h1>
      <p>We could not find that page.</p>
      <Link href="/">Go home</Link>
    </main>
  );
}`,
        'app/not-found.tsx',
      ),
      S(
        'Segment not-found for missing data',
          'When a slug is invalid, call notFound() so Next renders the closest not-found UI.',
        `// app/items/[id]/page.tsx
import { notFound } from "next/navigation";

const db = [{ id: "1", name: "Apple" }];

export default function ItemPage({ params }: { params: { id: string } }) {
  const item = db.find((i) => i.id === params.id);
  if (!item) notFound();
  return <p>{item.name}</p>;
}`,
        'app/items/[id]/page.tsx',
      ),
      S(
        'Optional local not-found',
          'Put not-found.tsx inside app/items/ to style missing items differently from global 404.',
        `// app/items/not-found.tsx
export default function ItemNotFound() {
  return <p>Unknown item id.</p>;
}`,
        'app/items/not-found.tsx',
      ),
    ],
  },
  {
    slug: 'lab-06-server-component',
    phase: 'Progressive lab · 6 / 11',
    title: 'Server Component (default)',
    summary: 'Fetch and render on the server first — no useEffect, smaller client bundle.',
    steps: [
      S(
        'Async page that awaits data',
          'This component runs on the server. The HTML can include the fetched text before hydration.',
        `// app/posts/page.tsx
type Post = { id: string; title: string };

async function getPosts(): Promise<Post[]> {
  // Later: replace with DB or real API
  return [
    { id: "1", title: "Hello server components" },
    { id: "2", title: "Less JavaScript in the browser" },
  ];
}

export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </main>
  );
}`,
        'app/posts/page.tsx',
      ),
      S(
        'Call an external API safely',
          'Secrets stay here on the server — do not paste private keys into client files.',
        `export default async function WeatherTeaser() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js", {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  return <p>Next.js GitHub stars: {data.stargazers_count}</p>;
}`,
        'app/stats/page.tsx (example)',
      ),
    ],
  },
  {
    slug: 'lab-07-client-component',
    phase: 'Progressive lab · 7 / 11',
    title: 'Client Component',
    summary: 'Add "use client" only where you need state, effects, or browser APIs.',
    steps: [
      S(
        'Counter component',
          'Hooks run in the browser bundle. Mark the file with "use client" at the top.',
        `// components/Counter.tsx
"use client";

import { useState } from "react";

export function Counter() {
  const [n, setN] = useState(0);
  return (
    <button type="button" onClick={() => setN((x) => x + 1)}>
      Clicks: {n}
    </button>
  );
}`,
        'components/Counter.tsx',
      ),
      S(
        'Use it inside a Server page',
          'The page stays a Server Component; it imports a small client island.',
        `// app/playground/page.tsx (server file — no "use client")
import { Counter } from "@/components/Counter";

export default function PlaygroundPage() {
  return (
    <main>
      <h1>Playground</h1>
      <Counter />
    </main>
  );
}`,
        'app/playground/page.tsx',
      ),
      S(
        'Rule of thumb',
          'Keep data loading on the server. Push interactivity to the smallest client child you can.',
        `// Good split:
// Server: titles, lists from DB
// Client: toggles, text fields, drag-and-drop`,
        'Pattern',
      ),
    ],
  },
  {
    slug: 'lab-08-api-fetching',
    phase: 'Progressive lab · 8 / 11',
    title: 'API fetching in a Server Component',
    summary: 'await fetch in the page (or in a helper) so the first HTML already contains your data.',
    steps: [
      S(
        'Create a simple JSON route first',
          'We will read this from the server page in the next step.',
        `// app/api/notes/route.ts
import { NextResponse } from "next/server";

const notes = [{ id: "a", text: "Buy milk" }];

export async function GET() {
  return NextResponse.json(notes);
}`,
        'app/api/notes/route.ts',
      ),
      S(
        'Fetch it from a server page',
          'Use an absolute URL in the server environment (NEXT_PUBLIC_BASE_URL) or call your data layer directly instead of HTTP when possible.',
        `// app/notes/page.tsx
async function loadNotes() {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
  const url = base + "/api/notes";
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load notes");
  return res.json();
}

export default async function NotesPage() {
  const notes = await loadNotes();
  return (
    <ul>
      {notes.map((n: { id: string; text: string }) => (
        <li key={n.id}>{n.text}</li>
      ))}
    </ul>
  );
}`,
        'app/notes/page.tsx',
      ),
      S(
        'Set NEXT_PUBLIC_BASE_URL for dev',
          'Add to .env.local so server fetches resolve on your machine.',
        `NEXT_PUBLIC_BASE_URL=http://localhost:3000`,
        '.env.local',
      ),
    ],
  },
  {
    slug: 'lab-09-backend-api-ui',
    phase: 'Progressive lab · 9 / 11',
    title: 'Build a backend API and call it from the UI',
    summary: 'POST from a Client Component to a Route Handler, then refresh the list.',
    steps: [
      S(
        'Route handler with POST',
          'This creates /api/messages and accepts JSON bodies.',
        `// app/api/messages/route.ts
import { NextResponse } from "next/server";

const messages: { id: string; text: string }[] = [];

export async function GET() {
  return NextResponse.json(messages);
}

export async function POST(request: Request) {
  const body = await request.json();
  const text = String(body.text ?? "").trim();
  if (!text) {
    return NextResponse.json({ error: "text required" }, { status: 400 });
  }
  const item = { id: crypto.randomUUID(), text };
  messages.unshift(item);
  return NextResponse.json(item, { status: 201 });
}`,
        'app/api/messages/route.ts',
      ),
      S(
        'Client form that calls the API',
          'After POST we GET again so the UI matches the server list.',
        `// components/MessageBoard.tsx
"use client";

import { useEffect, useState } from "react";

type Msg = { id: string; text: string };

export function MessageBoard() {
  const [items, setItems] = useState<Msg[]>([]);
  const [text, setText] = useState("");

  async function refresh() {
    const res = await fetch("/api/messages");
    setItems(await res.json());
  }

  useEffect(() => {
    void refresh();
  }, []);

  async function send() {
    await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    setText("");
    await refresh();
  }

  return (
    <div>
      <ul>
        {items.map((m) => (
          <li key={m.id}>{m.text}</li>
        ))}
      </ul>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button type="button" onClick={send}>
        Send
      </button>
    </div>
  );
}`,
        'components/MessageBoard.tsx',
      ),
      S(
        'Render the board on a page',
          'Import the client MessageBoard into a route so visitors see the live list.',
        `// app/messages/page.tsx
import { MessageBoard } from "@/components/MessageBoard";

export default function MessagesPage() {
  return (
    <main>
      <h1>Messages</h1>
      <MessageBoard />
    </main>
  );
}`,
        'app/messages/page.tsx',
      ),
    ],
  },
  {
    slug: 'lab-10-revalidate',
    phase: 'Progressive lab · 10 / 11',
    title: 'Revalidate data after a write',
    summary: 'After POST, tell Next to refresh cached pages with revalidatePath or revalidateTag.',
    steps: [
      S(
        'Server actions: read list + add row + revalidate',
        [
          'One module holds the in-memory list so getPosts and addPost stay in sync.',
          'After addPost runs, revalidatePath("/posts") clears the cache for that URL so the page refetches.',
        ],
        `// app/posts/actions.ts
"use server";

import { revalidatePath } from "next/cache";

type Post = { slug: string; title: string };

let posts: Post[] = [{ slug: "hello", title: "Hello" }];

export async function getPosts() {
  return posts;
}

export async function addPost(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  if (!title) return;
  const slug = title.toLowerCase().replace(/\\s+/g, "-");
  posts = [{ slug, title }, ...posts];
  revalidatePath("/posts");
}`,
        'app/posts/actions.ts',
      ),
      S(
        'Page: form + list (both use the same actions file)',
          'The page is a Server Component: it awaits getPosts(). The form calls addPost without any client fetch.',
        `// app/posts/page.tsx
import { getPosts, addPost } from "./actions";

export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <main>
      <h1>Posts</h1>
      <form action={addPost} style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <input name="title" placeholder="New post title" required />
        <button type="submit">Add</button>
      </form>
      <ul>
        {posts.map((p) => (
          <li key={p.slug}>{p.title}</li>
        ))}
      </ul>
    </main>
  );
}`,
        'app/posts/page.tsx',
      ),
      S(
        'Using tags (optional pattern)',
          'fetch(..., { next: { tags: ["posts"] } }) pairs with revalidateTag("posts") after updates.',
        `import { revalidateTag } from "next/cache";

export async function refreshPosts() {
  revalidateTag("posts");
}`,
        'Server helper',
      ),
    ],
  },
  {
    slug: 'lab-11-nextauth',
    phase: 'Progressive lab · 11 / 11',
    title: 'NextAuth / Auth.js sign-in',
    summary: 'Wire OAuth or email providers. Versions move fast — treat this as a working shape and confirm the official Auth.js docs for your Next release.',
    steps: [
      S(
        'Install the package',
          'Package name is often next-auth; Auth.js v5 uses a single auth config file.',
        `npm install next-auth@beta
# or follow https://authjs.dev for the exact package line for your date`,
        'Terminal',
      ),
      S(
        'Environment variables',
          'Never commit secrets. GitHub OAuth example keys:',
        `# .env.local
AUTH_SECRET=openssl-rand-base64-32-here
AUTH_GITHUB_ID=your_github_oauth_app_id
AUTH_GITHUB_SECRET=your_github_oauth_app_secret`,
        '.env.local',
      ),
      S(
        'Auth config (illustrative)',
          'Adjust import paths to match the current Auth.js Next.js starter for your version.',
        `// auth.ts — shape follows Auth.js for Next; adjust imports to your version
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
});`,
        'auth.ts (project root or src/)',
      ),
      S(
        'Route handler for Auth.js',
          'This exposes the sign-in callbacks under /api/auth/*.',
        `// app/api/auth/[...nextauth]/route.ts
import { handlers } from "@/auth";

export const { GET, POST } = handlers;`,
        'app/api/auth/[...nextauth]/route.ts',
      ),
      S(
        'Protect a page on the server',
          'Redirect visitors who are not signed in.',
        `import { auth, signIn } from "@/auth";

export default async function AccountPage() {
  const session = await auth();
  if (!session) {
    return (
      <main>
        <p>Please sign in.</p>
        <form
          action={async () => {
            "use server";
            await signIn("github");
          }}
        >
          <button type="submit">Continue with GitHub</button>
        </form>
      </main>
    );
  }
  return <p>Signed in as {session.user?.email}</p>;
}`,
        'app/account/page.tsx (pattern — verify with current docs)',
      ),
      S(
        'What you learned',
          [
            'Providers live in auth config.',
            'handlers mount on a catch-all route.',
            'auth() reads the session in Server Components.',
            'Always follow the official migration guide when upgrading.',
          ],
        `// Docs: https://authjs.dev`,
        'Docs',
      ),
    ],
  },
];

export function getNextjsLabPractical(slug) {
  return nextjsLabPracticalLabs.find((l) => l.slug === slug);
}
