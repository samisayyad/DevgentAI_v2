"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-black/90 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.15),_transparent_60%)]" />
      <div className="relative container mx-auto px-6 md:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 text-lg font-semibold text-white">
                IA
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Devgent AI</h3>
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                  Interview studios
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              We build premium interview experiences where AI, motion,
              and storytelling converge to help teams hire with conviction.
            </p>
          </div>

          <FooterColumn
            title="Product"
            links={[
              { label: "Home", href: "/" },
              { label: "Practice", href: "/interview-prep" },
              { label: "Dashboard", href: "/dashboard" },
              { label: "Results", href: "/dashboard/ai-interview/history" },
            ]}
          />

          <FooterColumn
            title="Company"
            links={[
              { label: "Careers", href: "#careers" },
              { label: "Privacy", href: "#privacy" },
              { label: "Terms", href: "#terms" },
            ]}
          />
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-6 text-sm text-white/50 md:flex-row md:justify-between">
          <p>© 2025 Devgent AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="#privacy"
              className="group relative inline-flex items-center text-sm text-white/60 transition-colors hover:text-white"
            >
              <span className="after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white/70 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                Privacy Policy
              </span>
            </Link>
            <Link
              href="#terms"
              className="group relative inline-flex items-center text-sm text-white/60 transition-colors hover:text-white"
            >
              <span className="after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white/70 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                Terms of Use
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="text-lg font-semibold text-white">{title}</h4>
    <ul className="mt-6 space-y-4">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="group relative inline-flex items-center text-sm text-white/60 transition-colors hover:text-white"
          >
            <span className="after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white/70 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
              {link.label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;

