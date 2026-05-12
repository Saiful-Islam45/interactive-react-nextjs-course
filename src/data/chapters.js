/**
 * Full course plan: React 19 + TaskFlow roadmap (meta only in this app).
 * Each chapter drives sidebar, theory bullets, code sample, and live demo.
 */
export const chapters = [
  {
    slug: 'ch-00-url-to-pixels',
    phase: 'Phase 0 — Simple: browser and React story',
    number: 0,
    navLabel: '0.1',
    title: 'From a web address to what you see on screen',
    heroImage: '/images/critical-rendering-path.png',
    heroAlt:
      'Picture: HTML makes the DOM tree. CSS makes the CSSOM. Together they make the Render Tree. Then Layout, then Paint.',
    heroCaption:
      'This picture is the “critical rendering path”. It means: the browser must do these steps to show one screen.',
    bullets: [
      'You type a web address (URL). The browser asks DNS: “What is the IP number for this name?”',
      'The browser talks to the server (connection + security). Then it asks for files with HTTP.',
      'HTML file comes first. The browser builds the DOM — a tree of tags you can see in DevTools.',
      'CSS file comes next. The browser builds the CSSOM — which style rules match which parts.',
      'DOM and CSSOM join to make a Render Tree. That list is only what will be drawn on screen.',
      'If something is hidden (for example display:none), it often does not go in the Render Tree.',
      'Layout step: the browser measures every box — width, height, position.',
      'Paint step: the browser draws pixels — text, colour, images.',
      'If the browser does Layout and Paint again and again, the page feels slow or stuck.',
      'JavaScript can change the DOM at any time. If we are not careful, we force extra Layout and Paint work.',
      'Later, React helps us update the page in a cleaner plan — not random DOM poking.',
    ],
    code: `// Still not React — only what the browser already does:

// 1) Ask server → HTML arrives
// 2) Parse HTML → DOM tree in memory
// 3) Parse CSS → styles attach to nodes
// 4) Build Render Tree → Layout → Paint on screen

// Later React helps you group small changes
// so the browser does not redo everything for every click.`,
    challenge:
      'Open Chrome DevTools → Performance. Reload one website once. Try to see where Script, Layout, or Paint takes time.',
  },
  {
    slug: 'ch-00-how-old-sites',
    phase: 'Phase 0 — Simple: browser and React story',
    number: 0,
    navLabel: '0.2',
    title: 'How old (legacy) websites usually worked',
    hideCode: true,
    bullets: [
      'The server sent HTML. The browser showed the page.',
      'JavaScript waited for clicks and API data. Then it changed the page by hand in the DOM.',
      'Common style: find one element, change a class, or push HTML as a long string.',
      'Each new feature added more patches on the same page. Quick to write at first. Hard to fix later.',
    ],
    challenge:
      'Draw 4 boxes on paper: Server → HTML page → JavaScript → DOM changes. Put one short label in each box.',
  },
  {
    slug: 'ch-00-old-style-problems',
    phase: 'Phase 0 — Simple: browser and React story',
    number: 0,
    navLabel: '0.3',
    title: 'What went wrong with that old style',
    hideCode: true,
    bullets: [
      'It was hard to know which line of code changed one part of the screen.',
      'Important data lived in many places: global variables, random variables, and inside the DOM.',
      'Bad loops did this: read size from the page, then change style, then read again — very slow on big pages.',
      'Long HTML strings did not match the CSS another person changed. Small silent bugs appeared.',
      'When the team grew, everyone touched the same page. Mistakes and fear of changing code grew too.',
    ],
    challenge:
      'Pick one problem from the list. Write one real example from a school or office website you have seen.',
  },
  {
    slug: 'ch-00-facebook-react-story',
    phase: 'Phase 0 — Simple: browser and React story',
    number: 0,
    navLabel: '0.4',
    title: 'Facebook got very big — short story of how React started',
    hideCode: true,
    bullets: [
      'Facebook had one page with many live parts: news feed, chat, notifications — always updating.',
      'Changing the DOM by hand did not work when thousands of engineers worked on the same product.',
      'Jordan Walke made an early version of React: build UI from small pieces and from changing data.',
      'Some ideas came from older Facebook tools (like XHP): keep layout and logic closer for big teams.',
      'In 2013 Facebook shared React with the world. Main idea: UI follows state; the library updates the DOM for you.',
      'You do not need Facebook-size traffic. Any growing app feels the same pain: “Who changed this part of the page?”',
    ],
    challenge:
      'Write 5–7 simple lines in English (or your own language first, then English). Say how “too many hand-made DOM changes” can break a feed, inbox, or dashboard you use daily.',
  },
  {
    slug: 'ch-01',
    phase: 'Phase 1 — React basics',
    number: 1,
    title: 'What is React?',
    relatedDocs: [
      { label: 'Describe the UI (react.dev)', href: 'https://react.dev/learn/describing-the-ui' },
      { label: 'Learn React — start page', href: 'https://react.dev/learn' },
    ],
    bullets: [
      'React is a library for building user interfaces (what people see and click).',
      'You describe what should be on the screen. When your data changes, React updates the screen for you.',
      'You build the app from small pieces called components (like Lego blocks).',
      'Many React apps are SPAs: one HTML page loads, then JavaScript swaps the “page” without a full reload. That often feels fast.',
      'React 19 still uses the same big idea: your interface follows your data (especially state, which we learn soon).',
    ],
    code: `function HelloReact() {
  const topic = 'React';

  return (
    <main>
      <h1>Hello {topic}</h1>
      <p>When topic changes, this line updates — you do not hand-edit the DOM.</p>
    </main>
  );
}

export default HelloReact;`,
    challenge: 'Change the greeting text. Add one more line under the title in simple English.',
  },
  {
    slug: 'ch-02',
    phase: 'Phase 1 — React basics',
    number: 2,
    title: 'Set up your computer (Node, npm, Vite)',
    relatedDocs: [
      { label: 'Installation (react.dev)', href: 'https://react.dev/learn/installation' },
      { label: 'Create a new React app', href: 'https://react.dev/learn/creating-a-react-app' },
    ],
    bullets: [
      'You need Node.js on your machine. It runs tools like Vite and the package manager.',
      'npm comes with Node. You use it to install libraries listed in package.json.',
      'Vite is a modern tool: fast refresh while you code, and a build step for production.',
      'Most days you only run a few commands: npm install (first time), npm run dev (while coding), npm run build (before ship).',
      'Create a new app (in terminal): npm create vite@latest my-app -- --template react',
      'Then: cd my-app → npm install → npm run dev',
      'Open the URL Vite prints (often http://localhost:5173). Change App.jsx and watch the page update.',
      'If a command fails, read the red text slowly. Often it is a typo, wrong folder, or Node not installed.',
    ],
    challenge: 'Create a new Vite + React app. Change the welcome text. Find vite.config.js and read what is inside.',
  },
  {
    slug: 'ch-03',
    phase: 'Phase 1 — React basics',
    number: 3,
    title: 'What goes in each folder?',
    relatedDocs: [
      { label: 'Import and export components', href: 'https://react.dev/learn/importing-and-exporting-components' },
    ],
    bullets: [
      'Real teams keep folders tidy so anyone can find files. You should practise the same habit.',
      'src/components — small reusable pieces: buttons, cards, rows.',
      'src/pages (or screens) — full views for one route, like Home or Tasks.',
      'src/hooks — shared logic that uses React hooks (we learn this later).',
      'src/context — shared data for many components (theme, logged-in user).',
      'src/services or src/api — functions that call the network. Keeps fetch logic away from big JSX files.',
      'src/layouts — shells used on many pages: top bar, sidebar, footer.',
      'src/assets — images, fonts.',
      'src/utils — small pure helpers (format date, sort list) with no UI inside.',
      'App.jsx — often the root layout and routes. main.jsx — mounts the app into index.html.',
      'Names can change between companies, but the idea is the same: one job per folder.',
    ],
    challenge: 'On paper, draw a folder map for a simple “TaskFlow” app: pages, components, services.',
  },
  {
    slug: 'ch-04',
    phase: 'Phase 1 — React basics',
    number: 4,
    title: 'JSX — HTML-like code inside JavaScript',
    relatedDocs: [
      { label: 'Writing markup with JSX', href: 'https://react.dev/learn/writing-markup-with-jsx' },
    ],
    bullets: [
      'JSX looks like HTML but it lives inside JavaScript files.',
      'A component must return one root. If you need two siblings without a wrapper div, use a fragment: <> ... </>.',
      'Use curly braces { } to put any JavaScript value or expression inside JSX.',
      'In HTML you write class="". In JSX you write className="" because class is a reserved word in JS.',
      'You can use if/else, ternary ( ? : ), and && to choose what to show.',
    ],
    code: `function Welcome() {
  const hour = new Date().getHours();
  const tone = hour < 12 ? 'morning' : 'day';

  return (
    <>
      <h1 className="title">Welcome to React</h1>
      <p>Good {tone}! The screen follows your data.</p>
    </>
  );
}`,
    challenge: 'Show three short facts about yourself using one fragment <>...</>.',
  },
  {
    slug: 'ch-05',
    phase: 'Phase 1 — React basics',
    number: 5,
    title: 'Components — break the UI into pieces',
    relatedDocs: [
      { label: 'Your first component', href: 'https://react.dev/learn/your-first-component' },
      { label: 'Passing props to a component', href: 'https://react.dev/learn/passing-props-to-a-component' },
    ],
    bullets: [
      'A component is usually a function whose name starts with a capital letter.',
      'It can take inputs called props (like settings for that piece).',
      'Small components are easier to read, test, and reuse on many pages.',
      'One big file with 400 lines is hard for you and hard for your team.',
      'Typical names: Button, Card, TaskRow, Navbar — the name should describe the job.',
    ],
    code: `function Button({ text, variant = 'primary' }) {
  return <button className={variant}>{text}</button>;
}

function Toolbar() {
  return (
    <div>
      <Button text="Save" />
      <Button text="Cancel" variant="ghost" />
    </div>
  );
}`,
    challenge: 'Make a Card component with title and children. Use it twice with different titles.',
  },
  {
    slug: 'ch-06',
    phase: 'Phase 2 — Layout and look',
    number: 6,
    title: 'Styling in React',
    relatedDocs: [{ label: 'Adding styles', href: 'https://react.dev/learn#adding-styles' }],
    bullets: [
      'You can use normal CSS files, CSS modules, or utility classes (for example Tailwind) — the team picks one style.',
      'Global CSS is good for base colours and fonts. Local styles stop parts of the app from fighting each other.',
      'Inline style={{ }} uses a JavaScript object. Keys are camelCase (backgroundColor).',
      'Mobile-first means: design the small screen first, then add wider layouts with media queries.',
      'Design tokens are shared values (main colour, spacing). They keep the product looking consistent.',
    ],
    code: `function Pill({ label, active }) {
  const style = {
    padding: '6px 12px',
    borderRadius: 999,
    border: '1px solid #cbd5e1',
    background: active ? '#0f172a' : '#fff',
    color: active ? '#fff' : '#0f172a',
  };

  return <span style={style}>{label}</span>;
}`,
    challenge: 'Make two pills: one “active”, one not. Try moving colours to CSS variables on :root.',
  },
  {
    slug: 'ch-07',
    phase: 'Phase 2 — Layout and look',
    number: 7,
    title: 'Lists and keys',
    relatedDocs: [{ label: 'Rendering lists', href: 'https://react.dev/learn/rendering-lists' }],
    bullets: [
      'In real apps you often have an array: users, products, tasks.',
      'You turn the array into JSX with .map(). Each item becomes one row or card.',
      'Each child in a list needs a stable key. Prefer id from the server, not the array index.',
      'Why keys matter: React uses them to know which row moved, was added, or was removed.',
      'If the list is empty, show a friendly message (“No tasks yet”) instead of a blank hole.',
    ],
    code: `function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}`,
    challenge: 'When tasks.length === 0, show a short message instead of an empty list.',
  },
  {
    slug: 'ch-08',
    phase: 'Phase 2 — Layout and look',
    number: 8,
    title: 'Show different UI for different situations',
    relatedDocs: [{ label: 'Conditional rendering', href: 'https://react.dev/learn/conditional-rendering' }],
    bullets: [
      'Users see loading, errors, empty data, and success. Plan all of them.',
      'You can use if / else early return, ternary (a ? b : c), or && for small things.',
      'Loading: spinner or “Please wait…”. Error: clear message and maybe a retry button.',
      'If the JSX gets messy, move the condition into a variable or a small helper function above return.',
      'Good apps never leave people staring at a white box with no explanation.',
    ],
    code: `function AuthBanner({ user, status }) {
  if (status === 'loading') {
    return <p>Checking session…</p>;
  }

  return user ? <p>Welcome, {user.name}</p> : <p>Please sign in</p>;
}`,
    challenge: 'Add a fourth branch: status === "error" with a simple error message.',
  },
  {
    slug: 'ch-09',
    phase: 'Phase 3 — Clicks, typing, and state',
    number: 9,
    title: 'Events — clicks, typing, submit',
    relatedDocs: [{ label: 'Responding to events', href: 'https://react.dev/learn/responding-to-events' }],
    bullets: [
      'React uses camelCase names: onClick, onChange, onSubmit.',
      'Your handler is a normal function. React calls it when the event happens.',
      'For inputs, event.target.value is the current text.',
      'For forms, onSubmit on the <form> runs when user presses Enter in a field or clicks submit — remember preventDefault() so the page does not reload.',
      'Give handlers clear names: handleChange, handleSubmit — your future self will thank you.',
    ],
    code: `function SearchBar() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return <input type="search" onChange={handleChange} placeholder="Search tasks" />;
}`,
    challenge: 'Add a button with onClick that logs "hello". Open DevTools → Console to see it.',
  },
  {
    slug: 'ch-10',
    phase: 'Phase 3 — Clicks, typing, and state',
    number: 10,
    title: 'useState — memory for one component',
    relatedDocs: [{ label: "State: a component's memory", href: 'https://react.dev/learn/state-a-components-memory' }],
    bullets: [
      'State is data that can change. When it changes, React draws the component again.',
      'useState gives you [value, setValue]. Always update with setValue — do not change the old value by hand.',
      'If the new value depends on the old one (like count + 1), use the form: setCount((prev) => prev + 1).',
      'Arrays and objects: do not push or mutate in place. Copy, then change (spread [...arr], map, filter).',
      'You will use useState again and again: toggles, form fields, open/closed menus, filters.',
    ],
    code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Increase
      </button>
    </div>
  );
}`,
    challenge: 'Store a list of task titles in state. Add a button that adds one fake task each click.',
  },
  {
    slug: 'ch-10-lifting-state',
    phase: 'Phase 3 — Clicks, typing, and state',
    number: 11,
    title: 'Share one state with many children (lift state up)',
    relatedDocs: [
      { label: 'Sharing data between components', href: 'https://react.dev/learn/sharing-data-between-components' },
    ],
    bullets: [
      'Sometimes two buttons (or two cards) must show the same number. If each child has its own useState, the numbers do not stay in sync.',
      'Fix: keep the data in the parent. Pass the value down with props. Pass the updater down as a prop too (for example onClick or handleClick).',
      'Props flow down. The child calls your function. The parent runs setState. Then both children get new props.',
      'This pattern is called "lifting state up". It is the normal way to share data between sibling components.',
      'If a prop name looks like a DOM event name (for example onClick), that is fine — it is just a prop on your own component.',
    ],
    code: `import { useState } from 'react';

