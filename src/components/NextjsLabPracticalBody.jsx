import { useCallback, useMemo, useState } from 'react';
import './NextjsLabPracticalBody.css';

const storageKey = (slug) => `nextjs-lab-step:${slug}`;

function readStoredStep(slug, total) {
  try {
    const raw = sessionStorage.getItem(storageKey(slug));
    if (raw == null) return 0;
    const n = Number.parseInt(raw, 10);
    if (!Number.isFinite(n) || n < 0 || n >= total) return 0;
    return n;
  } catch {
    return 0;
  }
}

function persistStep(slug, value) {
  try {
    sessionStorage.setItem(storageKey(slug), String(value));
  } catch {
    /* ignore */
  }
}

export function NextjsLabPracticalBody({ lab }) {
  const total = lab.steps.length;
  const [step, setStep] = useState(() => readStoredStep(lab.slug, total));

  const progress = useMemo(() => ((step + 1) / total) * 100, [step, total]);

  const go = useCallback(
    (delta) => {
      setStep((s) => {
        const next = Math.min(total - 1, Math.max(0, s + delta));
        persistStep(lab.slug, next);
        return next;
      });
    },
    [lab.slug, total],
  );

  async function copyCode() {
    const current = lab.steps[step];
    if (!current?.code) return;
    try {
      await navigator.clipboard.writeText(current.code);
    } catch {
      /* ignore */
    }
  }

  const current = lab.steps[step];

  return (
    <div className="nextjs-lab-practical">
      <div className="nextjs-lab-practical__progress" aria-hidden>
        <div className="nextjs-lab-practical__progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <p className="nextjs-lab-practical__step-meta">
        Step {step + 1} of {total}
      </p>

      <article className="nextjs-lab-practical__step">
        <h2 className="nextjs-lab-practical__step-title">{current.title}</h2>
        {current.explain.filter(Boolean).map((para, i) => (
          <p key={`${lab.slug}-e-${i}`} className="nextjs-lab-practical__explain">
            {para}
          </p>
        ))}
        {current.file ? (
          <p className="nextjs-lab-practical__file">
            <span className="nextjs-lab-practical__file-label">File</span> {current.file}
          </p>
        ) : null}
        {current.code ? (
          <div className="nextjs-lab-practical__code-wrap">
            <div className="nextjs-lab-practical__code-toolbar">
              <button type="button" className="nextjs-lab-practical__copy" onClick={copyCode}>
                Copy code
              </button>
            </div>
            <pre className="nextjs-lab-practical__pre">
              <code>{current.code}</code>
            </pre>
          </div>
        ) : null}
      </article>

      <div className="nextjs-lab-practical__nav">
        <button type="button" className="demo-btn demo-btn--ghost" onClick={() => go(-1)} disabled={step === 0}>
          ← Previous step
        </button>
        <button type="button" className="demo-btn demo-btn--primary" onClick={() => go(1)} disabled={step >= total - 1}>
          Next step →
        </button>
      </div>
    </div>
  );
}
