import {
  Component,
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useOptimistic,
  useReducer,
  useState,
  useTransition,
} from 'react';
import axios from 'axios';
import {
  BrowserJourneyDemo,
  FacebookReactStoryDemo,
  LegacyProblemsDemo,
  OldWebsitesWorkedDemo,
} from './PhaseZeroDemos';

/* ---------- shared UI primitives for demos ---------- */

function DemoCard({ title, children }) {
  return (
    <div className="demo-card">
      {title ? <h4 className="demo-card__title">{title}</h4> : null}
      <div className="demo-card__body">{children}</div>
    </div>
  );
}

/* ---------- ch-20 error boundary ---------- */

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <DemoCard title="Fallback UI">
          <p>Something went wrong—this is the error boundary speaking.</p>
          <button type="button" onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </DemoCard>
      );
    }
    return this.props.children;
  }
}

function BuggyToggle() {
  const [broken, setBroken] = useState(false);
  if (broken) {
    throw new Error('Demo crash');
  }
  return (
    <button type="button" onClick={() => setBroken(true)}>
      Trigger render error
    </button>
  );
}

/* ---------- ch-16 theme context ---------- */

const ThemeCtx = createContext({ theme: 'light', toggle: () => {} });

function ThemeDemoInner() {
  const { theme, toggle } = useContext(ThemeCtx);
  return (
    <DemoCard title="Theme context">
      <p>Current theme: {theme}</p>
      <button type="button" onClick={toggle}>
        Toggle theme
      </button>
    </DemoCard>
  );
}

function ThemeDemo() {
  const [theme, setTheme] = useState('light');
  const value = useMemo(
    () => ({
      theme,
      toggle: () => setTheme((t) => (t === 'light' ? 'dark' : 'light')),
    }),
    [theme],
  );
  return (
    <ThemeCtx.Provider value={value}>
      <div className={theme === 'dark' ? 'demo-surface demo-surface--dark' : 'demo-surface'}>
        <ThemeDemoInner />
      </div>
    </ThemeCtx.Provider>
  );
}

/* ---------- ch-18 custom hook ---------- */

function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  return { count, increment };
}

function CustomHookDemo() {
  const { count, increment } = useCounter(0);
  return (
    <DemoCard title="useCounter custom hook">
      <p>Count: {count}</p>
      <button type="button" onClick={increment}>
        +1
      </button>
    </DemoCard>
  );
}

/* ---------- ch-19 memo demo ---------- */

const ExpensiveRow = memo(function ExpensiveRow({ label }) {
  return <li>{label}</li>;
});

function MemoDemo() {
  const [items] = useState([
    { id: 1, label: 'Write release notes', done: false },
    { id: 2, label: 'Ship TaskFlow beta', done: true },
    { id: 3, label: 'Celebrate', done: false },
  ]);
  const visible = useMemo(() => items.filter((i) => !i.done), [items]);
  return (
    <DemoCard title="memo + useMemo">
      <p>Open React DevTools Profiler to see skipped re-renders in real apps.</p>
      <ul>
        {visible.map((i) => (
          <ExpensiveRow key={i.id} label={i.label} />
        ))}
      </ul>
    </DemoCard>
  );
}

/* ---------- ch-21 optimistic + transition ---------- */

function OptimisticDemo() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Sketch UI', pending: false },
    { id: 2, title: 'Wire API', pending: false },
  ]);
  const [optimisticTasks, addOptimisticTask] = useOptimistic(
    tasks,
    (state, newTitle) => [...state, { id: `pending-${Date.now()}`, title: newTitle, pending: true }],
  );
  const [isPending, startTransition] = useTransition();

  const enqueue = () => {
    const title = 'New TaskFlow item';
    // Instant UI row while the transition waits on the fake network
    addOptimisticTask(title);
    startTransition(async () => {
      await new Promise((r) => setTimeout(r, 600));
      setTasks((prev) => [
        ...prev.filter((t) => !String(t.id).startsWith('pending-')),
        { id: Date.now(), title, pending: false },
      ]);
    });
  };

  return (
    <DemoCard title="useOptimistic + useTransition">
      <p className="demo-muted">{isPending ? 'Saving in background…' : 'Ready'}</p>
      <ul>
        {optimisticTasks.map((t) => (
          <li key={t.id} className={t.pending ? 'demo-pending' : ''}>
            {t.title}
            {t.pending ? ' (optimistic)' : ''}
          </li>
        ))}
      </ul>
      <button type="button" className="demo-btn demo-btn--primary" onClick={enqueue}>
        Add with optimistic row
      </button>
    </DemoCard>
  );
}

/* ---------- ch-14 axios fetch ---------- */

function FetchDemo() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setStatus('loading');
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos', {
          params: { _limit: 4 },
        });
        if (!cancelled) {
          setItems(data);
          setStatus('done');
        }
      } catch {
        if (!cancelled) setStatus('error');
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (status === 'loading') return <DemoCard title="Axios + JSONPlaceholder">Loading…</DemoCard>;
  if (status === 'error') return <DemoCard title="Axios + JSONPlaceholder">Network error</DemoCard>;

  return (
    <DemoCard title="Axios + JSONPlaceholder">
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </DemoCard>
  );
}

