import PageHeader from "@/components/PageHeader";
import { AiFillDiscord } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const channels = [
  {
    name: "Discord",
    detail: "discord.gg/hozvik",
    href: "https://discord.gg/hozvik",
    icon: AiFillDiscord,
    color: "#5865F2",
    note: "Fastest way to reach us — support is active around the clock.",
  },
  {
    name: "Email",
    detail: "support@hozvik.cloud",
    href: "mailto:support@hozvik.cloud",
    icon: MdEmail,
    color: "var(--violet-bright)",
    note: "For billing, abuse reports, or anything that needs a paper trail.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center" style={{ background: "var(--bg)" }}>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact us"
        description="Questions about a plan, a technical issue, or something else — pick whichever channel works best for you."
      />

      <div className="w-full max-w-2xl grid sm:grid-cols-2 gap-5">
        {channels.map((channel) => {
          const Icon = channel.icon;
          return (
            <Link
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-card rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}
              >
                <Icon className="text-xl" style={{ color: channel.color }} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-1" style={{ color: "var(--text)" }}>
                {channel.name}
              </h3>
              <p className="text-sm font-mono mb-3" style={{ color: "var(--violet-bright)" }}>
                {channel.detail}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {channel.note}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