function MyButton({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}`,
    challenge:
      'On paper, draw three boxes: Parent (state) → Left child (props) → Right child (props). Add one arrow for props down and one for "event up".',
  },
  {
    slug: 'ch-11',
    phase: 'Phase 3 — Clicks, typing, and state',
    number: 12,
    title: 'Forms — controlled inputs',
    relatedDocs: [{ label: 'Reacting to input with state', href: 'https://react.dev/learn/reacting-to-input-with-state' }],
    bullets: [
      'Controlled input: the input’s value comes from React state, and onChange writes back to state.',
      'That way React is the single source of truth — not the DOM alone.',
      'Trim user text before save. Empty string after trim means “do nothing”.',
      'Disable the submit button while saving if you want to stop double clicks.',
      'Later you connect the same pattern to login, search, and “new task” forms.',
    ],
    code: `import { useState } from 'react';

function TaskForm({ onCreate }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) return;
    onCreate(title.trim());
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}`,
    challenge: 'Add a second field (for example “notes”). Do not submit if notes are empty.',
  },
  {
    slug: 'ch-12',
    phase: 'Phase 3 — Clicks, typing, and state',
    number: 13,
    title: 'useEffect — talk to the world outside React',
    relatedDocs: [{ label: 'Synchronizing with Effects', href: 'https://react.dev/learn/synchronizing-with-effects' }],
    bullets: [
      'useEffect runs after the screen paints. Use it for things that are not pure UI: timers, subscriptions, fetching data.',
      'The second argument is the dependency array. [] means “run once when this component mounts”.',
      '[userId] means “run again when userId changes”.',
      'Return a cleanup function to remove listeners, clear timers, or ignore old network results.',
      'Do not put side effects directly in the render body — keep render predictable.',
      'If ESLint warns about missing dependencies, fix the real bug — do not silence the rule without a reason.',
      'Beginner mistake: forgetting cleanup → duplicate listeners or memory leaks.',
    ],
    code: `import { useEffect, useState } from 'react';

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return <p>Viewport width: {width}px</p>;
}`,
    challenge: 'Use useEffect to log “mounted” once. Return a cleanup that logs “unmounted”.',
  },
  {
    slug: 'ch-13',
    phase: 'Phase 4 — TaskFlow-style app',
    number: 14,
    title: 'How to organise a bigger project',
    bullets: [
      'When the app grows, random file names hurt everyone. Think in features: tasks, auth, settings.',
      'Keep “dumb” UI in components. Keep “smart” loading and saving in hooks or services.',
      'Routing files can list all paths in one place so the team sees the whole map.',
      'Constants (route names, labels) in one file reduce typos.',
      'Pure helpers (sort, format) are easy to unit test — keep them away from JSX noise.',
      'If one folder has twenty files, consider subfolders by screen or by role.',
    ],
    challenge: 'Pick one screen from your practice app. List which files you would touch to add a new button that saves data.',
  },
  {
    slug: 'ch-14',
    phase: 'Phase 4 — TaskFlow-style app',
    number: 15,
    title: 'Load data from the internet',
    bullets: [
      'Browsers load data with fetch or libraries like axios. Both use Promises (async/await).',
      'Always plan three UI states: loading, error, success. Never assume the request finished immediately.',
      'Try/catch around await handles network failures and bad JSON.',
      'If the user leaves the page before the response arrives, avoid calling setState on an unmounted component (use a “cancelled” flag or AbortController).',
      'JSONPlaceholder is a free fake API — good for practice without your own backend.',
      'Pick one style in the project: either mostly fetch or mostly axios — mixed styles confuse new people.',
    ],
    code: `import { useEffect, useState } from 'react';

