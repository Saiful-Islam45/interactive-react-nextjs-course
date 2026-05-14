import { Link } from 'react-router-dom';
import { nextjsLabInteractives } from '../data/nextjsLabInteractives';
import { nextjsLabLectures } from '../data/nextjsLabLectures';
import './NextjsLabDashboard.css';

const firstLecture = nextjsLabLectures[0];
const firstLab = nextjsLabInteractives[0];
const totalPracticalSteps = nextjsLabInteractives.reduce((n, lab) => n + (lab.steps?.length ?? 0), 0);

export function NextjsLabDashboard() {
  const phases = [...new Set(nextjsLabLectures.map((l) => l.phase))];

  return (
    <div className="nextjs-lab-dashboard">
      <header className="nextjs-lab-dashboard__hero">
        <p className="nextjs-lab-dashboard__kicker">Progressive build path · App Router · copy code as you go</p>
        <h1 className="nextjs-lab-dashboard__title">Next.js Lab learning dashboard</h1>
        <p className="nextjs-lab-dashboard__lead">
          Start with the <strong>practical labs</strong>: eleven topics from <code>npx create-next-app</code> through layouts, pages,
          error/not-found, server and client components, fetching, your own API, cache revalidation, and NextAuth. Each lab is many
          small steps—do the step in a real Next project, read the one-line idea, paste the code. Use the lecture list when you want
          extra reading beside the labs.
        </p>
        <div className="nextjs-lab-dashboard__actions">
          <Link className="nextjs-lab-dashboard__btn nextjs-lab-dashboard__btn--primary" to={`/nextjs-lab/labs/${firstLab.slug}`}>
            Start practical lab 1
          </Link>
          <Link className="nextjs-lab-dashboard__btn" to="/nextjs-lab/labs">
            View all practical labs
          </Link>
          <Link className="nextjs-lab-dashboard__btn" to="/nextjs-lab/lectures">
            Lecture list (extra depth)
          </Link>
          <Link className="nextjs-lab-dashboard__btn" to={`/nextjs-lab/lectures/${firstLecture.slug}`}>
            First written lecture
          </Link>
        </div>
      </header>

      <section className="nextjs-lab-dashboard__grid" aria-label="Course snapshot">
        <article className="nextjs-lab-dashboard__card">
          <h2>Practical track (do this first)</h2>
          <p>
            Labs 1–11 mirror how you would onboard a junior: scaffold, shared layout, new pages, error UI, 404 handling, default server
            components, client islands, server fetch, POST API + client UI, <code>revalidatePath</code>, then Auth.js / NextAuth wiring.
          </p>
        </article>
        <article className="nextjs-lab-dashboard__card">
          <h2>Numbers at a glance</h2>
          <ul className="nextjs-lab-dashboard__stats">
            <li>
              <strong>{nextjsLabInteractives.length}</strong> progressive practical labs
            </li>
            <li>
              <strong>{totalPracticalSteps}</strong> on-screen steps with code blocks
            </li>
            <li>
              <strong>{nextjsLabLectures.length}</strong> written lectures (optional)
            </li>
            <li>
              <strong>{phases.length}</strong> lecture phases
            </li>
          </ul>
        </article>
        <article className="nextjs-lab-dashboard__card">
          <h2>How to use this space</h2>
          <ol className="nextjs-lab-dashboard__steps">
            <li>Open Lab 1 in a second window while your editor shows the new Next app.</li>
            <li>Advance step by step; use Copy code, then run dev and confirm the change.</li>
            <li>Only move to the next lab when the current one works on your machine.</li>
            <li>Use “Learn Next.js” in the header if you want parallel vocabulary lessons.</li>
          </ol>
        </article>
      </section>

      <section className="nextjs-lab-dashboard__phases" aria-label="Lecture phases overview">
        <h2>Lecture phase map (optional reading)</h2>
        <div className="nextjs-lab-dashboard__phase-list">
          {phases.map((name) => (
            <div key={name} className="nextjs-lab-dashboard__phase-chip">
              <p>{name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
