import './AssignmentPage.css';

const PLATZI_FAKE_API = 'https://fakeapi.platzi.com/';

export function AssignmentPage() {
  return (
    <div className="assignment-page">
      <header className="assignment-page__head">
        <p className="assignment-page__eyebrow">KenaKata.com</p>
        <h1>Capstone assignment — modern e-commerce storefront</h1>
        <p>
          Build a production-style storefront with <strong>Next.js App Router</strong> and the{' '}
          <a href={PLATZI_FAKE_API} rel="noreferrer noopener" target="_blank">
            Platzi Fake API
          </a>
          . The goal is to show scalable frontend architecture, modern Next.js patterns, and solid engineering habits.
        </p>
      </header>

      <aside className="assignment-page__callout" aria-label="Submission">
        <strong>Submission date:</strong> 19 May 2026. Submit a public GitHub repo, README, setup and env docs, and a
        deployment URL.
      </aside>

      <section className="assignment-page__section" id="stack" aria-labelledby="stack-heading">
        <h2 id="stack-heading">Tech stack</h2>
        <h3>Required</h3>
        <ul>
          <li>Next.js (latest stable)</li>
          <li>TypeScript</li>
          <li>App Router</li>
          <li>Tailwind CSS</li>
        </ul>
        <h3>Nice to have</h3>
        <ul>
          <li>React Hook Form</li>
          <li>Zod</li>
          <li>Vitest or Jest</li>
        </ul>
      </section>

      <section className="assignment-page__section" id="api" aria-labelledby="api-heading">
        <h2 id="api-heading">API</h2>
        <p>
          Base:{' '}
          <a href={PLATZI_FAKE_API} rel="noreferrer noopener" target="_blank">
            {PLATZI_FAKE_API}
          </a>
        </p>
        <p>You may use products, categories, users, and auth APIs.</p>
      </section>

      <section className="assignment-page__section" id="storefront" aria-labelledby="storefront-heading">
        <h2 id="storefront-heading">Public storefront</h2>

        <h3>Home page</h3>
        <ul>
          <li>Hero section</li>
          <li>Featured products</li>
          <li>Categories section</li>
          <li>Responsive layout</li>
          <li>Theme change option (for example light / dark)</li>
        </ul>

        <h3>Product listing</h3>
        <ul>
          <li>Product grid</li>
          <li>Search</li>
          <li>Filtering</li>
          <li>Sorting</li>
          <li>Wishlist — optional</li>
          <li>Product reviews — optional</li>
          <li>Pagination or infinite scroll</li>
          <li>Loading, empty, and error states</li>
        </ul>

        <h3>Product details</h3>
        <ul>
          <li>Product gallery</li>
          <li>Product information</li>
          <li>Related products</li>
          <li>Add to cart</li>
        </ul>

        <h3>Cart and checkout</h3>
        <ul>
          <li>Add, remove, and update cart items</li>
          <li>Persist cart state</li>
          <li>Checkout form</li>
          <li>Form validation</li>
          <li>Mock payment flow</li>
        </ul>
      </section>

      <section className="assignment-page__section" id="auth" aria-labelledby="auth-heading">
        <h2 id="auth-heading">Authentication</h2>
        <ul>
          <li>Login and register</li>
          <li>Protected routes</li>
          <li>Session persistence</li>
          <li>Logout</li>
          <li>Middleware protection</li>
        </ul>
      </section>

      <section className="assignment-page__section" id="admin" aria-labelledby="admin-heading">
        <h2 id="admin-heading">Admin dashboard — optional</h2>

        <h3>Product management</h3>
        <ul>
          <li>Create, edit, and delete products</li>
          <li>Form validation</li>
        </ul>

        <h3>Category management</h3>
        <ul>
          <li>Full CRUD</li>
        </ul>

        <h3>User management</h3>
        <ul>
          <li>User listing</li>
          <li>Search and filter</li>
          <li>Pagination</li>
        </ul>
      </section>

      <section className="assignment-page__section" id="nextjs" aria-labelledby="nextjs-heading">
        <h2 id="nextjs-heading">Next.js topics to demonstrate</h2>
        <ul>
          <li>App Router architecture</li>
          <li>Server versus client components</li>
          <li>SSR, SSG, and ISR where they fit</li>
          <li>Dynamic routes</li>
          <li>Nested layouts</li>
          <li>Loading and error boundaries</li>
          <li>Data fetching patterns</li>
          <li>Caching and revalidation</li>
        </ul>
      </section>

      <section className="assignment-page__section" id="quality" aria-labelledby="quality-heading">
        <h2 id="quality-heading">Performance and quality</h2>
        <ul>
          <li>Responsive design</li>
          <li>Image optimization</li>
          <li>Clean architecture</li>
          <li>Type safety</li>
          <li>Reusable components</li>
          <li>Error handling</li>
        </ul>
        <h3>Nice to have</h3>
        <ul>
          <li>Advanced animations</li>
          <li>Unit or E2E tests</li>
          <li>Docker-based deployment process</li>
        </ul>
      </section>

      <section className="assignment-page__section" id="review" aria-labelledby="review-heading">
        <h2 id="review-heading">Review criteria</h2>
        <dl className="assignment-page__criteria">
          <div>
            <dt>Architecture and scalability</dt>
            <dd>Folder structure, reusability, maintainability, separation of concerns.</dd>
          </div>
          <div>
            <dt>Next.js knowledge</dt>
            <dd>App Router usage, rendering choices, server and client component boundaries.</dd>
          </div>
          <div>
            <dt>Frontend engineering</dt>
            <dd>UI quality, state management, forms, responsiveness.</dd>
          </div>
          <div>
            <dt>Code quality</dt>
            <dd>Readability, type safety, consistency.</dd>
          </div>
          <div>
            <dt>Performance</dt>
            <dd>Optimization, Lighthouse awareness, efficient rendering.</dd>
          </div>
          <div>
            <dt>Reliability</dt>
            <dd>Error handling, edge cases, testing quality.</dd>
          </div>
        </dl>
      </section>

      <section className="assignment-page__section" id="submission" aria-labelledby="submission-heading">
        <h2 id="submission-heading">Submission requirements</h2>
        <p>You must submit:</p>
        <ul>
          <li>GitHub repository</li>
          <li>
            <code>README.md</code>
          </li>
          <li>Setup instructions</li>
          <li>Environment variable documentation</li>
          <li>Deployment URL</li>
        </ul>

        <h3>README must include</h3>
        <ul>
          <li>Project overview</li>
          <li>Architecture explanation</li>
          <li>Rendering strategy decisions</li>
          <li>Tradeoffs made</li>
          <li>Performance considerations</li>
          <li>Challenges faced</li>
          <li>Future improvements</li>
        </ul>
      </section>

      <footer className="assignment-page__foot">
        <p>
          Short warm-up tasks for each React lesson still live at the end of every chapter under{' '}
          <strong>Learn React.js</strong>. This page is the single place for the <strong>KenaKata</strong> capstone
          brief.
        </p>
      </footer>
    </div>
  );
}
