import PageHeader from "@/components/PageHeader";

const terms = [
  "You must be at least 13 years old or meet the age of digital consent in your jurisdiction.",
  "You agree to provide accurate billing and contact information at all times.",
  "You must not use our services to engage in illegal activities, including but not limited to DDoS, phishing, or hosting pirated content.",
  "Failure to pay invoices on time may result in suspension or termination without refund.",
  "Hozvik Cloud reserves the right to modify or terminate services with or without notice.",
  "We are not liable for any data loss, service outages, or consequential damages.",
];

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6" style={{ background: "var(--bg)" }}>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description="By accessing and using Hozvik Cloud services, you agree to the following legally binding terms."
      />

      <div
        className="max-w-3xl mx-auto rounded-2xl border p-8 sm:p-10"
        style={{ background: "var(--surface)", borderColor: "var(--border)" }}
      >
        <ol className="flex flex-col gap-5">
          {terms.map((term, index) => (
            <li key={index} className="flex gap-4">
              <span
                className="font-mono text-xs font-medium shrink-0 w-6 h-6 rounded-md flex items-center justify-center mt-0.5"
                style={{ background: "var(--bg-elevated)", color: "var(--violet-bright)" }}
              >
                {index + 1}
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {term}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
