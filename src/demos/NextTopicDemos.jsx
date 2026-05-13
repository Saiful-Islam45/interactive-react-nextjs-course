/* Next.js track demos — pair with official docs at nextjs.org/docs */

function DemoCard({ title, children }) {
  return (
    <div className="demo-card">
      {title ? <h4 className="demo-card__title">{title}</h4> : null}
      <div className="demo-card__body">{children}</div>
    </div>
  );
}

function OptionalReferenceLink({ docUrl, learnCourse }) {
  if (!docUrl) return null;
  return (
    <p className="next-topic-demo__reference">
      <span className="next-topic-demo__reference-label">Optional: </span>
      <a href={docUrl} target="_blank" rel="noopener noreferrer">
        {learnCourse ? 'learn.nextjs.org' : 'nextjs.org docs'}
      </a>
    </p>
  );
}

const DASHBOARD_LAB_HINTS = {
  'dashboard-lab-overview': `Course: Build a Dashboard (App Router)
16 steps · invoices · auth · DB`,
  'dashboard-lab-getting-started': `npx create-next-app … --example
→ starter-example from next-learn repo
pnpm dev → localhost:3000`,
  'dashboard-lab-css-styling': `layout.tsx → import global.css
Tailwind + optional *.module.css + clsx`,
  'dashboard-lab-optimizing-fonts-images': `app/ui/fonts.ts → Inter on <body>
next/image → hero-desktop + hero-mobile`,
  'dashboard-lab-creating-layouts-pages': `app/dashboard/page.tsx → /dashboard
layout.tsx + SideNav + {children}`,
  'dashboard-lab-navigating-between-pages': `nav-links.tsx
Link + usePathname + "use client"`,
  'dashboard-lab-setting-up-database': `GitHub → Vercel → Postgres
.env + /seed + optional /query`,
  'dashboard-lab-fetching-data': `async page.tsx
data.ts → SQL queries + Promise.all patterns`,
  'dashboard-lab-static-dynamic-rendering': `Static vs dynamic
Slow fetch blocks whole page → motivation`,
  'dashboard-lab-streaming': `loading.tsx + skeleton
(app)/(overview) route group
Suspense around slow charts`,
  'dashboard-lab-adding-search-pagination': `?query= & ?page=
useRouter.replace + debounced search`,
  'dashboard-lab-mutating-data': `'use server' actions.ts
revalidatePath + redirect`,
  'dashboard-lab-error-handling': `error.tsx boundary
notFound() + not-found.tsx`,
  'dashboard-lab-improving-accessibility': `eslint jsx-a11y
useActionState + Zod safeParse`,
  'dashboard-lab-adding-authentication': `NextAuth + Credentials
auth.config + proxy.ts matcher
auth.ts bcrypt (not in proxy)`,
  'dashboard-lab-adding-metadata': `favicon + OG in app/
metadata + title.template + metadataBase`,
  'dashboard-lab-next-steps': `Course complete → ship + docs`,
};

function DashboardLabMini({ slug }) {
  const text = DASHBOARD_LAB_HINTS[slug] ?? 'Follow bullets left — official chapter link above.';
  return (
    <>
      <pre className="demo-pre demo-pre--tight">{text}</pre>
      <p className="demo-muted">This Reactor app is the lesson text — you type code in your Next project.</p>
    </>
  );
}

