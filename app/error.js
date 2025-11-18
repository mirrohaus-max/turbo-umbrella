
"use client";
export default function Error({ error, reset }) {
  return (
    <div className="container section">
      <h2>Something went wrong</h2>
      <p style={{maxWidth:"55ch"}}>{error?.message || "Unknown error"}</p>
      <button className="btn" onClick={reset}>Try again</button>
    </div>
  );
}