function ConditionalPhaseDemo() {
  const [phase, setPhase] = useState('loading');
  useEffect(() => {
    const t = setTimeout(() => setPhase('ready'), 900);
    return () => clearTimeout(t);
  }, []);
  const user = phase === 'ready' ? { name: 'Ada' } : null;
  return (
    <DemoCard title="Conditional UI">
      {phase === 'loading' ? <p>Checking session…</p> : null}
      {phase === 'ready' ? (
        user ? (
          <p>Welcome, {user.name}</p>
        ) : (
          <p>Please sign in</p>
        )
      ) : null}
    </DemoCard>
  );
}

/* ---------- registry ---------- */

export function ChapterDemo({ slug }) {
  switch (slug) {
    case 'ch-00-url-to-pixels':
      return <BrowserJourneyDemo />;
    case 'ch-00-how-old-sites':
      return <OldWebsitesWorkedDemo />;
    case 'ch-00-old-style-problems':
      return <LegacyProblemsDemo />;
    case 'ch-00-facebook-react-story':
      return <FacebookReactStoryDemo />;
    case 'ch-01':
      return (
        <DemoCard title="Hello React App">
          <main>
            <h1>Hello React</h1>
            <p>UI updates when data changes—not when you imperatively poke the DOM.</p>
          </main>
        </DemoCard>
      );
    case 'ch-02':
      return (
        <DemoCard title="Scripts you will run daily">
          <pre className="demo-pre">
            {`{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}`}
          </pre>
        </DemoCard>
      );
    case 'ch-03':
      return (
        <DemoCard title="Beginner folder map">
          <pre className="demo-pre demo-pre--tight">
            {`src/
 ├── assets/
 ├── components/
 ├── pages/
 ├── hooks/
 ├── context/
 ├── services/
 ├── layouts/
 ├── utils/
 ├── styles/
 ├── App.jsx
 └── main.jsx`}
          </pre>
        </DemoCard>
      );
    case 'ch-04': {
      const hour = new Date().getHours();
      const tone = hour < 12 ? 'morning' : 'day';
      return (
        <DemoCard title="JSX expressions">
          <>
            <h1 className="demo-title">Welcome to React</h1>
            <p>Good {tone}! The UI is just a function of data.</p>
          </>
        </DemoCard>
      );
    }
    case 'ch-05':
      return (
        <DemoCard title="Composable buttons">
          <div className="demo-row">
            <button type="button" className="demo-btn demo-btn--primary">
              Save
            </button>
            <button type="button" className="demo-btn demo-btn--ghost">
              Cancel
            </button>
          </div>
        </DemoCard>
      );
    case 'ch-06':
      return (
        <DemoCard title="Dynamic styles">
          <div className="demo-row">
            <span className="demo-pill demo-pill--on">Active</span>
            <span className="demo-pill">Inactive</span>
          </div>
        </DemoCard>
      );
    case 'ch-07':
      return (
        <DemoCard title="Mapped list">
          <ul>
            {[
              { id: 'a', title: 'Draft roadmap' },
              { id: 'b', title: 'Ship TaskFlow MVP' },
            ].map((task) => (
              <li key={task.id}>{task.title}</li>
            ))}
          </ul>
        </DemoCard>
      );
    case 'ch-08':
      return <ConditionalPhaseDemo />;
    case 'ch-09':
      return (
        <DemoCard title="Live search input">
          <input
            className="demo-input"
            type="search"
            placeholder="Search tasks"
            onChange={(e) => {
              // Log to console so learners see the event object flow
              console.info('search:', e.target.value);
            }}
          />
          <p className="demo-muted">Open DevTools console while typing.</p>
        </DemoCard>
      );
    case 'ch-10':
      return (
        <DemoCard title="Counter state">
          <CounterInner />
        </DemoCard>
      );
    case 'ch-10-lifting-state':
      return (
        <DemoCard title="Lifted state — two buttons, one count">
          <LiftStateDemo />
        </DemoCard>
      );
    case 'ch-11':
      return (
        <DemoCard title="Controlled task form">
          <TaskFormDemo />
        </DemoCard>
      );
    case 'ch-12':
      return (
        <DemoCard title="Resize listener">
          <WindowWidthDemo />
        </DemoCard>
      );
    case 'ch-13':
      return (
        <DemoCard title="TaskFlow architecture">
          <pre className="demo-pre demo-pre--tight">
            {`src/
 ├── api/
 ├── components/ui|task|shared
 ├── pages/
 ├── routes/
 ├── context/
 ├── hooks/
 ├── layouts/
 ├── constants/
 ├── utils/
 └── styles/`}
          </pre>
        </DemoCard>
      );
    case 'ch-14':
      return <FetchDemo />;
    case 'ch-15':
      return <MiniRouterDemo />;
    case 'ch-16':
      return <ThemeDemo />;
    case 'ch-17':
      return <ReducerDemo />;
    case 'ch-18':
      return <CustomHookDemo />;
    case 'ch-19':
      return <MemoDemo />;
    case 'ch-20':
      return (
        <ErrorBoundary>
          <DemoCard title="Error boundary sandbox">
            <BuggyToggle />
          </DemoCard>
        </ErrorBoundary>
      );
    case 'ch-21':
      return <OptimisticDemo />;
    case 'ch-22':
      return <FakeAuthDemo />;
    case 'ch-23':
      return (
        <DemoCard title="Vite env (safe keys only)">
          <ul className="demo-kv">
            <li>
              <span>MODE</span>
              <code>{import.meta.env.MODE}</code>
            </li>
            <li>
              <span>VITE_APP_NAME</span>
              <code>{import.meta.env.VITE_APP_NAME ?? '(set in .env)'}</code>
            </li>
          </ul>
        </DemoCard>
      );
    case 'ch-24':
      return (
        <DemoCard title="Variant buttons">
          <div className="demo-row">
            <button type="button" className="demo-btn demo-btn--primary">
              Primary
            </button>
            <button type="button" className="demo-btn demo-btn--ghost">
              Ghost
            </button>
            <button type="button" className="demo-btn demo-btn--danger">
              Danger
            </button>
          </div>
        </DemoCard>
      );
    case 'ch-25':
      return (
        <DemoCard title="Immutable mental model">
          <ul className="demo-checklist">
            <li>Spread or map to copy arrays before changing them.</li>
            <li>Use stable keys from server ids, not indexes.</li>
            <li>Keep handlers out of JSX when they grow past a few lines.</li>
          </ul>
        </DemoCard>
      );
    case 'ch-26':
      return (
        <DemoCard title="Testing mindset">
          <p>Install Vitest + Testing Library, then assert what users see.</p>
          <pre className="demo-pre">
            {`npm i -D vitest @testing-library/react @testing-library/jest-dom`}
          </pre>
        </DemoCard>
      );
    case 'ch-27':
      return (
        <DemoCard title="Ship checklist">
          <ol className="demo-checklist demo-checklist--ordered">
            <li>npm run build</li>
            <li>npm run preview locally</li>
            <li>Upload dist/ or connect Git to Vercel / Netlify</li>
            <li>Configure VITE_* env vars in hosting UI</li>
          </ol>
        </DemoCard>
      );
    default:
      return <DemoCard title="Demo">Select a lecture from the sidebar.</DemoCard>;
  }
}

