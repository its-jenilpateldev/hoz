import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { FaMicrochip, FaBolt, FaCloud, FaRocket, FaGlobe } from "react-icons/fa6";
import { BsDatabaseFill } from "react-icons/bs";

const products = [
  {
    name: "Xeon KVM Servers",
    description: "Good and cheap KVM servers, perfect for websites and mail servers.",
    price: "5.99",
    icon: FaMicrochip,
    popular: false,
  },
  {
    name: "Epyc KVM Server",
    description: "Our Epyc KVM servers based on AMD EPYC processors.",
    price: "4.95",
    icon: BsDatabaseFill,
    popular: true,
  },
  {
    name: "Ryzen KVM Server",
    description: "The Ryzen KVM servers are a perfect choice for game servers of any kind.",
    price: "2.45",
    icon: FaBolt,
    popular: false,
  },
  {
    name: "Sale Dedicated Servers",
    description: "Perfect if you are looking for a budget-friendly dedicated server.",
    price: "34.95",
    icon: FaRocket,
    popular: false,
  },
  {
    name: "Intel Dedicated Servers",
    description: "Our Intel Dedicated Servers based on Intel Xeon processors.",
    price: "54.95",
    icon: FaCloud,
    popular: false,
  },
  {
    name: "Webspaces",
    description: "Web hosting powered by AMD Ryzen, for perfect performance on your website.",
    price: "2.95",
    icon: FaGlobe,
    popular: false,
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-40 pb-20 px-6 sm:px-10 lg:px-16" style={{ background: "var(--bg)" }}>
        <div
          className="absolute -top-20 -left-32 w-[500px] h-[500px] rounded-full opacity-25 blur-[120px] animate-drift"
          style={{ background: "radial-gradient(circle, var(--violet) 0%, var(--violet-dim) 45%, transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative">
          <div className="animate-fade-up">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono tracking-wide mb-6"
              style={{ borderColor: "var(--border)", background: "var(--bg-elevated)", color: "var(--violet-bright)" }}
            >
              NEW &middot; 2026 Sale
              <MdArrowForward />
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight" style={{ color: "var(--text)" }}>
              Hozvik Cloud &mdash;<br />
              Secure. Fast. Reliable.
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed max-w-lg" style={{ color: "var(--text-muted)" }}>
              From entry-level VPS to high-end enterprise: KVM &amp; dedicated
              servers, game servers, web hosting and object storage — reliable
              hardware and attentive support.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="https://billing.hozvik.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, var(--violet) 0%, var(--violet-dim) 100%)",
                  boxShadow: "0 8px 30px -8px rgba(109, 94, 248, 0.55)",
                }}
              >
                Get started <MdArrowForward />
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{ borderColor: "var(--border)", background: "var(--surface)", color: "var(--text)" }}
              >
                Explore products
              </Link>
            </div>
          </div>

          <div className="animate-fade-up relative rounded-2xl overflow-hidden border" style={{ "--delay": "0.15s", borderColor: "var(--border)" }}>
            <Image
              src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?fm=jpg&q=80&w=1600&auto=format&fit=crop"
              alt="Hozvik Cloud data center rack"
              width={1600}
              height={1067}
              priority
              className="w-full h-[340px] sm:h-[420px] lg:h-[480px] object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center gap-2 text-xs font-medium"
              style={{ background: "rgba(8,8,13,0.7)", backdropFilter: "blur(6px)", color: "var(--text)" }}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--ok)]" />
              Our data center &mdash; live and monitored
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative py-24 px-6 sm:px-10 lg:px-16" style={{ background: "var(--bg-elevated)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-4">
            <span className="font-display text-6xl sm:text-7xl font-bold" style={{ color: "var(--violet)" }}>
              01
            </span>
          </div>
          <span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: "var(--violet-bright)" }}>
            Our products
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-3" style={{ color: "var(--text)" }}>
            Everything you need to go live
          </h2>
          <p className="text-sm sm:text-base max-w-xl mb-14" style={{ color: "var(--text-muted)" }}>
            Hozvik Cloud offers a wide range of products — here you&apos;ll find a small selection.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.name}
                  className="glow-card relative rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  style={{
                    background: "var(--surface)",
                    borderColor: product.popular ? "var(--violet-bright)" : "var(--border)",
                  }}
                >
                  {product.popular && (
                    <span
                      className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide"
                      style={{ background: "var(--violet-bright)", color: "#08080d" }}
                    >
                      POPULAR
                    </span>
                  )}

                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}
                  >
                    <Icon className="text-lg" style={{ color: "var(--violet-bright)" }} />
                  </div>

                  <h3 className="font-display text-lg font-semibold mb-2" style={{ color: "var(--text)" }}>
                    {product.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "var(--text-muted)" }}>
                    {product.description}
                  </p>

                  <div className="flex items-end justify-between pt-5 border-t" style={{ borderColor: "var(--border)" }}>
                    <div>
                      <span className="font-display text-2xl font-semibold" style={{ color: "var(--text)" }}>
                        {product.price}&euro;
                      </span>
                      <span className="text-xs ml-1.5" style={{ color: "var(--text-faint)" }}>
                        Monthly
                      </span>
                    </div>
                    <Link
                      href="https://billing.hozvik.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200"
                      style={{ color: "var(--violet-bright)" }}
                    >
                      Learn more <MdArrowForward />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
