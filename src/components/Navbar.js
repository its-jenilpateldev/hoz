"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMenu, MdClose, MdKeyboardArrowDown, MdArrowForward } from "react-icons/md";
import { FaMicrochip, FaBolt, FaCloud } from "react-icons/fa6";
import { BsDatabaseFill } from "react-icons/bs";

const kvmMenu = [
  {
    name: "Xeon KVM Server",
    desc: "Reliable Intel Xeon-based virtual servers.",
    href: "/products/xeon-kvm",
    icon: FaMicrochip,
  },
  {
    name: "Ryzen KVM Server",
    desc: "High single-core performance for game servers.",
    href: "/products/ryzen-kvm",
    icon: FaBolt,
  },
  {
    name: "Epyc KVM Server",
    desc: "AMD EPYC-powered servers for demanding workloads.",
    href: "/products/epyc-kvm",
    icon: FaCloud,
  },
  {
    name: "IPv6 Only KVM Server",
    desc: "Budget-friendly IPv6-only virtual servers.",
    href: "/products/ipv6-kvm",
    icon: BsDatabaseFill,
  },
];

const dedicatedMenu = [
  {
    name: "Sale Dedicated Servers",
    desc: "Budget-friendly dedicated hardware.",
    href: "/products/sale-dedicated",
    icon: FaBolt,
  },
  {
    name: "Intel Dedicated Servers",
    desc: "Intel Xeon dedicated infrastructure.",
    href: "/products/intel-dedicated",
    icon: FaMicrochip,
  },
];

function Dropdown({ label, items, isOpen, onToggle, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
        style={{ color: isOpen ? "var(--text)" : "var(--text-muted)", background: isOpen ? "var(--surface)" : "transparent" }}
      >
        {label}
        <MdKeyboardArrowDown className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <div
        className="absolute top-full left-0 mt-2 w-80 rounded-2xl border p-2 shadow-2xl transition-all duration-200 origin-top"
        style={{
          background: "var(--bg-elevated)",
          borderColor: "var(--border)",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "scale(1) translateY(0)" : "scale(0.97) translateY(-6px)",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className="flex items-start gap-3 p-3 rounded-xl transition-colors duration-200 hover:bg-white/[0.04]"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <Icon className="text-sm" style={{ color: "var(--violet-bright)" }} />
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                  {item.name}
                </p>
                <p className="text-xs mt-0.5 leading-snug" style={{ color: "var(--text-faint)" }}>
                  {item.desc}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Announcement bar */}
      <div
        className="w-full py-2.5 px-4 text-center text-sm font-medium flex items-center justify-center gap-2 flex-wrap"
        style={{ background: "linear-gradient(90deg, var(--violet-dim) 0%, var(--violet) 100%)", color: "#fff" }}
      >
        <span className="px-2 py-0.5 rounded-md text-xs font-bold" style={{ background: "rgba(0,0,0,0.25)" }}>
          NEW
        </span>
        <span>Get our 2026 Sale Server now from 2.45&euro; / month!</span>
        <Link href="/products/sale-dedicated" className="inline-flex items-center gap-1 font-semibold underline underline-offset-2">
          To the offers <MdArrowForward />
        </Link>
      </div>

      {/* Main nav */}
      <nav className="w-full py-3.5 backdrop-blur-md border-b" style={{ background: "rgba(8, 8, 13, 0.85)", borderColor: "var(--border)" }}>
        <div className="px-6 sm:px-10 lg:px-16">
          <div className="flex justify-between items-center w-full">
            <Link href="/" className="flex items-center gap-2.5 select-none group">
              <div className="relative h-8 w-8 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image src="/weblogo.png" alt="Hozvik Cloud" fill priority sizes="32px" className="object-contain" draggable={false} />
              </div>
              <span className="font-display text-lg font-semibold tracking-tight" style={{ color: "var(--text)" }}>
                Hozvik Cloud
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              <Dropdown
                label="KVM Servers"
                items={kvmMenu}
                isOpen={openMenu === "kvm"}
                onToggle={() => setOpenMenu(openMenu === "kvm" ? null : "kvm")}
                onClose={() => setOpenMenu(null)}
              />
              <Dropdown
                label="Dedicated Servers"
                items={dedicatedMenu}
                isOpen={openMenu === "dedicated"}
                onToggle={() => setOpenMenu(openMenu === "dedicated" ? null : "dedicated")}
                onClose={() => setOpenMenu(null)}
              />
              <Link href="/rules" className="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200" style={{ color: "var(--text-muted)" }}>
                Rules
              </Link>
              <Link href="/contact" className="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200" style={{ color: "var(--text-muted)" }}>
                Contact
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="https://panel.hozvik.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm font-medium border transition-colors duration-200"
                style={{ borderColor: "var(--border)", color: "var(--text)" }}
              >
                Login
              </Link>
              <Link
                href="https://billing.hozvik.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:brightness-110"
                style={{ background: "linear-gradient(135deg, var(--violet) 0%, var(--violet-dim) 100%)" }}
              >
                Register
              </Link>
            </div>

            <button className="lg:hidden text-2xl" style={{ color: "var(--text)" }} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden overflow-hidden transition-all duration-300 ease-out" style={{ maxHeight: isOpen ? "600px" : "0px" }}>
          <div className="mt-4 mx-4 flex flex-col gap-1 rounded-xl border py-3 px-2 shadow-xl" style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}>
            {[...kvmMenu, ...dedicatedMenu].map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-sm font-medium px-3 py-2.5 rounded-lg" style={{ color: "var(--text-muted)" }}>
                {item.name}
              </Link>
            ))}
            <Link href="/rules" onClick={() => setIsOpen(false)} className="text-sm font-medium px-3 py-2.5 rounded-lg" style={{ color: "var(--text-muted)" }}>
              Rules
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-sm font-medium px-3 py-2.5 rounded-lg" style={{ color: "var(--text-muted)" }}>
              Contact
            </Link>
            <Link href="https://billing.hozvik.in" target="_blank" rel="noopener noreferrer" className="mt-2 text-center text-sm font-semibold text-white px-3 py-2.5 rounded-lg" style={{ background: "linear-gradient(135deg, var(--violet) 0%, var(--violet-dim) 100%)" }}>
              Register
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
