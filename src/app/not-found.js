import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[110px] animate-drift"
        style={{
          background: "radial-gradient(circle, var(--violet) 0%, var(--violet-dim) 45%, transparent 70%)",
        }}
      />

      <span className="font-display text-8xl sm:text-9xl font-semibold text-gradient">404</span>
      <h1 className="font-display text-2xl sm:text-3xl font-semibold mt-4" style={{ color: "var(--text)" }}>
        This page isn&apos;t hosted here.
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
        The page you&apos;re looking for doesn&apos;t exist or has moved. Check the URL, or head back to the homepage.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
        style={{
          background: "linear-gradient(135deg, var(--violet) 0%, var(--violet-dim) 100%)",
          boxShadow: "0 8px 30px -8px rgba(109, 94, 248, 0.55)",
        }}
      >
        <MdArrowBack />
        Back to homepage
      </Link>
    </div>
  );
}
