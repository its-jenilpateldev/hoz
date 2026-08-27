import PageHeader from "@/components/PageHeader";

const hostingRules = [
  "It is strictly prohibited to host any content or services that violate local, state, or international law.",
  "Phishing websites, malware distribution, botnets, or any form of hacking infrastructure are banned.",
  "Resource abuse (CPU, disk, network) will lead to automated suspension or throttling.",
  "All hosted content must comply with our Acceptable Use Policy (AUP).",
  "Hozvik Cloud may suspend or terminate accounts for violations without prior notice.",
  "Abuse complaints must be responded to within 24 hours or services may be disabled.",
  "You must not run cryptocurrency miners unless explicitly allowed.",
  "Chargeback after product delivery results in termination.",
  "No DDoSing, illegal activities.",
  "No PteroVM, proot, or similar software (also known as a 'free' VPS).",
];

export default function HostingRulesPage() {
  return (
    <div className="min-h-screen pt-44 pb-24 px-6" style={{ background: "var(--bg)" }}>
      <PageHeader
        eyebrow="Acceptable use"
        title="Hosting Rules"
        description="What's expected on any service running on Hozvik Cloud infrastructure. Violations may result in suspension without warning."
      />

      <div className="max-w-4xl mx-auto grid gap-4 md:grid-cols-2">
        {hostingRules.map((rule, index) => (
          <div
            key={index}
            className="glow-card rounded-xl p-5 border transition-all duration-300 hover:-translate-y-0.5 flex gap-4"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <span
              className="font-mono text-sm font-medium shrink-0 w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "var(--bg-elevated)", color: "var(--violet-bright)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-sm leading-relaxed pt-0.5" style={{ color: "var(--text-muted)" }}>
              {rule}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
