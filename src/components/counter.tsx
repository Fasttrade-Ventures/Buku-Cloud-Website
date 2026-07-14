"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /**
   * The final string to display, e.g. "1,200+", "100%", "2023" or "BM · EN".
   *
   * We extract the leading numeric token (digits with optional grouping
   * separators), animate it from zero, and re-render with the original
   * prefix/suffix preserved. Values with no leading number (e.g. "BM · EN")
   * render verbatim with a soft fade-in.
   */
  value: string;
  /** Animation duration in ms. */
  duration?: number;
  /** Extra delay before the count begins, in ms. */
  delay?: number;
  className?: string;
};

/**
 * Parse a stat value like "1,200+" or "RM 12k" into:
 *   { prefix, number, suffix, format(n) }
 *
 * The number is the integer/float we animate from 0. `format` knows how to
 * re-stringify intermediate values while preserving thousands separators.
 */
function parseValue(raw: string): {
  prefix: string;
  suffix: string;
  target: number | null;
  hasGrouping: boolean;
} {
  const match = raw.match(/^(\D*)([\d.,]+)(.*)$/);
  if (!match) {
    return { prefix: raw, suffix: "", target: null, hasGrouping: false };
  }
  const [, prefix = "", digits = "", suffix = ""] = match;
  const hasGrouping = digits.includes(",");
  const plain = digits.replace(/,/g, "");
  const target = Number(plain);
  if (!Number.isFinite(target)) {
    return { prefix: raw, suffix: "", target: null, hasGrouping: false };
  }
  return { prefix, suffix, target, hasGrouping };
}

function formatNumber(n: number, hasGrouping: boolean): string {
  const rounded = Math.round(n);
  return hasGrouping ? rounded.toLocaleString("en-US") : String(rounded);
}

export function Counter({
  value,
  duration = 1400,
  delay = 0,
  className,
}: Props) {
  const { prefix, suffix, target, hasGrouping } = parseValue(value);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState<string>(() =>
    target === null ? value : prefix + formatNumber(0, hasGrouping) + suffix
  );

  useEffect(() => {
    if (target === null) {
      setDisplay(value);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setDisplay(prefix + formatNumber(target, hasGrouping) + suffix);
      return;
    }

    let rafId = 0;
    let cancelled = false;

    const run = () => {
      const start = performance.now() + delay;
      const tick = (now: number) => {
        if (cancelled) return;
        const elapsed = now - start;
        if (elapsed < 0) {
          rafId = requestAnimationFrame(tick);
          return;
        }
        const t = Math.min(1, elapsed / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const current = target * eased;
        setDisplay(prefix + formatNumber(current, hasGrouping) + suffix);
        if (t < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          setDisplay(prefix + formatNumber(target, hasGrouping) + suffix);
        }
      };
      rafId = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            io.disconnect();
            run();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.25 }
    );
    io.observe(node);

    return () => {
      cancelled = true;
      io.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [value, target, prefix, suffix, hasGrouping, duration, delay]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      {display}
    </span>
  );
}