function DemoBody({ slug }) {
  if (slug.startsWith('dashboard-lab-')) {
    return <DashboardLabMini slug={slug} />;
  }
  switch (slug) {
    case 'nextjs-react-issues-spa':
      return (
        <>
          <ul className="demo-checklist">
            <li>Thin first HTML</li>
            <li>Data after mount</li>
            <li>Big client bundle</li>
            <li>SEO / meta manual</li>
          </ul>
          <p className="demo-muted">Then follow Getting Started in doc order.</p>
        </>
      );
    case 'nextjs-how-next-helps':
      return (
        <pre className="demo-pre demo-pre--tight">
          {`empty HTML     → server / RSC
client-only data → Fetching Data
writes           → Mutating Data
cache            → Caching + Revalidating
errors           → Error Handling
assets           → Images + Fonts + Metadata
API              → Route Handlers + Proxy
ship             → Deploying + Upgrading`}
        </pre>
      );
    case 'nextjs-docs-installation':
      return (
        <pre className="demo-pre demo-pre--tight">
          {`npx create-next-app@latest my-app
cd my-app
npm run dev`}
        </pre>
      );
    case 'nextjs-docs-project-structure':
      return (
        <pre className="demo-pre demo-pre--tight">
          {`app/
  layout.tsx page.tsx globals.css
  [...]/route.ts   → API
  [slug]/page.tsx  → dynamic
public/`}
        </pre>
      );
    case 'nextjs-docs-layouts-pages':
      return (
        <pre className="demo-pre demo-pre--tight">
          {`layout.tsx → wraps + {children}
page.tsx   → one route UI`}
        </pre>
      );
    case 'nextjs-docs-linking-navigating':
      return (
        <ul className="demo-checklist">
          <li>
            <code>Link</code> — in-app, prefetch
          </li>
          <li>
            <code>&lt;a&gt;</code> — full navigation / external
          </li>
        </ul>
      );
    case 'nextjs-docs-server-client-components':
      return (
        <ul className="demo-checklist">
          <li>Default = Server Component</li>
          <li>&quot;use client&quot; = hooks + events</li>
        </ul>
      );
    case 'nextjs-docs-fetching-data':
      return (
        <ul className="demo-checklist">
          <li>async page + await fetch</li>
          <li>Streaming + loading UI (see doc)</li>
        </ul>
      );
    case 'nextjs-docs-mutating-data':
      return (
        <pre className="demo-pre demo-pre--tight">
          {`'use server'
// Server Actions — follow doc types`}
        </pre>
      );
    case 'nextjs-docs-caching':
      return <p className="demo-muted">Tables on the live doc match your installed Next version.</p>;
    case 'nextjs-docs-revalidating':
      return (
        <ul className="demo-checklist">
          <li>Time-based</li>
          <li>On-demand (tags / paths)</li>
        </ul>
      );
    case 'nextjs-docs-error-handling':
      return (
        <ul className="demo-checklist">
          <li>error.js boundary</li>
          <li>notFound()</li>
        </ul>
      );
    case 'nextjs-docs-css':
      return (
        <ul className="demo-checklist">
          <li>globals.css in root layout</li>
          <li>*.module.css</li>
          <li>Tailwind (optional)</li>
        </ul>
      );
    case 'nextjs-docs-images':
      return (
        <pre className="demo-pre demo-pre--tight">
          {`import Image from 'next/image'
// + next.config images/domains`}
        </pre>
      );
    case 'nextjs-docs-fonts':
      return (
        <pre className="demo-pre demo-pre--tight">
          {`import { Geist } from 'next/font/google'`}
        </pre>
      );
    case 'nextjs-docs-metadata-og':
      return (
        <pre className="demo-pre demo-pre--tight">
          {`export const metadata = { title: '…' }
// or generateMetadata()`}
        </pre>
      );
    case 'nextjs-docs-route-handlers':
      return (
        <pre className="demo-pre demo-pre--tight">
          {`// app/api/hello/route.ts
export async function GET() {
  return Response.json({ ok: true });
}`}
        </pre>
      );
    case 'nextjs-docs-proxy':
      return <p className="demo-muted">Follow the file + export name on the live Proxy doc.</p>;
    case 'nextjs-docs-deploying':
      return (
        <ol className="demo-checklist demo-checklist--ordered">
          <li>npm run build</li>
          <li>Connect host</li>
          <li>Set env</li>
        </ol>
      );
    case 'nextjs-docs-upgrading':
      return (
        <pre className="demo-pre demo-pre--tight">
          {`# See official upgrading page
next upgrade  # if available`}
        </pre>
      );
    default:
      return <p className="demo-muted">Mini sketch — full detail on nextjs.org.</p>;
  }
}

/** @param {{ slug: string, docUrl?: string | null, panelTitle?: string }} props */
export function NextTopicDemo({ slug, docUrl, panelTitle }) {
  const learnCourse = slug.startsWith('dashboard-lab-');
  return (
    <DemoCard title={panelTitle || 'Next.js'}>
      <DemoBody slug={slug} />
      <OptionalReferenceLink docUrl={docUrl} learnCourse={learnCourse} />
    </DemoCard>
  );
}
