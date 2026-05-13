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
    analogy:
      'React is like a smart whiteboard: you write what should be on the screen. When your data changes, React redraws only what needs to change.',
    commonMistake:
      'Do not try to learn every React word on day one. First learn: component, JSX, props, state.',
    relatedDocs: [
      { label: 'Describe the UI (react.dev)', href: 'https://react.dev/learn/describing-the-ui' },
      { label: 'Learn React — start page', href: 'https://react.dev/learn' },
    ],
    bullets: [
      {
        parts: [
          'React is a ',
          { term: 'library', definition: 'Ready-made code you add to your project.' },
          ' for building ',
          { term: 'UI', definition: 'What people see and click on the screen.' },
          '.',
        ],
      },
      'You say what should be on the screen. When your data changes, React updates the screen for you.',
      {
        parts: [
          'You build the app from small pieces called ',
          { term: 'components', definition: 'Small UI blocks you combine like Lego.' },
          '.',
        ],
      },
      {
        parts: [
          'Many React apps are ',
          { term: 'SPAs', definition: 'Single Page App: one HTML load, then JS swaps views.' },
          '. They often feel fast.',
        ],
      },
      {
        parts: [
          'The big idea stays the same: the ',
          { term: 'interface', definition: 'The visible screen users interact with.' },
          ' follows your ',
          { term: 'data', definition: 'Values in memory, including state soon.' },
          '.',
        ],
      },
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
    analogy:
      'Node is the engine room. npm is the tool shelf. Vite is a fast workshop door: you change code and see the page update quickly.',
    commonMistake:
      'If `npm run dev` fails, check you are inside the project folder (cd my-app). Wrong folder is the top mistake.',
    relatedDocs: [
      { label: 'Installation (react.dev)', href: 'https://react.dev/learn/installation' },
      { label: 'Create a new React app', href: 'https://react.dev/learn/creating-a-react-app' },
    ],
    bullets: [
      {
        parts: [
          'You need ',
          { term: 'Node.js', definition: 'Software that runs JavaScript on your computer.' },
          '. It runs Vite and ',
          { term: 'npm', definition: 'Node Package Manager: installs libraries from the internet.' },
          '.',
        ],
      },
      'npm comes with Node. It installs libraries listed in package.json.',
      'Vite gives fast refresh while you code, plus a build step for production.',
      'Daily commands: npm install (first time), npm run dev (while coding), npm run build (before ship).',
      'Create a new app: npm create vite@latest my-app -- --template react',
      'Then: cd my-app → npm install → npm run dev',
      'Open the URL Vite prints (often http://localhost:5173). Edit App.jsx and watch the page update.',
      'If a command fails, read the red text slowly. Often it is a typo, wrong folder, or Node not installed.',
    ],
    challenge: 'Create a new Vite + React app. Change the welcome text. Find vite.config.js and read what is inside.',
  },
  {
    slug: 'ch-03',
    phase: 'Phase 1 — React basics',
    number: 3,
    title: 'What goes in each folder?',
    analogy:
      'Folders are like drawers in a desk: one drawer for pens, one for paper. You always know where to look.',
    commonMistake:
      'Do not put everything in App.jsx because it feels easy. Split early so the habit sticks.',
    relatedDocs: [
      { label: 'Import and export components', href: 'https://react.dev/learn/importing-and-exporting-components' },
    ],
    bullets: [
      'Teams keep folders tidy so anyone can find files. Practise the same habit.',
      'src/components — small reusable pieces: buttons, cards, rows.',
      'src/pages — full views for one route, like Home or Tasks.',
      {
        parts: [
          'src/hooks — shared logic that uses ',
          { term: 'hooks', definition: 'Functions like useState that start with use.' },
          ' (later lessons).',
        ],
      },
      {
        parts: [
          'src/context — ',
          { term: 'context', definition: 'Shared data many components read without long prop chains.' },
          ' (theme, user).',
        ],
      },
      'src/services or src/api — network calls. Keeps fetch logic out of big JSX files.',
      'src/layouts — shells: top bar, sidebar, footer.',
      'src/assets — images, fonts. src/utils — small helpers with no UI.',
      'App.jsx is often root layout and routes. main.jsx mounts the app into index.html.',
      'Folder names can change at jobs, but the idea is the same: one job per folder.',
    ],
    challenge: 'On paper, draw a folder map for a simple “TaskFlow” app: pages, components, services.',
  },
  {
    slug: 'ch-04',
    phase: 'Phase 1 — React basics',
    number: 4,
    title: 'JSX — HTML-like code inside JavaScript',
    analogy:
      'JSX is like a bilingual sentence: one side looks like HTML, the other side is real JavaScript.',
    commonMistake:
      'Do not write class="". In JSX write className="". The word class is reserved in JavaScript.',
    relatedDocs: [
      { label: 'Writing markup with JSX', href: 'https://react.dev/learn/writing-markup-with-jsx' },
    ],
    bullets: [
      {
        parts: [
          { term: 'JSX', definition: 'HTML-like syntax inside JavaScript files.' },
          ' looks like HTML but it lives inside JavaScript.',
        ],
      },
      'A component must return one root. Use a fragment <>...</> if you do not want an extra div.',
      'Use curly braces { } to put JavaScript values inside JSX.',
      'In JSX use className, not class.',
      'Use if/else, ternary (? :), or && to choose what to show.',
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
    analogy:
      'Components are like LEGO bricks: small, named, and you snap them together to build a big model.',
    commonMistake:
      'Do not give two different components the same name in one file. Names must be clear and unique.',
    relatedDocs: [
      { label: 'Your first component', href: 'https://react.dev/learn/your-first-component' },
      { label: 'Passing props to a component', href: 'https://react.dev/learn/passing-props-to-a-component' },
    ],
    bullets: [
      'A component is usually a function with a capital letter name.',
      {
        parts: [
          'Inputs are called ',
          { term: 'props', definition: 'Data passed from parent to child, read-only for the child.' },
          '.',
        ],
      },
      'Small components are easier to read, test, and reuse.',
      'One huge file is hard for you and hard for your team.',
      'Good names: Button, Card, TaskRow, Navbar — the name should describe the job.',
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
    analogy:
      'Global CSS is like house paint for every room. Local CSS is like stickers on one notebook only.',
    commonMistake:
      'Do not forget camelCase inside style={{ }}: backgroundColor, not background-color.',
    relatedDocs: [{ label: 'Adding styles', href: 'https://react.dev/learn#adding-styles' }],
    bullets: [
      'You can use plain CSS files, CSS modules, or utilities like Tailwind — the team picks one style.',
      'Global CSS sets base colours and fonts. Local styles stop parts of the app from fighting.',
      {
        parts: [
          'Inline ',
          { term: 'style={{ }}', definition: 'A JavaScript object of CSS keys in camelCase.' },
          ' is fine for small dynamic values.',
        ],
      },
      'Mobile-first: design the small screen first, then add wider layouts with media queries.',
      {
        parts: [
          { term: 'Design tokens', definition: 'Shared values like main colour and spacing.' },
          ' keep the product consistent.',
        ],
      },
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
    analogy:
      'Keys are like roll numbers in class: if the teacher sorts the line, roll numbers help know who moved.',
    commonMistake:
      'Do not use array index as key when the list can reorder or delete rows. Prefer a stable id from data.',
    relatedDocs: [{ label: 'Rendering lists', href: 'https://react.dev/learn/rendering-lists' }],
    bullets: [
      'Real apps often have arrays: users, products, tasks.',
      {
        parts: [
          'Turn the array into JSX with ',
          { term: '.map()', definition: 'Array method: make a new array, one JSX item per row.' },
          '.',
        ],
      },
      {
        parts: [
          'Each list child needs a stable ',
          { term: 'key', definition: 'Helps React match old and new rows when the list changes.' },
          '. Prefer id from the server.',
        ],
      },
      'Keys help React know which row moved, was added, or was removed.',
      'If the list is empty, show a short message (“No tasks yet”), not a blank area.',
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
    analogy:
      'Your UI is like traffic lights: green for success, yellow for wait, red for error — users need a clear signal.',
    commonMistake:
      'Do not only build the happy path. If you forget loading and error states, users see a frozen screen.',
    relatedDocs: [{ label: 'Conditional rendering', href: 'https://react.dev/learn/conditional-rendering' }],
    bullets: [
      'Users see loading, errors, empty data, and success. Plan all of them.',
      'Use if/else early return, ternary (? :), or && for small branches.',
      'Loading: spinner or “Please wait…”. Error: clear message and maybe retry.',
      'If JSX gets messy, move the condition into a variable above return.',
      'Never leave people staring at a white box with no explanation.',
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
    analogy:
      'Events are like doorbells: the visitor presses the bell, then you (your handler function) open the door.',
    commonMistake:
      'Do not write onClick={handleClick()}. Use onClick={handleClick} so React calls it later, not now.',
    relatedDocs: [{ label: 'Responding to events', href: 'https://react.dev/learn/responding-to-events' }],
    bullets: [
      {
        parts: [
          'React uses ',
          { term: 'camelCase', definition: 'Words stuckLikeThis; first word lower case.' },
          ' names: onClick, onChange, onSubmit.',
        ],
      },
      {
        parts: [
          'Your ',
          { term: 'handler', definition: 'A function you write; React runs it when the event fires.' },
          ' is normal JavaScript.',
        ],
      },
      'For inputs, event.target.value is the current text.',
      'On forms use onSubmit and event.preventDefault() so the page does not reload.',
      'Name handlers clearly: handleChange, handleSubmit.',
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
    analogy:
      'State is like a sticky note on one component: only that component owns the note until you lift it up later.',
    commonMistake:
      'Never write count = count + 1 to update state. Always use setCount. Direct assignment does not refresh the UI.',
    relatedDocs: [{ label: "State: a component's memory", href: 'https://react.dev/learn/state-a-components-memory' }],
    bullets: [
      {
        parts: [
          { term: 'State', definition: 'Data that can change; when it changes, React re-renders.' },
          ' lives inside a component until you move it to a parent.',
        ],
      },
      {
        parts: [
          { term: 'useState', definition: 'Hook that returns [value, setter].' },
          ' gives [value, setValue]. Always update with the setter.',
        ],
      },
      'If the next value needs the old value, use setCount((prev) => prev + 1).',
      'Do not mutate arrays or objects in place. Copy first (spread, map, filter).',
      'You will use useState for toggles, form fields, menus, filters.',
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
    analogy:
      'Lifting state is like moving the shared TV remote to the parent’s hand so both children change the same channel.',
    commonMistake:
      'Do not keep two copies of the same data in two children. One source of truth should live in the parent.',
    relatedDocs: [
      { label: 'Sharing data between components', href: 'https://react.dev/learn/sharing-data-between-components' },
    ],
    bullets: [
      'Two buttons may need the same count. Separate useState in each child will not stay in sync.',
      'Fix: store data in the parent. Pass value down with props. Pass the updater as a prop too.',
      {
        parts: [
          { term: 'Props', definition: 'Data passed down from parent to child.' },
          ' flow down. The child calls your function. The parent runs setState.',
        ],
      },
      'This pattern is called lifting state up. It is normal for sibling components.',
      'A prop named onClick is still just a prop on your component, not magic.',
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
    analogy:
      'A controlled input is like a diary with a lock: React holds the only key, not the browser alone.',
    commonMistake:
      'Do not mix uncontrolled and controlled for the same input. Pick one pattern and stick to it.',
    relatedDocs: [{ label: 'Reacting to input with state', href: 'https://react.dev/learn/reacting-to-input-with-state' }],
    bullets: [
      {
        parts: [
          { term: 'Controlled input', definition: 'Value comes from React state; onChange updates state.' },
          ': React is the single source of truth.',
        ],
      },
      'Trim user text before save. Empty string after trim means “do nothing”.',
      'Disable submit while saving if you want to stop double clicks.',
      'Later you reuse this pattern for login, search, and new-task forms.',
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
    analogy:
      'useEffect is like setting an alarm after homework: first paint the UI, then run side work in the background.',
    commonMistake:
      'Do not forget the cleanup return for listeners and timers. Without it you get duplicates and leaks.',
    relatedDocs: [{ label: 'Synchronizing with Effects', href: 'https://react.dev/learn/synchronizing-with-effects' }],
    bullets: [
      {
        parts: [
          { term: 'useEffect', definition: 'Runs after paint; use for timers, listeners, fetch.' },
          ' runs after the screen paints.',
        ],
      },
      {
        parts: [
          'The second argument is the ',
          { term: 'dependency array', definition: 'List of values; effect re-runs when they change.' },
          '. [] means run once on mount.',
        ],
      },
      '[userId] means run again when userId changes.',
      'Return a cleanup function to remove listeners, clear timers, or ignore stale network results.',
      'Do not put side effects in the render body — keep render predictable.',
      'If ESLint warns about missing dependencies, fix the bug; do not silence rules without a reason.',
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
