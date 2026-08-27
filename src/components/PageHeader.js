export default function PageHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-14">
      {eyebrow && (
        <span
          className="font-mono text-xs tracking-[0.2em] uppercase"
          style={{ color: "var(--violet-bright)" }}
        >
          {eyebrow}
        </span>
      )}
      <h1 className="font-display text-4xl sm:text-5xl font-semibold mt-3 tracking-tight" style={{ color: "var(--text)" }}>
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {description}
        </p>
      )}
    </div>
  );
}
