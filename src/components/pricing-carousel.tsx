"use client";

import { useEffect, useRef, useState } from "react";
import { PricingCard, type PricingPlan } from "./pricing-card";

export function PricingCarousel({ plans }: { plans: PricingPlan[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft < max - 4);
      const cards = el.querySelectorAll<HTMLElement>("[data-card]");
      if (!cards.length) return;
      const cardWidth = cards[0].offsetWidth + 20;
      const idx = Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(Math.min(plans.length - 1, Math.max(0, idx)));
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [plans.length]);

  function step(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>("[data-card]");
    if (!cards.length) return;
    const cardWidth = cards[0].offsetWidth + 20;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  }

  function goTo(i: number) {
    const el = trackRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>("[data-card]");
    if (!cards.length) return;
    const cardWidth = cards[0].offsetWidth + 20;
    el.scrollTo({ left: i * cardWidth, behavior: "smooth" });
  }

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 -left-3 z-20 hidden items-center md:flex">
        <button
          onClick={() => step(-1)}
          disabled={!canPrev}
          aria-label="Previous plan"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-ink shadow-[0_8px_24px_-8px_rgba(26,26,26,0.18)] transition-all hover:bg-bg-cream disabled:cursor-not-allowed disabled:opacity-30 disabled:shadow-none"
        >
          <ChevronLeft />
        </button>
      </div>
      <div className="absolute inset-y-0 -right-3 z-20 hidden items-center md:flex">
        <button
          onClick={() => step(1)}
          disabled={!canNext}
          aria-label="Next plan"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-ink shadow-[0_8px_24px_-8px_rgba(26,26,26,0.18)] transition-all hover:bg-bg-cream disabled:cursor-not-allowed disabled:opacity-30 disabled:shadow-none"
        >
          <ChevronRight />
        </button>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 pt-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{
          scrollPadding: "1rem",
        }}
      >
        {plans.map((plan) => (
          <div
            key={plan.tier}
            data-card
            className="snap-start shrink-0 grow-0 basis-[calc(100%-1rem)] sm:basis-[calc((100%-1.25rem)/2)] lg:basis-[calc((100%-2.5rem)/3)]"
          >
            <PricingCard plan={plan} />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {plans.map((p, i) => (
          <button
            key={p.tier}
            onClick={() => goTo(i)}
            aria-label={`Go to ${p.tier}`}
            className={`h-1.5 rounded-full transition-all ${
              i === activeIndex
                ? "w-8 bg-ink"
                : "w-1.5 bg-ink/20 hover:bg-ink/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="m11 4-5 5 5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="m7 4 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
