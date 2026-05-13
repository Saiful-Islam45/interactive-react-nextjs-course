import { useId } from 'react';
import './Jargon.css';

/**
 * Inline term with a short definition. Hover or focus to see the tip (keyboard-friendly).
 */
export function Jargon({ definition, children }) {
  const tipId = useId();

  return (
    <span className="jargon">
      <button type="button" className="jargon__trigger" aria-describedby={tipId}>
        {children}
      </button>
      <span id={tipId} className="jargon__tip" role="tooltip">
        {definition}
      </span>
    </span>
  );
}
