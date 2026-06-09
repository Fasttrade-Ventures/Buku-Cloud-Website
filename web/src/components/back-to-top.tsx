"use client";

import { useEffect, useState } from "react";
import { useT } from "./i18n-provider";

const SHOW_AFTER = 360;

/**
 * Floating "back to top" pill in the bottom-right corner of the viewport.
 *
 * - Hidden until the user has scrolled past ~360px.
 * - Smooth-scrolls to the top on click (or instant when the user has
 *   `prefers-reduced-motion: reduce`).
 * - Avoids the iOS home-indicator using `env(safe-area-inset-bottom)` in CSS.
 */
export function BackToTop() {
  const t = useT();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY >= SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick() {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      aria-label={t.common.backToTop}
      onClick={handleClick}
      data-visible={visible ? "true" : "false"}
      className="back-to-top cursor-pointer"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 13V3M3.5 7.5 8 3l4.5 4.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
