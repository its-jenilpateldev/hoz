import { FaCartShopping } from "react-icons/fa6";
import { AiFillDiscord } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const linkGroups = [
  {
    heading: "Legal",
    links: [
      { name: "Hosting Rules", href: "/hosting-rules" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Refund Policy", href: "/refund" },
    ],
  },
  {
    heading: "Company",
    links: [
      { name: "Community Rules", href: "/rules" },
      { name: "Contact", href: "/contact" },
      { name: "Status", href: "https://status.hozvik.in" },
      { name: "Discord", href: "https://discord.gg/hozvikcloud" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t" style={{ background: "var(--bg)", borderColor: "var(--border)" }}>
      <div className="px-6 sm:px-10 lg:px-36 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 w-fit">
              <div className="relative h-8 w-8 rounded-lg overflow-hidden">
                <Image src="/weblogo.png" alt="Hozvik Cloud" fill sizes="32px" className="object-contain" />
              </div>
              <span className="font-display text-lg font-semibold" style={{ color: "var(--text)" }}>
                Hozvik Cloud
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "var(--text-muted)" }}>
              Cloud infrastructure for VPS, game servers, and Discord bots —
              built on NVMe storage with DDoS mitigation included by default.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <Link
                href="https://discord.gg/hozvikcloud"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg border transition-colors duration-200"
                style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                aria-label="Discord"
              >
                <AiFillDiscord className="text-lg" style={{ color: "#5865F2" }} />
              </Link>
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.heading}>
              <h4 className="font-display text-sm font-semibold mb-4 tracking-wide" style={{ color: "var(--text)" }}>
                {group.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Store CTA */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 tracking-wide" style={{ color: "var(--text)" }}>
              Store
            </h4>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              VPS, bot hosting, and game servers — ready in minutes.
            </p>
            <Link href="https://billing.hozvik.cloud" target="_blank" rel="noopener noreferrer">
              <button
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-white transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, var(--violet) 0%, var(--violet-dim) 100%)",
                  boxShadow: "0 6px 22px -8px rgba(109, 94, 248, 0.55)",
                }}
              >
                Shop now <FaCartShopping className="text-xs" />
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div
            className="trustpilot-widget w-full max-w-md"
            data-locale="en-US"
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="68af4a4abc94b86a86ac0e80"
            data-style-height="130px"
            data-style-width="100%"
            data-theme="dark"
            data-token="13ee9dc4-9022-49a7-be41-43fd4caa6a70"
          >
            <a href="https://www.trustpilot.com/review/hozvik.cloud" target="_blank" rel="noopener">
              Trustpilot
            </a>
          </div>
        </div>

        <hr className="mt-10" style={{ borderColor: "var(--border)" }} />
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs sm:text-sm" style={{ color: "var(--text-faint)" }}>
            &copy; {new Date().getFullYear()} Hozvik Cloud. All rights reserved.
          </p>
          <p className="text-xs font-mono" style={{ color: "var(--text-faint)" }}>
            support@hozvik.cloud
          </p>
        </div>
      </div>

      <Script
        type="text/javascript"
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        async
      />
    </footer>
  );
}
