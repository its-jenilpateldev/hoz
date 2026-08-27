"use client";

import { useState, useEffect } from "react";
import { MdHome, MdPeopleAlt, MdMenu, MdClose } from "react-icons/md";
import { RiComputerFill, RiBook2Fill } from "react-icons/ri";
import { IoStorefront } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "Home", href: "/", icon: MdHome },
  { name: "Rules", href: "/rules", icon: RiBook2Fill },
  { name: "Panel", href: "https://panel.hozvik.in", icon: RiComputerFill },
  { name: "Contact", href: "/contact", icon: MdPeopleAlt },
  { name: "Store", href: "https://billing.hozvik.in", icon: IoStorefront },
  { name: "Status", href: "https://status.hozvik.in", icon: SlGraph },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 py-4 backdrop-blur-md border-b transition-colors duration-300"
      style={{
        background: scrolled ? "rgba(8, 8, 13, 0.85)" : "rgba(8, 8, 13, 0.4)",
        borderColor: "var(--border)",
      }}
    >
      <div className="px-6 sm:px-10 lg:px-36">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 select-none group">
            <div className="relative h-9 w-9 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/weblogo.png"
                alt="Hozvik Cloud"
                fill
                priority
                sizes="36px"
                className="object-contain"
                draggable={false}
              />
            </div>
            <h1 className="hidden lg:block font-display text-lg font-semibold tracking-tight" style={{ color: "var(--text)" }}>
              Hozvik Cloud
            </h1>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--text)";
                      e.currentTarget.style.background = "var(--surface)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-muted)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <Icon className="text-base" />
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden text-2xl transition-colors"
            style={{ color: "var(--text)" }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: isOpen ? "400px" : "0px" }}
      >
        <div
          className="mt-4 mx-4 flex flex-col gap-1 rounded-xl border py-3 px-2 shadow-xl"
          style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}
        >
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 text-sm font-medium px-3 py-2.5 rounded-lg transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                <Icon className="text-lg" />
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
