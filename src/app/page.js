import Link from "next/link";
import { AiFillDiscord } from "react-icons/ai";
import { MdSecurity, MdAccessTime, MdCloudQueue, MdSpeed, MdSupport, MdArrowForward } from "react-icons/md";
import { IoStorefront } from "react-icons/io5";

const features = [
  {
    title: "DDoS Protection",
    description: "Layer 4 & 7 mitigation absorbs attacks before they reach your service, day or night.",
    icon: MdSecurity,
  },
  {
    title: "99.99% Uptime",
    description: "Redundant infrastructure and real-time monitoring keep your workloads online.",
    icon: MdAccessTime,
  },
  {
    title: "Cloud Hosting",
    description: "Scalable VPS and game server infrastructure that grows with your project.",
    icon: MdCloudQueue,
  },
  {
    title: "Blazing Speed",
    description: "Pure NVMe storage and tuned networking for consistently low latency.",
    icon: MdSpeed,
  },
  {
    title: "24/7 Support",
    description: "A team that actually answers — reachable on Discord any hour of the day.",
    icon: MdSupport,
  },
];

const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "<10ms", label: "Network latency" },
  { value: "24/7", label: "Human support" },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4">
        {/* Ambient background */}
        <div className="absolute inset-0 -z-10 bg-[var(--bg)]">
          <div
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-30 blur-[120px] animate-drift"
            style={{
              background:
                "radial-gradient(circle, var(--violet) 0%, var(--violet-dim) 45%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <div
            className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono tracking-wide mb-8"
            style={{ borderColor: "var(--border)", background: "var(--bg-elevated)", color: "var(--text-muted)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--ok)] animate-pulse" />
            All systems operational
          </div>

          <h1
            className="animate-fade-up font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight text-gradient"
            style={{ "--delay": "0.08s" }}
          >
            Infrastructure that
            <br />
            doesn&apos;t flinch.
          </h1>

          <p
            className="animate-fade-up mt-6 text-base sm:text-lg max-w-xl leading-relaxed"
            style={{ color: "var(--text-muted)", "--delay": "0.16s" }}
          >
            Hozvik Cloud runs VPS, game servers, and Discord bots on hardware
            built for uptime — with DDoS mitigation and NVMe storage as the
            default, not the upsell.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col sm:flex-row items-center gap-4"
            style={{ "--delay": "0.24s" }}
          >
            <Link
              href="https://billing.hozvik.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, var(--violet) 0%, var(--violet-dim) 100%)",
                boxShadow: "0 8px 30px -8px rgba(109, 94, 248, 0.55)",
              }}
            >
              <IoStorefront className="text-lg" />
              View plans
              <MdArrowForward className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="https://discord.gg/hozvik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderColor: "var(--border)", background: "var(--surface)", color: "var(--text)" }}
            >
              <AiFillDiscord className="text-xl" style={{ color: "#5865F2" }} />
              discord.gg/hozvik
            </Link>
          </div>

          {/* Stats strip */}
          <div
            className="animate-fade-up mt-16 grid grid-cols-3 gap-6 sm:gap-12 w-full max-w-lg"
            style={{ "--delay": "0.32s" }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="font-display font-semibold text-2xl sm:text-3xl" style={{ color: "var(--text)" }}>
                  {stat.value}
                </span>
                <span className="text-xs mt-1 tracking-wide" style={{ color: "var(--text-faint)" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-4 sm:px-8" style={{ background: "var(--bg-elevated)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: "var(--violet-bright)" }}>
              Built for reliability
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3" style={{ color: "var(--text)" }}>
              Everything runs on the same foundation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="glow-card rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}
                  >
                    <Icon className="text-xl" style={{ color: "var(--violet-bright)" }} />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2" style={{ color: "var(--text)" }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
