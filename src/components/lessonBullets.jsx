import { Fragment } from 'react';
import { Jargon } from './Jargon';

/** Rich bullet: { parts: (string | { term, definition })[] } */
export function isRichBullet(b) {
  return Boolean(b && typeof b === 'object' && !Array.isArray(b) && Array.isArray(b.parts));
}

export function renderBulletContent(b) {
  if (typeof b === 'string') return b;
  if (isRichBullet(b)) {
    return b.parts.map((p, j) => {
      if (typeof p === 'string') return <Fragment key={j}>{p}</Fragment>;
      if (p && typeof p === 'object' && p.term != null && p.definition != null) {
        return (
          <Jargon key={j} definition={p.definition}>
            {p.term}
          </Jargon>
        );
      }
      return <Fragment key={j}>{String(p)}</Fragment>;
    });
  }
  return b;
}