function CounterInner() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" className="demo-btn demo-btn--primary" onClick={() => setCount((c) => c + 1)}>
        Increase
      </button>
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button type="button" className="demo-btn demo-btn--ghost" onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

function LiftStateDemo() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <p className="demo-muted">State lives in the parent. Both buttons read the same props.</p>
      <div className="demo-row">
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
      </div>
    </div>
  );
}

function TaskFormDemo() {
  const [title, setTitle] = useState('');
  const [tasks, setTasks] = useState(['Welcome learners']);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) return;
    setTasks((prev) => [...prev, title.trim()]);
    setTitle('');
  };

  return (
    <form className="demo-form" onSubmit={handleSubmit}>
      <input
        className="demo-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
      />
      <button type="submit" className="demo-btn demo-btn--primary">
        Add
      </button>
      <ul>
        {tasks.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </form>
  );
}

function WindowWidthDemo() {
  const [width, setWidth] = useState(() => window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return <p>Viewport width: {width}px</p>;
}

function MiniRouterDemo() {
  const [path, setPath] = useState('/');
  return (
    <DemoCard title="Client navigation (simulated)">
      <nav className="demo-nav">
        <button type="button" className={path === '/' ? 'is-active' : ''} onClick={() => setPath('/')}>
          Home
        </button>
        <button
          type="button"
          className={path === '/tasks' ? 'is-active' : ''}
          onClick={() => setPath('/tasks')}
        >
          Tasks
        </button>
      </nav>
      {path === '/' ? <p>Landing route</p> : <p>Task board route</p>}
    </DemoCard>
  );
}

const initialReducer = { tasks: [{ id: 1, title: 'Learn useReducer' }] };

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { tasks: [...state.tasks, action.payload] };
    default:
      return state;
  }
}

function ReducerDemo() {
  const [state, dispatch] = useReducer(taskReducer, initialReducer);
  return (
    <DemoCard title="Predictable updates">
      <ul>
        {state.tasks.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
      <button
        type="button"
        className="demo-btn demo-btn--primary"
        onClick={() =>
          dispatch({
            type: 'ADD',
            payload: { id: Date.now(), title: 'Dispatch another action' },
          })
        }
      >
        Dispatch ADD
      </button>
    </DemoCard>
  );
}

function FakeAuthDemo() {
  const [user, setUser] = useState(null);
  return (
    <DemoCard title="Fake auth state machine">
      {user ? (
        <>
          <p>Signed in as {user}</p>
          <button type="button" onClick={() => setUser(null)}>
            Logout
          </button>
        </>
      ) : (
        <button type="button" className="demo-btn demo-btn--primary" onClick={() => setUser('taskflow.dev')}>
          Login (demo)
        </button>
      )}
    </DemoCard>
  );
}
