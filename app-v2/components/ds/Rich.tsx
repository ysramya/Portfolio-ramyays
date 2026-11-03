import { Fragment } from "react";

/**
 * Renders a string with **bold** spans, so copy kept in plain data (case-study
 * summaries, About paragraphs) can pull the eye to its key points without
 * moving into JSX.
 */
export default function Rich({ children }: { children: string }) {
  return (
    <>
      {children.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>,
      )}
    </>
  );
}
