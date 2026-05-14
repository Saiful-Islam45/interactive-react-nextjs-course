import './NextjsLessonBody.css';

function blockKey(slug, block, index) {
  if (block.type === 'h2') return `${slug}-h2-${index}-${block.text.slice(0, 24)}`;
  if (block.type === 'h3') return `${slug}-h3-${index}-${block.text.slice(0, 24)}`;
  if (block.type === 'p') return `${slug}-p-${index}`;
  if (block.type === 'ul' || block.type === 'ol') return `${slug}-list-${index}`;
  if (block.type === 'table') return `${slug}-table-${index}`;
  if (block.type === 'pre') return `${slug}-pre-${index}`;
  if (block.type === 'callout') return `${slug}-callout-${index}`;
  return `${slug}-b-${index}`;
}

export function NextjsLessonBody({ slug, blocks }) {
  return (
    <div className="nextjs-lesson-body">
      {blocks.map((block, index) => {
        const key = blockKey(slug, block, index);
        switch (block.type) {
          case 'h2':
            return (
              <h2 key={key} className="nextjs-lesson-body__h2">
                {block.text}
              </h2>
            );
          case 'h3':
            return (
              <h3 key={key} className="nextjs-lesson-body__h3">
                {block.text}
              </h3>
            );
          case 'p':
            return (
              <p key={key} className="nextjs-lesson-body__p">
                {block.text}
              </p>
            );
          case 'ul':
            return (
              <ul key={key} className="nextjs-lesson-body__ul">
                {block.items.map((item, i) => (
                  <li key={`${key}-li-${i}`}>{item}</li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={key} className="nextjs-lesson-body__ol">
                {block.items.map((item, i) => (
                  <li key={`${key}-li-${i}`}>{item}</li>
                ))}
              </ol>
            );
          case 'table':
            return (
              <div key={key} className="nextjs-lesson-body__table-wrap">
                <table className="nextjs-lesson-body__table">
                  <thead>
                    <tr>
                      {block.headers.map((h, i) => (
                        <th key={`${key}-h-${i}`}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={`${key}-r-${ri}`}>
                        {row.map((cell, ci) => (
                          <td key={`${key}-c-${ri}-${ci}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'pre':
            return (
              <pre key={key} className="nextjs-lesson-body__pre">
                <code>{block.code}</code>
              </pre>
            );
          case 'callout': {
            const variant = block.variant === 'tip' ? 'nextjs-lesson-body__callout--tip' : 'nextjs-lesson-body__callout--note';
            return (
              <aside key={key} className={`nextjs-lesson-body__callout ${variant}`} role="note">
                {block.variant === 'tip' ? <strong className="nextjs-lesson-body__callout-label">Tip.</strong> : null}{' '}
                {block.text}
              </aside>
            );
          }
          default:
            return null;
        }
      })}
    </div>
  );
}
