import PageHeader from "@/components/PageHeader";

const refundPoints = [
  "Refunds are only considered within 24 hours of purchase, and only if the service has not been substantially used.",
  "Custom or promotional plans, dedicated servers, and domain purchases are non-refundable.",
  "Refund requests must be submitted through a support ticket with your order details.",
  "Chargebacks filed without contacting support first will result in immediate account termination.",
  "Approved refunds are processed to the original payment method within 5–7 business days.",
  "Hozvik Cloud reserves the right to deny refunds in cases of suspected abuse or Terms of Service violations.",
];

export default function RefundPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6" style={{ background: "var(--bg)" }}>
      <PageHeader
        eyebrow="Legal"
        title="Refund Policy"
        description="Our approach to cancellations and refunds — please read before purchasing."
      />

      <div
        className="max-w-3xl mx-auto rounded-2xl border p-8 sm:p-10"
        style={{ background: "var(--surface)", borderColor: "var(--border)" }}
      >
        <ol className="flex flex-col gap-5">
          {refundPoints.map((point, index) => (
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
