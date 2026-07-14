"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LOGIN_URL, NAV_LINKS, REGISTER_URL } from "@/lib/site";
import { Logo } from "./logo";
import { LanguageToggle } from "./language-toggle";
import { useT } from "./i18n-provider";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const t = useT();

  // Close the drawer on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg-cream/85 backdrop-blur supports-[backdrop-filter]:bg-bg-cream/70">
      <div className="container-max flex h-[68px] items-center justify-between gap-4 lg:gap-8">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2 text-ink" aria-label="BukuCloud — home">
            <Logo />
          </Link>
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-[14px] font-medium transition-colors ${
                    active ? "text-ink" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {t.nav[l.labelKey]}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Desktop / large-tablet trailing actions */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageToggle />
          <a
            href={LOGIN_URL}
            className="text-[14px] font-medium text-ink-muted hover:text-ink"
          >
            {t.nav.login}
          </a>
          <a
            href={REGISTER_URL}
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-[12px] bg-accent px-4 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            {t.nav.startFree} <span aria-hidden>→</span>
          </a>
        </div>

        {/* Mobile trailing — just the hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-ink"
          aria-label={t.nav.toggleNav}
          aria-expanded={open}
          aria-controls="mobile-drawer"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            {open ? (
              <path
                d="M3 3l12 12M15 3L3 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M2 5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M2 9h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M2 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-drawer"
          className="lg:hidden border-t border-border bg-bg-cream"
        >
          <div className="container-max py-4 flex flex-col gap-1">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV_LINKS.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-md px-3 py-3 text-[15px] font-medium ${
                      active ? "bg-surface-alt text-ink" : "text-ink hover:bg-surface-alt"
                    }`}
                  >
                    {t.nav[l.labelKey]}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-3 flex flex-col gap-3 border-t border-border pt-4">
              <a
                href={REGISTER_URL}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-[12px] bg-accent px-4 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                {t.nav.startFree} <span aria-hidden>→</span>
              </a>
              <a
                href={LOGIN_URL}
                className="inline-flex w-full items-center justify-center rounded-[12px] border border-border bg-surface px-4 py-3 text-[15px] font-semibold text-ink hover:bg-surface-alt"
              >
                {t.nav.login}
              </a>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-ink-muted">
                  {t.nav.languageEN} · {t.nav.languageBM}
                </span>
                <LanguageToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
