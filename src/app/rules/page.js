import PageHeader from "@/components/PageHeader";

const rules = [
  "All users must treat others with respect and dignity at all times.",
  "Hate speech, harassment, or discriminatory behavior is strictly prohibited.",
  "Spamming, flooding, or unsolicited advertising will result in penalties.",
  "All content shared must comply with legal and ethical standards.",
  "Obey the instructions of moderators and administrators without dispute.",
  "Violation of Discord Terms of Service will lead to immediate suspension.",
  "Do not impersonate staff or other members.",
  "Avoid sharing personal or confidential information.",
  "Use appropriate usernames and profile pictures.",
  "Hozvik Cloud reserves the right to take action on any disruptive behavior.",
];

export default function RulesPage() {
  return (
    <div className="min-h-screen pt-44 pb-24 px-6" style={{ background: "var(--bg)" }}>
      <PageHeader
        eyebrow="Community"
        title="Community Rules"
        description="A short set of expectations for anyone in the Hozvik Cloud Discord — keeping the space useful and civil for everyone."
      />

      <div className="max-w-4xl mx-auto grid gap-4 md:grid-cols-2">
        {rules.map((rule, index) => (
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