function RemoteTodos() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const load = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
      const data = await response.json();
      setItems(data);
    };

    load();
  }, []);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}`,
    challenge: 'Add loading and error state. Show a message for each. (You can fake an error with a bad URL to test.)',
  },
  {
    slug: 'ch-15',
    phase: 'Phase 4 — TaskFlow-style app',
    number: 16,
    title: 'React Router — URLs inside a SPA',
    bullets: [
      'Each URL can show a different main component: /home, /tasks, /login.',
      'Link is like <a> but without full page reload — better for SPA speed.',
      'useNavigate() moves the user in code (for example after login).',
      'Nested routes let you reuse one layout (sidebar) for many inner pages.',
      'Params like /tasks/:id let one screen show one item’s details.',
    ],
    code: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Shell() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Landing</h1>} />
        <Route path="/tasks" element={<h1>Task board</h1>} />
      </Routes>
    </BrowserRouter>
  );
}`,
    challenge: 'Add a route /about with a short About page. Link to it from the nav.',
  },
  {
    slug: 'ch-16',
    phase: 'Phase 4 — TaskFlow-style app',
    number: 17,
    title: 'Context — share data without passing props through every layer',
    bullets: [
      'When many deep children need the same thing (theme, language, current user), passing props through every level is tiring. That is called “prop drilling”.',
      'Context lets a parent provide a value. Any child below can read it with useContext.',
      'Split big topics: ThemeContext and AuthContext instead of one giant bag of everything.',
      'Keep the object you pass stable when possible (useMemo) so children do not re-render for no reason.',
      'Heavy business logic still lives in hooks or services — context is mainly for sharing values.',
    ],
    code: `import { createContext, useContext, useMemo, useState } from 'react';

const ThemeContext = createContext('light');

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);`,
    challenge: 'Make a second small context for a fake user name. Read it in a child component.',
  },
  {
    slug: 'ch-17',
    phase: 'Phase 4 — TaskFlow-style app',
    number: 18,
    title: 'useReducer — many updates in one place',
    bullets: [
      'When several pieces of state change together (wizard steps, big task board), many useState calls get noisy.',
      'useReducer works like Redux in miniature: you send an action, a reducer returns the next state.',
      'The reducer must be pure — same input always same output, no fetch inside.',
      'Good action names: ADD_TASK, REMOVE_TASK, SET_FILTER — easy to read in logs.',
      'You do not have to use it on day one. Reach for it when updates get hard to follow.',
    ],
    code: `import { useReducer } from 'react';

const initial = { tasks: [] };

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { tasks: [...state.tasks, action.payload] };
    default:
      return state;
  }
}

function Board() {
  const [state, dispatch] = useReducer(reducer, initial);
  return <pre>{JSON.stringify(state, null, 2)}</pre>;
}`,
    challenge: 'Add REMOVE and TOGGLE_DONE actions. Always return a new state object or array.',
  },
  {
    slug: 'ch-18',
    phase: 'Phase 5 — Going deeper',
    number: 19,
    title: 'Custom hooks — reuse logic',
    bullets: [
      'If two screens share the same useState + useEffect pattern, copy-paste is risky.',
      'A custom hook is a function whose name starts with “use”. It can call other hooks.',
      'It should return data and functions, not big JSX trees (that stays in components).',
      'Examples: useWindowSize, useLocalStorage, useFetchTasks.',
      'Same rules as hooks: only call hooks at the top level of your custom hook, not inside conditions.',
    ],
    code: `import { useCallback, useState } from 'react';

export function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = useCallback(() => setCount((c) => c + 1), []);

  return { count, increment };
}`,
    challenge: 'Write useToggle: returns [value, toggle] where toggle flips true/false.',
  },
  {
    slug: 'ch-19',
    phase: 'Phase 5 — Going deeper',
    number: 20,
    title: 'Speed — when to optimise',
    bullets: [
      'React is already fast for many apps. Do not wrap everything in memo on day one.',
      'memo on a component skips re-render if props are shallow-equal — helpful for heavy lists.',
      'useMemo remembers a calculated value until dependencies change.',
      'useCallback remembers a function identity — useful when you pass callbacks to memoised children.',
      'lazy() + Suspense can split code so the first load is smaller; heavy screens load later.',
      'Use React DevTools Profiler to see what is actually slow before you change code.',
      'Slow list? Keys, less work per row, virtualisation libraries — in that order after you measure.',
    ],
    challenge: 'Record one Profiler session on a screen with a list. Note which component took the most time.',
  },
  {
    slug: 'ch-20',
    phase: 'Phase 5 — Going deeper',
    number: 21,
    title: 'When something breaks — error boundaries',
    bullets: [
      'Sometimes a component throws during render. Without a boundary, the whole app can go white.',
      'An error boundary is a class component (for now) that catches errors in its children and shows fallback UI.',
      'It does not catch errors inside event handlers or async code — those need try/catch.',
      'Show a kind message and a “Try again” button. Log the real error to the console or a service in production.',
      'Wrap risky widgets (charts, third-party components) so the rest of the shell still works.',
    ],
    code: `import { Component } from 'react';

export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong—try refreshing.</p>;
    }
    return this.props.children;
  }
}`,
    challenge: 'Wrap a small component that sometimes throws. Show your own fallback message.',
  },
  {
    slug: 'ch-21',
    phase: 'Phase 5 — Going deeper',
    number: 22,
    title: 'React 19 helpers — smoother saves and typing',
    bullets: [
      'useTransition lets you mark some updates as “can wait”. The UI stays responsive for typing and clicks.',
      'useOptimistic can show a row or change immediately, then fix it when the server answers.',
      'Form “actions” can expose pending state while a save runs — good for buttons that say “Saving…”.',
      'These tools do not replace good error handling. They improve how the app feels.',
      'Learn the normal flow first (state, fetch, forms). Add these when you feel the pain of slow updates.',
    ],
    challenge: 'Read the official React docs page for useTransition. Write in your own words when you would use it.',
  },
  {
    slug: 'ch-22',
    phase: 'Phase 6 — Ready to ship',
    number: 23,
    title: 'Login and protected pages',
    bullets: [
      'Most apps: guest → logging in → logged in (or session expired). Think in those steps.',
      'In tutorials people store a token in state or localStorage. Real companies often prefer httpOnly cookies — know both words for interviews.',
      'A protected route checks the user. No user? Redirect to /login.',
      'Show a short “loading user” state so the dashboard does not flash before redirect.',
      'Logout clears the session and sends the user back to a safe page.',
    ],
    code: `import { Navigate } from 'react-router-dom';

function Protected({ user, children }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}`,
    challenge: 'Fake a user in state. Toggle login/logout and watch the protected message appear and disappear.',
  },
  {
    slug: 'ch-23',
    phase: 'Phase 6 — Ready to ship',
    number: 24,
    title: 'Environment variables (Vite)',
    bullets: [
      'Different machines need different API URLs. You put them in .env files.',
      'In Vite, only names starting with VITE_ are exposed to the browser build.',
      'Never put real secrets in VITE_ — anyone can read them in the built JavaScript.',
      'import.meta.env.MODE tells you if you are in development or production.',
      '.env.local is for your machine only and should stay out of git (check .gitignore).',
      'After you change .env, restart npm run dev so Vite picks up new values.',
    ],
    challenge: 'Add VITE_APP_NAME in .env. Show it in the footer of your practice app.',
  },
  {
    slug: 'ch-24',
    phase: 'Phase 6 — Ready to ship',
    number: 25,
    title: 'Reusable buttons and inputs',
    bullets: [
      'A design system is a shared set of small pieces: Button, Input, Modal shell.',
      'Variants (primary, danger, ghost) are just different props that map to classes.',
      'Spread ...rest props onto the real <button> so callers can pass type="submit", aria-*, disabled.',
      'When the team grows, tools like Storybook help people browse components without running the whole app.',
      'Accessibility is part of the component: focus styles, labels, keyboard use.',
    ],
    code: `function Button({ variant = 'solid', ...props }) {
  const className = 'btn btn--' + variant;
  return <button className={className} {...props} />;
}`,
    challenge: 'Add a disabled prop that greys out the button and sets disabled on the DOM element.',
  },
  {
    slug: 'ch-25',
    phase: 'Phase 6 — Ready to ship',
    number: 26,
    title: 'Clean code habits',
    bullets: [
      'Use full words in names: taskCount not tc — you will read this code for months.',
      'Break long return ( ... ) into smaller components or variables above return.',
      'Prefer early return: if (!user) return null; then the happy path is flatter.',
      'Do not mutate state: use spread, map, filter to make new arrays and objects.',
      'Use stable keys from data ids, not the array index, when the list can reorder or delete.',
      'Before you commit, read your own diff — if it is hard to read, simplify.',
    ],
    challenge: 'Take one messy component from your notes. Split it until each function fits on one screen without scrolling.',
  },
  {
    slug: 'ch-26',
    phase: 'Phase 6 — Ready to ship',
    number: 27,
    title: 'Testing the UI',
    bullets: [
      'React Testing Library asks: what does the user see and click? Not: what is inside component.state?',
      'Tests give confidence when you refactor. They catch regressions before users do.',
      'Vitest is a common test runner with Vite. @testing-library/react helps render and query.',
      'Test happy path and one failure path (for example validation message).',
      'Pure functions in utils/ are cheap to test with many cases — start there if the UI feels heavy.',
    ],
    code: `import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('calls handler on click', () => {
  const handle = vi.fn();
  render(<Button onClick={handle}>Save</Button>);
  fireEvent.click(screen.getByText('Save'));
  expect(handle).toHaveBeenCalled();
});`,
    challenge: 'Install Vitest + Testing Library in a small branch. One test that clicks a button is enough for week one.',
  },
  {
    slug: 'ch-27',
    phase: 'Phase 6 — Ready to ship',
    number: 28,
    title: 'Build and deploy',
    bullets: [
      'npm run build creates a dist/ folder with static files you can host anywhere.',
      'npm run preview serves that build locally — always smoke-test before you upload.',
      'Vercel and Netlify are popular: connect Git, set build command npm run build, output folder dist.',
      'Set environment variables in the hosting dashboard — same names as your VITE_ keys.',
      'Do not commit API keys. Do not paste secrets into client-side code.',
      'If the live site shows a blank page, open Network tab: often a wrong base path or missing JS file.',
      'SPAs need the host to send index.html for unknown paths so client routing works.',
    ],
    challenge: 'Deploy your practice app to a free tier. Share the link with a friend and ask them to open it on mobile.',
  },
];

export function getChapter(slug) {
  return chapters.find((c) => c.slug === slug);
}

export function getAdjacent(slug) {
  const index = chapters.findIndex((c) => c.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: chapters[index - 1] ?? null,
    next: chapters[index + 1] ?? null,
  };
}
