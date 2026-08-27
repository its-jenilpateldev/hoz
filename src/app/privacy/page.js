import PageHeader from "@/components/PageHeader";

const privacyPoints = [
  "We collect basic account information such as your name, email address, and billing details to provide our services.",
  "Payment information is processed securely through third-party payment providers — we do not store your full card details.",
  "Server usage data (CPU, RAM, bandwidth) may be logged for performance monitoring and abuse prevention.",
  "We do not sell or share your personal information with third parties for marketing purposes.",
  "Support tickets and Discord messages may be retained to help resolve future issues.",
  "You may request deletion of your account and associated data by contacting support.",
  "Cookies may be used on our website and billing panel to improve your browsing experience.",
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6" style={{ background: "var(--bg)" }}>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Hozvik Cloud collects, uses, and protects your information."
      />

      <div
        className="max-w-3xl mx-auto rounded-2xl border p-8 sm:p-10"
        style={{ background: "var(--surface)", borderColor: "var(--border)" }}
      >
        <ol className="flex flex-col gap-5">
          {privacyPoints.map((point, index) => (
            <li key={index} className="flex gap-4">
              <span
                className="font-mono text-xs font-medium shrink-0 w-6 h-6 rounded-md flex items-center justify-center mt-0.5"
                style={{ background: "var(--bg-elevated)", color: "var(--violet-bright)" }}
              >
                {index + 1}
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {point}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
